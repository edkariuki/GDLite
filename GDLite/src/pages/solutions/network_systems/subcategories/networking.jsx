import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, Briefcase, Network, Wifi, ShieldCheck, Gauge, Headset } from 'lucide-react';
import { getNetworkCategoryBySlug } from '../../../../data/network_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated photos (e.g. networking_hero.png, networking_solutions.png)
import NetworkingHeroImg from '../../../../assets/images/networking.jpg';
import NetworkingFeatureImg from '../../../../assets/images/networking.jpg';

const SUBCATEGORY_ICONS = {
    Residential: Home,
    Commercial: Briefcase,
};

const WHY_NETWORKING = [
    {
        icon: Wifi,
        title: 'Full Wi-Fi Coverage',
        text: 'Properly placed access points eliminate dead zones, so every room, floor and outdoor area gets a strong signal.',
    },
    {
        icon: Gauge,
        title: 'Fast & Stable',
        text: 'Quality switches and routers, configured correctly, keep speeds high even with many devices online at once.',
    },
    {
        icon: ShieldCheck,
        title: 'Secure by Design',
        text: 'Firewalls, separate guest networks and strong encryption keep your data and devices safe from intruders.',
    },
    {
        icon: Headset,
        title: 'Managed & Supported',
        text: 'We monitor, update and support your network after installation, so problems are fixed before you notice them.',
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

export default function Networking() {
    const category = getNetworkCategoryBySlug('networking');
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
                        to="/network-systems"
                        className="inline-flex items-center text-sm text-white/80 hover:text-white transition"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Network Systems
                    </Link>
                    <h1 className="mt-10 sm:mt-14 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05]">
                        Every Device, Seamlessly Connected
                    </h1>
                </div>

                <div className="relative h-[50vh] sm:h-[65vh] lg:h-[75vh] -mt-16 sm:-mt-24">
                    <img src={NetworkingHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#262b2e] via-[#262b2e]/40 via-30% to-transparent to-70%" />
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Networking Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    We design, install and configure wired and wireless networks that keep every phone, laptop,
                    camera and smart device online — with full Wi-Fi coverage, secure firewalls and switches sized
                    for how you actually use your space.
                </p>
            </section>

            {/* Image fading into brand dark */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={NetworkingFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(35, 31, 32, 0) 0%, rgba(35, 31, 32, 0.05) 25%, rgba(35, 31, 32, 0.35) 50%, rgba(35, 31, 32, 0.75) 75%, var(--color-brand-dark) 100%)',
                    }}
                />
            </section>

            {/* Subcategories on brand dark */}
            <section className="bg-brand-dark text-white px-6 pb-24 pt-4 sm:pt-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x divide-white/15">
                    {subcategories.map((sub, i) => {
                        const Icon = SUBCATEGORY_ICONS[sub.title] || Network;
                        return (
                            <div
                                key={sub.title}
                                className={`flex flex-col py-10 md:py-6 md:px-14 lg:px-20 ${i > 0 ? 'border-t border-white/15 md:border-t-0' : ''} ${i === 0 ? 'md:pl-0' : ''} ${i === subcategories.length - 1 ? 'md:pr-0' : ''}`}
                            >
                                <Icon className="w-10 h-10 text-[var(--color-brand-accent)]" strokeWidth={1.5} />
                                {sub.tagline && (
                                    <span className="mt-6 text-sm font-bold tracking-wider uppercase text-[var(--color-brand-accent)]">
                                        {sub.tagline}
                                    </span>
                                )}
                                <h3 className={`${sub.tagline ? 'mt-2' : 'mt-6'} text-3xl sm:text-4xl font-extrabold leading-tight`}>
                                    {sub.title}
                                </h3>
                                <p className="mt-4 text-lg text-white/75 leading-relaxed flex-1 max-w-md">{sub.description}</p>
                                <button
                                    type="button"
                                    onClick={() => requestQuote(sub.title)}
                                    className="mt-8 self-start inline-flex items-center px-6 py-3 rounded-xl font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] hover:opacity-90 transition group"
                                >
                                    Request a Quote
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why professional networking */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why a <span className="text-[var(--color-brand-accent)]">Professional</span> Network?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            A single consumer router can't keep up with today's homes and offices. A properly
                            designed network gives you speed everywhere, keeps intruders out and scales as you add
                            more people and devices.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_NETWORKING.map((item) => (
                            <WhyCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="Trusted Networking Brands" brands={category?.brands} />

            <ContactSection
                serviceOptions={subcategories.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}