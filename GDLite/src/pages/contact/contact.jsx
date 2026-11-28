import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import ContactSection from '../../components/contact_section';
import { CONTACT, HOURS, SOCIALS } from '../../data/contact_info';

const SERVICE_OPTIONS = ['Power Systems', 'Security Systems', 'Network Systems'];

// const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`;

function InfoCard({ icon: Icon, title, children }) {
    return (
        <div className="bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col">
            <Icon className="w-10 h-10 self-end text-brand" strokeWidth={1.5} />
            <h3 className="mt-6 text-2xl font-bold text-content-primary">{title}</h3>
            <div className="mt-4 text-content-secondary leading-relaxed flex flex-col gap-1">{children}</div>
        </div>
    );
}

export default function Contact() {
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Hero */}
            <section className="relative bg-brand-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/40 via-transparent to-[var(--color-brand-accent)]/20" />
                <div className="relative max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-24 pb-20 sm:pb-28">
                    <Link to="/" className="inline-flex items-center text-sm text-white/80 hover:text-white transition">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Home
                    </Link>
                    <h1 className="mt-10 text-5xl sm:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.05] text-balance">
                        Let&rsquo;s Talk About Your <span className="text-[var(--color-brand-accent)]">Project</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed">
                        Tell us what you need and our team will get back to you with advice and a free,
                        no-obligation quote.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] rounded-xl hover:opacity-90 transition"
                        >
                            Send a Message
                        </a>
                        <a
                            href={`https://wa.me/${CONTACT.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold border-2 border-white/70 rounded-xl hover:bg-white hover:text-[var(--color-content-primary)] transition"
                        >
                            <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact details */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <InfoCard icon={Phone} title="Call Us">
                        {CONTACT.phones.map((p) => (
                            <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-brand transition">
                                {p}
                            </a>
                        ))}
                    </InfoCard>

                    <InfoCard icon={Mail} title="Email Us">
                        <a href={`mailto:${CONTACT.email}`} className="hover:text-brand transition break-all">
                            {CONTACT.email}
                        </a>
                    </InfoCard>

                    <InfoCard icon={MapPin} title="Visit Us">
                        <span>{CONTACT.address}</span>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 font-semibold text-brand"
                        >
                            Get directions
                        </a>
                    </InfoCard>

                    <InfoCard icon={Clock} title="Working Hours">
                        {HOURS.map(({ days, time }) => (
                            <div key={days} className="flex justify-between gap-4">
                                <span>{days}</span>
                                <span className="text-content-primary font-medium">{time}</span>
                            </div>
                        ))}
                    </InfoCard>
                </div>
            </section>

            {/* Form */}
            <ContactSection
                serviceOptions={SERVICE_OPTIONS}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />

            {/* Map
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold">
                        Find <span className="text-[var(--color-brand-accent)]">Us</span>
                    </h2>
                    <p className="mt-4 text-lg text-content-secondary">{CONTACT.address}</p>
                    <div className="mt-8 overflow-hidden rounded-3xl border border-stroke-light shadow-sm aspect-[16/9] sm:aspect-[21/9]">
                        <iframe
                            title="GDLite Africa location"
                            src={MAP_SRC}
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section> */}

            {/* Socials */}
            <section className="bg-brand-dark text-white py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Follow our work</h2>
                        <p className="mt-2 text-white/70">See recent installations and updates on our social channels.</p>
                    </div>
                    <ul className="flex flex-wrap gap-3">
                        {SOCIALS.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/25 text-white/85 hover:text-[var(--color-content-primary)] hover:bg-[var(--color-brand-accent)] hover:border-transparent transition"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}