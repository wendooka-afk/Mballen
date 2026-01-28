import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter inside handler to ensure env vars are available
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.ZOHO_USER,
            pass: process.env.ZOHO_PASSWORD,
        },
    });

    try {
        const mailOptions = {
            from: process.env.ZOHO_USER,
            to: 'contact@mballen.org',
            replyTo: email,
            subject: `Nouveau message de ${name}: ${subject}`,
            html: `
                <h2>Nouveau message depuis le formulaire de contact</h2>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Sujet:</strong> ${subject}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: (error as Error).message });
    }
}
