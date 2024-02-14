import { Resend } from 'resend';
import EmailTemplate from './../../_components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const res = await req.json();
    console.log('Email to send:', res.emailToSend);

    const data = await resend.emails.send({
      from: 'rapidsend@resend.dev',
      to: ['hsathwik002@gmail.com'],
      subject: res?.userName + " shared File ",
      react: EmailTemplate({res}), 
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
