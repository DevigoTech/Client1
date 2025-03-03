import emailjs from 'emailjs-com';

export class EmailService {
  private static readonly SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
  private static readonly TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
  private static readonly PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

  static async sendEmail(data: Record<string, unknown>) {
    try {
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        data,
        this.PUBLIC_KEY
      );
      return response;
    } catch (error) {
      console.error('Email service error:', error);
      throw new Error('Failed to send email');
    }
  }
} 