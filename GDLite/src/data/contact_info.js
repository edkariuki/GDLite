import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

export const CONTACT = {
    phones: ['+254 705 690 695', '+254 794 585 383'],
    email: 'gdliteafrica@gmail.com',
    address: 'Spur Mall 3rd Floor, Thika Road',
    whatsapp: '254705690695',   // international format, no + or spaces
};

// Placeholder hours: edit to your real ones, or delete HOURS and its section in the page.
export const HOURS = [
    { days: 'Monday – Friday', time: '8:00 – 5:00' },
    { days: 'Saturday', time: '9:00 – 1:00' },
    { days: 'Sunday', time: 'Closed' },
];

export const SOCIALS = [
    { label: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com/your-page' },
    { label: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/your-handle' },
    { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com/company/your-company' },
    { label: 'X (Twitter)', icon: FaXTwitter, href: 'https://x.com/your-handle' },
    { label: 'WhatsApp', icon: FaWhatsapp, href: `https://wa.me/254705690695` },
];