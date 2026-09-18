import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Explicitly allow CORS and handle preflight requests if needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        const { name, email, phone, product, message } = body;

        const data = await resend.emails.send({
            from: 'GD-Lite Africa <onboarding@resend.dev>',
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

        return res.status(200).json({ success: true, data });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}