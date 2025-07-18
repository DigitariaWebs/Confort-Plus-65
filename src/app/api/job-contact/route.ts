import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface JobContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  fileName?: string;
  fileContent?: string;  // Base64 encoded file content
  fileType?: string;     // MIME type of the file
}

export async function POST(request: NextRequest) {
  console.log('🔍 Job Contact API route called');
  try {
    const body: JobContactFormData = await request.json();
    console.log('📝 Job form data received:', body);
    const { firstName, lastName, email, phone, position, fileName, fileContent, fileType } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    console.log('📧 Creating email transporter...');
    
    // Log file attachment info
    if (fileContent && fileName && fileType) {
      console.log('📎 File attachment detected:', {
        fileName,
        fileType,
        fileSizeBytes: Buffer.from(fileContent, 'base64').length
      });
    } else {
      console.log('📎 No file attachment provided');
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to HR department
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@confortplus65.com',
      to: process.env.CONTACT_EMAIL || 'rh@confortplus65.com',
      subject: `Nouvelle candidature: ${firstName} ${lastName} - Poste: ${position}`,
      attachments: fileContent && fileName && fileType ? [
        {
          filename: fileName,
          content: Buffer.from(fileContent, 'base64'),
          contentType: fileType,
        }
      ] : [],
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouvelle Candidature - Confort Plus65</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2d3748; background-color: #f7fafc; }
            .container { max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #2d5a87 0%, #1a365d 50%, #2c5282 100%); color: white; padding: 40px 30px; text-align: center; position: relative; }
            .header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>'); }
            .header-content { position: relative; z-index: 1; }
            .header h1 { font-size: 28px; font-weight: bold; margin-bottom: 8px; }
            .header .subtitle { font-size: 16px; opacity: 0.9; }
            .badge { display: inline-block; background-color: #4299e1; color: white; padding: 8px 20px; border-radius: 25px; font-size: 14px; font-weight: 600; margin-top: 15px; }
            .content { padding: 40px 30px; }
            .candidate-card { background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%); border-radius: 12px; padding: 25px; margin-bottom: 30px; border-left: 5px solid #4299e1; }
            .candidate-name { font-size: 24px; font-weight: bold; color: #2d3748; margin-bottom: 5px; }
            .candidate-position { color: #4299e1; font-size: 16px; font-weight: 600; margin-bottom: 20px; }
            .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
            .info-card { background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 10px; padding: 20px; transition: all 0.3s ease; }
            .info-card:hover { border-color: #4299e1; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(66, 153, 225, 0.15); }
            .info-label { font-weight: 600; color: #4a5568; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
            .info-value { font-size: 16px; color: #2d3748; font-weight: 500; }
            .contact-link { color: #4299e1; text-decoration: none; }
            .contact-link:hover { text-decoration: underline; }
            .file-section { background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%); border-radius: 12px; padding: 20px; margin: 25px 0; border-left: 5px solid #48bb78; }
            .file-icon { display: inline-block; width: 40px; height: 40px; background-color: #48bb78; border-radius: 8px; margin-right: 15px; vertical-align: middle; }
            .actions { text-align: center; margin-top: 35px; }
            .action-buttons { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
            .btn { padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-block; transition: all 0.3s ease; }
            .btn-primary { background-color: #4299e1; color: white; }
            .btn-primary:hover { background-color: #3182ce; transform: translateY(-1px); }
            .btn-secondary { background-color: #48bb78; color: white; }
            .btn-secondary:hover { background-color: #38a169; transform: translateY(-1px); }
            .footer { background-color: #2d3748; color: white; padding: 25px; text-align: center; }
            .footer-logo { font-size: 20px; font-weight: bold; margin-bottom: 10px; }
            .divider { height: 2px; background: linear-gradient(to right, transparent, #cbd5e0, transparent); margin: 25px 0; }
            .priority-banner { background: linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%); border-left: 5px solid #f56565; padding: 15px 20px; border-radius: 8px; margin-bottom: 25px; }
            .priority-text { color: #c53030; font-weight: 600; }
            @media (max-width: 600px) {
              .container { margin: 10px; }
              .content { padding: 25px 20px; }
              .info-grid { grid-template-columns: 1fr; }
              .action-buttons { flex-direction: column; align-items: center; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="header-content">
                <h1>Nouvelle Candidature</h1>
                <p class="subtitle">Département Ressources Humaines - Confort Plus65</p>
                <div class="badge">CANDIDATURE SPONTANÉE</div>
              </div>
            </div>
            
            <div class="content">
              <div class="candidate-card">
                <div class="candidate-name">${firstName} ${lastName}</div>
                <div class="candidate-position">Candidat(e) pour le poste : ${position}</div>
                
                <div class="info-grid">
                  <div class="info-card">
                    <div class="info-label">Contact Email</div>
                    <div class="info-value">
                      <a href="mailto:${email}" class="contact-link">${email}</a>
                    </div>
                  </div>
                  <div class="info-card">
                    <div class="info-label">Téléphone</div>
                    <div class="info-value">
                      <a href="tel:${phone}" class="contact-link">${phone}</a>
                    </div>
                  </div>
                  <div class="info-card">
                    <div class="info-label">Poste visé</div>
                    <div class="info-value">${position}</div>
                  </div>
                  <div class="info-card">
                    <div class="info-label">Date de candidature</div>
                    <div class="info-value">${new Date().toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</div>
                  </div>
                </div>
              </div>
              
              ${fileName && fileContent ? `
              <div class="file-section">
                <div class="info-label">Document Joint</div>
                <div style="display: flex; align-items: center; margin-top: 10px;">
                  <div class="file-icon"></div>
                  <div>
                    <div style="font-weight: 600; color: #2d3748;">${fileName}</div>
                    <div style="font-size: 14px; color: #4a5568;">CV - Curriculum Vitae</div>
                    <div style="font-size: 12px; color: #38a169; margin-top: 5px;">✅ Fichier joint à cet email - Cliquez pour télécharger</div>
                  </div>
                </div>
              </div>
              ` : '<div style="background-color: #fff5f5; border: 1px solid #fed7d7; border-radius: 8px; padding: 15px; margin: 20px 0; color: #c53030; text-align: center;">Aucun CV joint à cette candidature</div>'}
              
              <div class="divider"></div>
              
              <div class="actions">
                <h3 style="color: #2d3748; margin-bottom: 20px; font-size: 18px;">Actions recommandées</h3>
                <div style="text-align: center; margin-top: 30px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 500px; margin: 0 auto; padding: 0 20px;">
                    <a href="mailto:${email}?subject=Votre candidature chez Confort Plus65&body=Bonjour ${firstName},%0D%0A%0D%0ANous avons bien reçu votre candidature pour le poste de ${position}." style="background-color: #4299e1; color: white; margin-right: 15px; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; text-align: center;">Contacter le candidat</a>
                    <a href="tel:${phone}" style="background-color: #48bb78; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; text-align: center;">Appeler maintenant</a>
                  </div>
                </div>
                <p style="margin-top: 20px; font-size: 14px; color: #4a5568;">
                  <strong>Conseil RH :</strong> Contactez le candidat dans les 24-48h pour maximiser l'engagement
                </p>
              </div>
            </div>
            
            <div class="footer">
              <div class="footer-logo">Confort Plus65</div>
              <p>Département Ressources Humaines</p>
              <p style="margin-top: 10px; opacity: 0.8; font-size: 12px;">
                Cet email a été généré automatiquement depuis le portail carrières de votre site web.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
NOUVELLE CANDIDATURE - CONFORT PLUS65
==========================================

CANDIDAT(E):
• Nom: ${firstName} ${lastName}
• Email: ${email}
• Téléphone: ${phone}
• Poste visé: ${position}
• Date: ${new Date().toLocaleDateString('fr-FR')}

${fileName && fileContent ? `DOCUMENT JOINT:
• CV: ${fileName}
• Statut: Fichier joint à cet email
` : 'AUCUN CV JOINT\n'}
ACTIONS RECOMMANDÉES:
• Contacter le candidat dans les 24-48h
• Email: ${email}
• Téléphone: ${phone}

Cette candidature nécessite un suivi prioritaire.

---
Confort Plus65 - Département RH
Système de candidatures automatisé
      `,
    };

    // Send HR notification email
    console.log('📤 Sending HR notification email...');
    const emailResult = await transporter.sendMail(mailOptions);
    console.log('✅ HR notification email sent successfully');
    
    if (fileContent && fileName) {
      console.log('✅ CV attachment included in email');
    }

    return NextResponse.json(
      { message: 'Candidature envoyée avec succès!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending job application:', error);
    return NextResponse.json(
      { error: 'Échec de l\'envoi de la candidature. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
