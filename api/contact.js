import dotenv from 'dotenv';
import { sendContactEmail, validateContactPayload } from '../server/mail.js';

dotenv.config();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ code: 'ERROR', message: 'Method not allowed' });
  }

  try {
    const validation = validateContactPayload(req.body || {});

    if (!validation.ok) {
      return res.status(400).json({ code: 'ERROR', message: validation.error });
    }

    if (validation.honeypot) {
      console.log('[contact] Honeypot triggered — email NOT sent');
      return res.status(200).json({ code: 'OK' });
    }

    console.log('[contact] Sending email for:', validation.data.email);
    const info = await sendContactEmail(validation.data);
    console.log('[contact] Email SENT successfully');
    console.log('[contact] messageId:', info.messageId);
    console.log('[contact] SMTP response:', info.response);
    return res.status(200).json({ code: 'OK', messageId: info.messageId });
  } catch (error) {
    console.error('[contact] Email NOT sent:', error.message);
    if (error.response) console.error('[contact] SMTP response:', error.response);
    if (error.code) console.error('[contact] SMTP code:', error.code);
    return res.status(500).json({
      code: 'ERROR',
      message: 'Unable to send message right now. Please try again later.',
    });
  }
}
