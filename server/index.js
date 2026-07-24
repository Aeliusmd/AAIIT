import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendContactEmail, validateContactPayload } from './mail.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.API_PORT || 3001);

app.use(cors({ origin: true }));
app.use(express.json({ limit: '32kb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  try {
    const validation = validateContactPayload(req.body);

    if (!validation.ok) {
      return res.status(400).json({ code: 'ERROR', message: validation.error });
    }

    // Honeypot filled => pretend success without sending mail
    if (validation.honeypot) {
      console.log('[contact] Honeypot triggered — email NOT sent');
      return res.json({ code: 'OK' });
    }

    console.log('[contact] Sending email for:', validation.data.email);
    const info = await sendContactEmail(validation.data);
    console.log('[contact] Email SENT successfully');
    console.log('[contact] messageId:', info.messageId);
    console.log('[contact] SMTP response:', info.response);
    return res.json({ code: 'OK', messageId: info.messageId });
  } catch (error) {
    console.error('[contact] Email NOT sent:', error.message);
    if (error.response) console.error('[contact] SMTP response:', error.response);
    if (error.code) console.error('[contact] SMTP code:', error.code);
    return res.status(500).json({
      code: 'ERROR',
      message: 'Unable to send message right now. Please try again later.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`AAIIT contact API listening on http://localhost:${PORT}`);
});
