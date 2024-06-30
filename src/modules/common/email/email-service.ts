import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MAIL_HOST, MAIL_PASSWORD, MAIL_PORT, MAIL_USERNAME } from 'src/config/environment';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    const transportConfig = {
      host: `${MAIL_HOST}`,
      port: MAIL_PORT,
      secure: false,
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD
      }
    };
    this.transporter = nodemailer.createTransport(transportConfig);
  }

  async sendEmail(data: { to: string; subject: string; content?: string; html?: string }) {
    try {
      const mailOptions = {
        from: MAIL_USERNAME,
        to: data.to,
        subject: data.subject,
        text: data.content,
        html: data.html
      };

      // Send mail
      const info = await this.transporter.sendMail(mailOptions);
      // Check if the email was successfully sent
      return info.messageId ? true : false;
    } catch (error) {
      console.log(`[EmailService] - [sendEmail-Payment-Change] - error: ${error}`);
      return false;
    }
  }
}
