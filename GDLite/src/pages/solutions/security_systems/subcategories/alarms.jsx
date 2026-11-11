import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Home,
    Building2,
    BellRing,
    Flame,
    MonitorCheck,
    ShieldAlert,
} from 'lucide-react';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated photos (e.g. alarms_hero.png, alarms_solutions.png)
import AlarmsHeroImg from '../../../../assets/images/alarm_system.jpg';
import AlarmsFeatureImg from '../../../../assets/images/fire_suppression.jpg';

const SUBCATEGORY_ICONS = {
    Residential: Home,
    Commercial: Building2,
};

const WHY_ALARMS = [
    {
        icon: BellRing,
        title: 'Instant Alerts',
        text: 'Sirens, phone notifications and calls to your security provider the moment a sensor is triggered.',
    },
    {
        icon: Flame,
        title: 'Early Fire Detection',
        text: 'Smoke and heat detectors catch fires early, and suppression systems protect critical rooms before damage spreads.',
    },
    {
        icon: MonitorCheck,
        title: 'Round-the-Clock Monitoring',
        text: 'Alarms can report to a command centre or monitoring service, so someone is always ready to respond.',
    },
    {
        icon: ShieldAlert,
        title: 'Deters Intruders',
        text: 'Visible alarm systems discourage break-ins, and a loud siren cuts any attempt short.',
    },
];

function WhyCard({ icon: Icon, title, text }) {
    return (
        <div className="bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8 sm:p-10 flex flex-col">
            <Icon className="w-10 h-10 self-end text-brand" strokeWidth={1.5} />
            <h3 className="mt-8 text-2xl font-bold text-content-primary">{title}</h3>
            <p className="mt-4 text-content-secondary leading-relaxed">{text}</p>
        </div>
    );
}

export default function Alarms() {
    const category = getSecurityCategoryBySlug('alarms');
    const subcategories = category?.subcategories ?? [];
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const requestQuote = (title) => {
        setSelectedService(title);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Hero: title on a solid band, image fades in below it.
                Set the band colour (#262b2e, used twice) to match the top of the hero photo. */}
            <section className="relative overflow-hidden bg-[#262b2e]">
                <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-24 text-white">
                    <Link
                        to="/security-systems"
                        className="inline-flex items-center text-sm text-white/80 hover:text-white transition"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Security Systems
                    </Link>
                    <h1 className="mt-10 sm:mt-14 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05]">
                        Alerted the Moment It Matters
                    </h1>
                </div>

                <div className="relative h-[50vh] sm:h-[65vh] lg:h-[75vh] -mt-16 sm:-mt-24">
                    <img src={AlarmsHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#262b2e] via-[#262b2e]/40 via-30% to-transparent to-70%" />
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Alarm Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    We design and install intruder and fire alarm systems that detect threats early and get the
                    right people responding fast — from a family home to critical facilities that can never be
                    left unprotected.
                </p>
            </section>

            {/* Image fading into brand accent */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={AlarmsFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(248, 158, 29, 0) 0%, rgba(248, 158, 29, 0.05) 25%, rgba(248, 158, 29, 0.35) 50%, rgba(248, 158, 29, 0.75) 75%, var(--color-brand-accent) 100%)',
                    }}
                />
            </section>

            {/* Subcategories on brand accent (dark text for contrast on orange) */}
            <section className="bg-[var(--color-brand-accent)] text-[var(--color-content-primary)] px-6 pb-24 pt-4 sm:pt-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x divide-black/15">
                    {subcategories.map((sub, i) => {
                        const Icon = SUBCATEGORY_ICONS[sub.title] || BellRing;
                        return (
                            <div
                                key={sub.title}
                                className={`flex flex-col py-10 md:py-6 md:px-14 lg:px-20 ${i > 0 ? 'border-t border-black/15 md:border-t-0' : ''} ${i === 0 ? 'md:pl-0' : ''} ${i === subcategories.length - 1 ? 'md:pr-0' : ''}`}
                            >
                                <Icon className="w-10 h-10 text-brand" strokeWidth={1.5} />
                                <h3 className="mt-6 text-3xl sm:text-4xl font-extrabold leading-tight">{sub.title}</h3>
                                <p className="mt-4 text-lg opacity-80 leading-relaxed flex-1 max-w-md">{sub.description}</p>
                                <button
                                    type="button"
                                    onClick={() => requestQuote(sub.title)}
                                    className="mt-8 self-start inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white bg-brand hover:bg-brand-hover transition-colors group"
                                >
                                    Request a Quote
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why alarms */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why You Need an <span className="text-brand">Alarm System</span>
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Every minute counts during a break-in or a fire. A professionally installed alarm system
                            detects the problem immediately and makes sure help is on the way — protecting people,
                            property and the equipment your operations depend on.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_ALARMS.map((item) => (
                            <WhyCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="Trusted Alarm & Fire Safety Brands" brands={category?.brands} />

            <ContactSection
                serviceOptions={subcategories.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}