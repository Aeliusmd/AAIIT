import nodemailer from 'nodemailer';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getSmtpConfig() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM_NAME,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    throw new Error('Missing SMTP environment variables. Check your .env file.');
  }

  return {
    host: SMTP_HOST.trim(),
    port: Number(SMTP_PORT || 587),
    secure: SMTP_SECURE === 'true',
    user: SMTP_USER.trim(),
    // Gmail app passwords are often pasted with spaces — strip them
    pass: SMTP_PASS.replace(/\s+/g, ''),
    to: CONTACT_TO.trim(),
    fromName: (CONTACT_FROM_NAME || 'AAIIT Website').trim(),
  };
}

export function createTransporter() {
  const config = getSmtpConfig();

  return {
    config,
    transporter: nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    }),
  };
}

function buildSubmissionEmailHtml({
  greeting = 'Hi',
  intro = "We've received your form submission. Here's what you entered:",
  fields,
}) {
  const fieldRows = fields
    .map(
      ({ label, value, href }) => `
                    <tr>
                      <td style="padding:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;">
                        <p style="margin:0 0 4px 0;font-size:13px;line-height:1.4;color:#9ca3af;font-weight:400;">${escapeHtml(label)}</p>
                        <p style="margin:0;font-size:15px;line-height:1.5;color:#111827;font-weight:700;">
                          ${
                            href
                              ? `<a href="${escapeHtml(href)}" style="color:#2563eb;text-decoration:underline;">${escapeHtml(value)}</a>`
                              : escapeHtml(value).replace(/\n/g, '<br>')
                          }
                        </p>
                      </td>
                    </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form submission received</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f3f4f6;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="560" style="width:560px;max-width:560px;background-color:#ffffff;border-radius:8px;">
          <tr>
            <td align="center" style="padding:40px 40px 20px 40px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0;font-size:22px;line-height:1.4;color:#111827;font-weight:700;">
                &#127775; Your form submission has been received.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 40px 20px 40px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#374151;text-align:left;">
              <p style="margin:0 0 8px 0;">${escapeHtml(greeting)}</p>
              <p style="margin:0;">${escapeHtml(intro)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 24px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f3f4f6;border-radius:8px;">
                <tr>
                  <td style="padding:20px 20px 4px 20px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
${fieldRows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 36px 40px;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="border-top:1px solid #e5e7eb;padding-top:18px;">
                    <p style="margin:0;font-size:13px;line-height:1.5;color:#9ca3af;">
                      If you didn't submit this form, you can safely ignore this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildSubmissionFields({ name, email, phone, program, message }) {
  return [
    { label: 'email', value: email, href: `mailto:${email}` },
    { label: 'message', value: message || '—' },
    { label: 'name', value: name },
    { label: 'phone', value: phone || '—' },
    { label: 'program', value: program },
  ];
}

export async function sendContactEmail({ name, email, phone, program, message }) {
  const { config, transporter } = createTransporter();
  const fields = buildSubmissionFields({ name, email, phone, program, message });

  // Gmail often hides mail when From and To are the same account (only shows in Sent).
  // Plus-addressing still delivers to the same inbox but usually appears in Inbox.
  let adminTo = config.to;
  if (adminTo.toLowerCase() === config.user.toLowerCase() && /@gmail\.com$/i.test(config.user)) {
    const [local, domain] = config.user.split('@');
    adminTo = `${local}+applications@${domain}`;
    console.log('[mail] Using Gmail plus-address for Inbox delivery:', adminTo);
  }

  const sharedHtml = buildSubmissionEmailHtml({
    fields,
  });

  const sharedText = [
    '🌟 Your form submission has been received.',
    '',
    'Hi',
    '',
    "We've received your form submission. Here's what you entered:",
    '',
    `email: ${email}`,
    `message: ${message || '—'}`,
    `name: ${name}`,
    `phone: ${phone || '—'}`,
    `program: ${program}`,
    '',
    "If you didn't submit this form, you can safely ignore this email.",
  ].join('\n');

  const adminInfo = await transporter.sendMail({
    from: `"${config.fromName}" <${config.user}>`,
    to: adminTo,
    replyTo: email,
    subject: '🌟 Your form submission has been received',
    text: sharedText,
    html: sharedHtml,
  });

  console.log('[mail] Admin email SENT to:', adminTo);
  console.log('[mail] messageId:', adminInfo.messageId);
  console.log('[mail] accepted:', adminInfo.accepted);
  console.log('[mail] rejected:', adminInfo.rejected);
  console.log('[mail] response:', adminInfo.response);

  const confirmInfo = await transporter.sendMail({
    from: `"${config.fromName}" <${config.user}>`,
    to: email,
    subject: '🌟 Your form submission has been received',
    text: sharedText,
    html: sharedHtml,
  });

  console.log('[mail] Confirmation SENT to applicant:', email);
  console.log('[mail] confirm messageId:', confirmInfo.messageId);
  console.log('[mail] confirm response:', confirmInfo.response);

  return adminInfo;
}

export function validateContactPayload(body) {
  const name = String(body?.name || '').trim();
  const email = String(body?.email || '').trim();
  const phone = String(body?.phone || '').trim();
  const program = String(body?.program || '').trim();
  const message = String(body?.message || '').trim();
  const websiteAlt = String(body?.website_alt || '').trim();

  if (websiteAlt) {
    return { ok: true, honeypot: true };
  }

  if (!name || !email || !program) {
    return { ok: false, error: 'Name, email, and program are required.' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Please provide a valid email address.' };
  }

  if (message.length > 500) {
    return { ok: false, error: 'Message must be 500 characters or fewer.' };
  }

  return {
    ok: true,
    honeypot: false,
    data: { name, email, phone, program, message },
  };
}
