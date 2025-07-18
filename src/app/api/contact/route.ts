import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  formType: 'consultation' | 'service' | 'job' | 'partnership';
  serviceName?: string;
  fileName?: string;
}

export async function POST(request: NextRequest) {
  console.log('🔍 Contact API route called');
  try {
    const body: ContactFormData = await request.json();
    console.log('📝 Form data received:', body);
    const { name, email, phone, message, formType, serviceName, fileName } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Create transporter - You'll need to configure this with your email service
    console.log('📧 Creating email transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
    });

    // Determine email subject based on form type
    const getSubject = () => {
      switch (formType) {
        case 'consultation':
          return `Nouvelle demande de consultation de ${name}`;
        case 'service':
          return `Nouvelle demande de service: ${serviceName || 'Service'} de ${name}`;
        case 'job':
          return `Nouvelle candidature de ${name}`;
        case 'partnership':
          return `Nouvelle demande de partenariat de ${name}`;
        default:
          return `Nouveau contact de ${name}`;
      }
    };

    // Email to you (the business owner)
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@confortplus65.com',
      to: process.env.CONTACT_EMAIL || 'contact@confortplus65.com',
      subject: getSubject(),
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouvelle soumission de formulaire de contact</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px 20px; text-align: center; }
            .header h1 { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
            .header p { font-size: 14px; opacity: 0.9; }
            .content { padding: 30px 20px; }
            .client-info { background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #10b981; }
            .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-bottom: 25px; }
            .info-item { background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 6px; padding: 15px; }
            .info-label { font-weight: 600; color: #495057; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .info-value { font-size: 16px; color: #212529; }
            .message-section { background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-top: 20px; }
            .message-content { background-color: white; padding: 15px; border-radius: 6px; border-left: 3px solid #10b981; font-style: italic; }
            .footer { background-color: #343a40; color: white; padding: 20px; text-align: center; font-size: 12px; }
            .urgent { background-color: #fff3cd; border-color: #ffeaa7; color: #856404; padding: 10px; border-radius: 6px; margin-bottom: 20px; }
            .divider { height: 1px; background: linear-gradient(to right, transparent, #dee2e6, transparent); margin: 20px 0; }
            .form-type-badge { background-color: #10b981; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
            @media (max-width: 600px) {
              .container { margin: 10px; }
              .content { padding: 20px 15px; }
              .info-grid { grid-template-columns: 1fr; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${getSubject()}</h1>
              <p>Confort Plus65 - Formulaire de contact du site web</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>Nouvelle demande:</strong> Une personne s'intéresse à vos services et a besoin d'une réponse dans les 24 heures.
              </div>
              
              <div style="text-align: center; margin-bottom: 20px;">
                <span class="form-type-badge">${formType.toUpperCase()}</span>
              </div>
              
              <div class="client-info">
                <h2 style="color: #10b981; margin-bottom: 15px; font-size: 18px;">Informations du client</h2>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Nom complet</div>
                    <div class="info-value"><strong>${name}</strong></div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Adresse email</div>
                    <div class="info-value"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Numéro de téléphone</div>
                    <div class="info-value"><a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></div>
                  </div>
                  ${serviceName ? `
                  <div class="info-item">
                    <div class="info-label">Service demandé</div>
                    <div class="info-value"><span style="background-color: #10b981; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px;">${serviceName}</span></div>
                  </div>
                  ` : ''}
                  ${fileName ? `
                  <div class="info-item">
                    <div class="info-label">Fichier joint</div>
                    <div class="info-value">${fileName}</div>
                  </div>
                  ` : ''}
                </div>
              </div>
              
              <div class="divider"></div>
              
              ${message && message.trim() ? `
              <div class="message-section">
                <h3 style="color: #343a40; margin-bottom: 15px; font-size: 16px;">${formType === 'job' ? 'Lettre de motivation' : formType === 'partnership' ? 'Proposition de partenariat' : 'Détails du projet & Message'}</h3>
                <div class="message-content">
                  "${message}"
                </div>
              </div>
              
              <div class="divider"></div>
              ` : ''}
              
              <div style="text-align: center; margin-top: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 500px; margin: 0 auto; padding: 0 20px;">
                    <a href="mailto:${email}" style="background-color: #4299e1; color: white; margin-right: 15px; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; text-align: center;">Répondre par email</a>
                    <a href="tel:${phone}" style="background-color: #48bb78; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; text-align: center;">Appeler maintenant</a>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>Confort Plus65</strong></p>
              <p>contact@confortplus65.com</p>
              <p style="margin-top: 10px; opacity: 0.8;">Cet email a été généré automatiquement depuis le formulaire de contact de votre site web.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
${getSubject()}
==============================

INFORMATIONS CLIENT:
• Nom: ${name}
• Email: ${email}
• Téléphone: ${phone}
• Type de demande: ${formType}
${serviceName ? `• Service: ${serviceName}` : ''}
${fileName ? `• Fichier joint: ${fileName}` : ''}

${message && message.trim() ? `MESSAGE:
${message}

` : ''}PROCHAINES ÉTAPES:
• Répondre dans les 24 heures pour une meilleure conversion
• Email: ${email}
• Téléphone: ${phone}

---
Confort Plus65
      `,
    };

    // Send business notification email only
    console.log('📤 Sending business notification email...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Business notification email sent');

    return NextResponse.json(
      { message: 'Email envoyé avec succès!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Échec de l\'envoi de l\'email. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
