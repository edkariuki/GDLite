import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const body = await request.json();
        const { name, email, phone, product, message } = body;

        const data = await resend.emails.send({
            from: 'GD-Lite Africa <onboarding@resend.dev>', // Change to your verified domain email later
            to: [process.env.SALES_EMAIL || 'gdliteafrica@gmail.com'],
            subject: `New Quote Request: ${product || 'General'}`,
            html: `
        <h2>New Quote Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product Interest:</strong> ${product}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}