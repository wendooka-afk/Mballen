import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';

function apiMiddleware(env: Record<string, string>): Plugin {
  return {
    name: 'api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/send-email' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', async () => {
            try {
              const { name, email, subject, message } = JSON.parse(body);
              console.log(`[LOCAL TEST] Tentative d'envoi d'email de ${name}...`);

              const transporter = nodemailer.createTransport({
                host: 'smtp.zoho.com',
                port: 465,
                secure: true,
                auth: {
                  user: env.ZOHO_USER,
                  pass: env.ZOHO_PASSWORD,
                },
              });

              const mailOptions = {
                from: env.ZOHO_USER,
                to: 'contact@mballen.org',
                replyTo: email,
                subject: `[LOCAL TEST] Nouveau message de ${name}: ${subject}`,
                html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
              };

              const info = await transporter.sendMail(mailOptions);

              console.log('[LOCAL TEST] Email envoyé avec succès!', info.messageId);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ message: 'Email sent successfully', messageId: info.messageId }));
            } catch (error) {
              console.error('[LOCAL TEST] Erreur interne:', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: (error as Error).message }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), apiMiddleware(env)],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
