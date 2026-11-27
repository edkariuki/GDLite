import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

// Replace the hrefs with your real profiles. Delete any you don't use.
const SOCIALS = [
    { label: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com/your-page' },
    { label: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/your-handle' },
    { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com/company/your-company' },
    { label: 'X (Twitter)', icon: FaXTwitter, href: 'https://x.com/your-handle' },
    { label: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/254700000000' },
];

const LINK_GROUPS = [
    {
        title: 'Power Systems',
        base: '/power-systems',
        links: [
            { label: 'Solar', to: 'solar' },
            { label: 'UPS', to: 'ups' },
            { label: 'Generators', to: 'generators' },
            { label: 'Electrical', to: 'electrical' },
        ],
    },
    {
        title: 'Security Systems',
        base: '/security-systems',
        links: [
            { label: 'Access Control', to: 'access-control' },
            { label: 'CCTV', to: 'cctv' },
            { label: 'Alarms', to: 'alarms' },
            { label: 'Electric Fence', to: 'electric-fence' },
            { label: 'Gate Automation', to: 'gate-automation' },
        ],
    },
    {
        title: 'Network Systems',
        base: '/network-systems',
        links: [
            { label: 'Internet Provisioning', to: 'internet-provisioning' },
            { label: 'Cable Structures', to: 'cable-structures' },
            { label: 'Fibre Optic Deployment', to: 'fibre-optic-deployment' },
            { label: 'Networking', to: 'networking' },
            { label: 'Intercomms', to: 'intercomms' },
            { label: 'Access Points', to: 'access-points' },
        ],
    },
];

// Replace with your real details.
const CONTACT = {
    phone: '+254 700 000 000',
    email: 'gdliteafrica@gmail.com',
    address: 'Spur Mall, Thika Road',
};

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-12">
                    {/* Brand + socials */}
                    <div>
                        <Link to="/" className="text-2xl font-extrabold tracking-tight">
                            GDLITE<span className="text-[var(--color-brand-accent)]">AFRICA</span>
                        </Link>
                        <p className="mt-4 text-white/70 leading-relaxed max-w-sm">
                            Power, security and network solutions for homes, businesses and institutions.
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-3">
                            {SOCIALS.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-[var(--color-content-primary)] hover:bg-[var(--color-brand-accent)] hover:border-transparent transition"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service links */}
                    {LINK_GROUPS.map((group) => (
                        <nav key={group.title} aria-label={group.title}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-accent)]">
                                <Link to={group.base} className="hover:opacity-80 transition">
                                    {group.title}
                                </Link>
                            </h3>
                            <ul className="mt-5 space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={`${group.base}/${link.to}`}
                                            className="text-white/70 hover:text-white transition"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                {/* Contact row */}
                <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/80">
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-3 hover:text-white transition">
                        <Phone className="w-5 h-5 text-[var(--color-brand-accent)]" strokeWidth={1.75} />
                        {CONTACT.phone}
                    </a>
                    <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-3 hover:text-white transition">
                        <Mail className="w-5 h-5 text-[var(--color-brand-accent)]" strokeWidth={1.75} />
                        {CONTACT.email}
                    </a>
                    <span className="inline-flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[var(--color-brand-accent)]" strokeWidth={1.75} />
                        {CONTACT.address}
                    </span>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
                    <p>&copy; {year} GDLiteAfrica. All rights reserved.</p>
                    <Link to="/about" className="hover:text-white transition">
                        About Us
                    </Link>
                </div>
            </div>
        </footer>
    );
}