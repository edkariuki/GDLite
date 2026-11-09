import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Zap,
    ShieldCheck,
    Activity,
    HardDrive,
    Home,
    Server,
    HeartPulse,
} from 'lucide-react';
import { getCategoryBySlug } from '../../../../data/data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
import UpsHeroImg from '../../../../assets/images/ups_hero.png';
import UpsFeatureImg from '../../../../assets/images/ups_solution.jpg';

// Shown in the "Type of Service" dropdown on this page.
const UPS_SERVICES = ['New UPS Supply & Installation', 'UPS Battery Replacement', 'UPS Servicing & Repair'];

// What a UPS protects — shown on the brand-blue band.
const APPLICATIONS = [
    {
        icon: Home,
        title: 'Homes & Offices',
        text: 'Keep computers, routers, CCTV and POS systems running through power cuts, so work and sales never stop.',
    },
    {
        icon: Server,
        title: 'Servers & Data Rooms',
        text: 'Online double-conversion UPS units deliver clean power with zero transfer time for servers, storage and network gear.',
    },
    {
        icon: HeartPulse,
        title: 'Critical Equipment',
        text: 'Reliable backup for medical devices, laboratory instruments and industrial controls where a single interruption is costly.',
    },
];

const WHY_UPS = [
    {
        icon: Zap,
        title: 'Zero Downtime',
        text: 'A UPS switches to battery instantly when the grid fails, so your equipment keeps running without a flicker.',
    },
    {
        icon: ShieldCheck,
        title: 'Protects Equipment',
        text: 'Shields sensitive electronics from surges, spikes and brownouts that shorten their lifespan or cause sudden failure.',
    },
    {
        icon: Activity,
        title: 'Clean, Stable Power',
        text: 'Built-in voltage regulation smooths out the fluctuations common on the grid, delivering steady power to your devices.',
    },
    {
        icon: HardDrive,
        title: 'Safeguards Your Data',
        text: 'Gives you time to save work and shut down safely, preventing corrupted files and lost transactions during outages.',
    },
];

function WhyUpsCard({ icon: Icon, title, text }) {
    return (
        <div className="bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8 sm:p-10 flex flex-col">
            <Icon className="w-10 h-10 self-end text-brand" strokeWidth={1.5} />
            <h3 className="mt-8 text-2xl font-bold text-content-primary">{title}</h3>
            <p className="mt-4 text-content-secondary leading-relaxed">{text}</p>
        </div>
    );
}

export default function Ups() {
    const category = getCategoryBySlug('ups');
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const requestQuote = () => {
        setSelectedService(UPS_SERVICES[0]);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Hero */}
            <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col overflow-hidden">
                <img src={UpsHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/10" />

                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24">
                    <Link
                        to="/power-systems"
                        className="inline-flex items-center text-sm text-white/80 hover:text-white transition"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Power Systems
                    </Link>
                    <h1 className="mt-12 sm:mt-16 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.05]">
                        Power That Never Skips a Beat
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">UPS Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    An uninterruptible power supply bridges the gap between a power cut and your backup source —
                    instantly. We size, supply and install UPS systems for everything from a single workstation to
                    an entire server room, and keep them healthy with battery replacement and routine servicing.
                </p>
            </section>

            {/* Image fading into brand blue */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={UpsFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(15, 81, 178, 0) 0%, rgba(15, 81, 178, 0.05) 25%, rgba(15, 81, 178, 0.35) 50%, rgba(15, 81, 178, 0.75) 75%, var(--color-brand) 100%)',
                    }}
                />
            </section>

            {/* Applications on brand blue */}
            <section className="bg-brand text-white px-6 pb-24 pt-4 sm:pt-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 md:mb-14">What We Keep Running</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white/20">
                        {APPLICATIONS.map(({ icon: Icon, title, text }, i) => (
                            <div
                                key={title}
                                className={`flex flex-col py-10 md:py-4 md:px-10 ${i > 0 ? 'border-t border-white/20 md:border-t-0' : ''} ${i === 0 ? 'md:pl-0' : ''} ${i === APPLICATIONS.length - 1 ? 'md:pr-0' : ''}`}
                            >
                                <Icon className="w-10 h-10 text-[var(--color-brand-accent)]" strokeWidth={1.5} />
                                <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold leading-tight">{title}</h3>
                                <p className="mt-4 text-white/80 leading-relaxed flex-1">{text}</p>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={requestQuote}
                        className="mt-12 inline-flex items-center px-8 py-4 font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] rounded-xl hover:opacity-90 transition group"
                    >
                        Request a UPS Quote
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </section>

            {/* Why UPS */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why You Need a <span className="text-[var(--color-brand-accent)]">UPS</span>
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Power cuts, surges and voltage dips are a daily reality. A UPS absorbs them before they
                            reach your equipment — protecting your hardware, your data and your business from
                            costly interruptions.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Engineer
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_UPS.map((item) => (
                            <WhyUpsCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="UPS Brands we work with" brands={category?.brands} />

            <ContactSection
                serviceOptions={UPS_SERVICES}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}