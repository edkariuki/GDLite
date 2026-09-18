import { Resend } from 'resend';

export default async function handler(req, res) {
    // 1. Handle non-POST requests cleanly
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

    try {
        // 2. Safely parse incoming JSON body
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        const { name, email, phone, product, message } = body || {};

        if (!email || !name) {
            return res.status(400).json({ error: 'Name and email are required fields.' });
        }

        // 3. Check if API key is present
        if (!process.env.RESEND_API_KEY) {
            return res.status(500).json({ error: 'Server configuration error: Missing Resend API key.' });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        // 4. Send email via Resend
        const data = await resend.emails.send({
            from: 'GDLite Africa <onboarding@resend.dev>',
            // to: [process.env.SALES_EMAIL || 'gdliteafrica@gmail.com'],
            to: ['mbichikariuki01@gmail.com'],
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
        console.error('Resend API Error:', error);
        return res.status(500).json({ error: error.message || 'Internal server error' });
    }
}