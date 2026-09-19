import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactoService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  async enviarMensaje(
    nombre: string,
    email: string,
    asunto: string,
    mensaje: string,
  ) {
    await this.transporter.sendMail({
      from: `"${nombre}" <${email}>`,
      to: process.env.EMAIL_DESTINO,
      subject: `[FRLG Contacto] ${asunto}`,
      html: `
        <h3>Nuevo mensaje desde el formulario de contacto</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return { mensaje: 'Mensaje enviado correctamente' };
  }
}
