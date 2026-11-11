import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Video, Smartphone, DoorOpen, Network } from 'lucide-react';
import { getNetworkCategoryBySlug } from '../../../../data/network_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated photos (e.g. intercoms_hero.png, intercoms_solutions.png)
import IntercomsHeroImg from '../../../../assets/images/networking.jpg';
import IntercomsFeatureImg from '../../../../assets/images/networking.jpg';

// Shown in the "Type of Service" dropdown on this page.
const INTERCOM_SERVICES = [
    'Home Intercom',
    'Apartment & Estate Intercom',
    'Office & Commercial Intercom',
    'Intercom Repair & Upgrade',
];

// What we install — shown on the brand-dark band.
const SCOPE = [
    'Audio & video door stations',
    'Smartphone app intercoms',
    'Multi-unit apartment systems',
    'Gate & door release integration',
    'Guard-house master stations',
    'IP & 2-wire systems',
];

const WHY_INTERCOMS = [
    {
        icon: Video,
        title: 'See Before You Open',
        text: 'Video door stations let you see and speak to visitors before letting anyone onto your property.',
    },
    {
        icon: Smartphone,
        title: 'Answer From Anywhere',
        text: 'Calls from the gate ring through to your phone, so you can talk to visitors and deliveries even when you are away.',
    },
    {
        icon: DoorOpen,
        title: 'Remote Door & Gate Release',
        text: 'Open the door or gate with one tap from an indoor monitor or your phone, without walking out to the entrance.',
    },
    {
        icon: Network,
        title: 'Works With Your Security',
        text: 'Integrates with access control, gate automation and CCTV, so every entry point is managed from one system.',
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

export default function Intercoms() {
    const category = getNetworkCategoryBySlug('intercomms');
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const requestQuote = () => {
        setSelectedService(INTERCOM_SERVICES[0]);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Hero: title on a solid band, image fades in below it.
                Set the band colour (#262b2e, used twice) to match the top of the hero photo. */}
            <section className="relative overflow-hidden bg-[#262b2e]">
                <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-24 text-white">
                    <Link
                        to="/network-systems"
                        className="inline-flex items-center text-sm text-white/80 hover:text-white transition"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Network Systems
                    </Link>
                    <h1 className="mt-10 sm:mt-14 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05]">
                        Know Who's at the Door, Wherever You Are
                    </h1>
                </div>

                <div className="relative h-[50vh] sm:h-[65vh] lg:h-[75vh] -mt-16 sm:-mt-24">
                    <img src={IntercomsHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#262b2e] via-[#262b2e]/40 via-30% to-transparent to-70%" />
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Intercom Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    From a single front gate to a multi-block apartment complex, we install audio and video
                    intercoms that let you screen visitors, talk to them and open the door — from an indoor
                    monitor or straight from your phone.
                </p>
            </section>

            {/* Image fading into brand dark */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={IntercomsFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(35, 31, 32, 0) 0%, rgba(35, 31, 32, 0.05) 25%, rgba(35, 31, 32, 0.35) 50%, rgba(35, 31, 32, 0.75) 75%, var(--color-brand-dark) 100%)',
                    }}
                />
            </section>

            {/* Short description + scope on brand dark */}
            <section className="bg-brand-dark text-white px-6 pb-24 pt-4 sm:pt-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div>
                        <span className="text-sm font-bold tracking-wider uppercase text-[var(--color-brand-accent)]">
                            Homes, Estates & Offices
                        </span>
                        <h3 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">Every Entrance, One Call Away</h3>
                        <p className="mt-5 text-lg text-white/75 leading-relaxed">
                            We design intercom systems around how your property is used — a simple video door
                            phone for a home, apartment panels that ring each unit, or a guard-house master station
                            that manages every gate in an estate. We also repair and upgrade existing systems.
                        </p>
                        <button
                            type="button"
                            onClick={requestQuote}
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-xl font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] hover:opacity-90 transition group"
                        >
                            Request an Intercom Quote
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 lg:pt-10 lg:border-l lg:border-white/15 lg:pl-16">
                        {SCOPE.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-0.5 w-6 h-6 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-[var(--color-content-primary)]" strokeWidth={3} />
                                </span>
                                <span className="text-lg font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Why intercoms */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Install an <span className="text-[var(--color-brand-accent)]">Intercom</span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            An intercom is the simplest way to control who comes through your gate or door. It adds
                            a layer of security, saves trips to the entrance and keeps visitors, deliveries and staff
                            moving smoothly.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_INTERCOMS.map((item) => (
                            <WhyCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="Trusted Intercom Brands" brands={category?.brands} />

            <ContactSection
                serviceOptions={INTERCOM_SERVICES}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}