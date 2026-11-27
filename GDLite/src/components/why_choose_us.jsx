import React from 'react';
import { BadgeCheck, Layers, ShieldCheck, Wrench } from 'lucide-react';

// Edit these so every claim is true for GDLite Africa.
const REASONS = [
    {
        icon: BadgeCheck,
        title: 'Certified Engineers',
        text: 'Qualified technicians design and install every system to EPRA and national safety standards.',
    },
    {
        icon: Layers,
        title: 'One Trusted Provider',
        text: 'Power, security and network systems from a single team, so everything works together.',
    },
    {
        icon: ShieldCheck,
        title: 'Quality Equipment',
        text: 'We supply and install proven brands, backed by proper warranties.',
    },
    {
        icon: Wrench,
        title: 'Ongoing Support',
        text: 'Servicing, maintenance and fast repairs long after the installation is done.',
    },
];

function ReasonCard({ icon: Icon, title, text }) {
    return (
        <div className="bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8 sm:p-10 flex flex-col">
            <Icon className="w-10 h-10 self-end text-brand" strokeWidth={1.5} />
            <h3 className="mt-8 text-2xl font-bold text-content-primary">{title}</h3>
            <p className="mt-4 text-content-secondary leading-relaxed">{text}</p>
        </div>
    );
}

export default function WhyChooseUs() {
    return (
        <section className="bg-surface-light py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                <div>
                    <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                        Why Choose <span className="text-[var(--color-brand-accent)]">GD</span><span className="text-[var(--color-brand)]">LITE</span><span className="text-[var(--color-brand-dark)]">AFRICA</span>?
                    </h2>
                    <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                        We design, install and maintain the systems your home or business depends on, with the
                        same standard of workmanship across everything we do.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {REASONS.map((item) => (
                        <ReasonCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}