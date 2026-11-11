import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    ExternalLink,
    Check,
    Gauge,
    ShieldCheck,
    Infinity as InfinityIcon,
    TrendingUp,
} from 'lucide-react';
import { getNetworkCategoryBySlug } from '../../../../data/network_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated photos (e.g. internet_hero.png, internet_solutions.png)
import InternetHeroImg from '../../../../assets/images/internet_provisioning.jpg';
import InternetFeatureImg from '../../../../assets/images/internet_provisioning.jpg';

const WHY_FIBRE = [
    {
        icon: Gauge,
        title: 'Blazing Speeds',
        text: 'Fibre carries data on light, delivering fast, symmetrical speeds for video calls, cloud apps and large uploads.',
    },
    {
        icon: ShieldCheck,
        title: 'Rock-Solid Reliability',
        text: 'Fibre is not affected by weather or electrical interference, so your connection stays stable all day.',
    },
    {
        icon: InfinityIcon,
        title: 'No Data Caps',
        text: 'Stream, download and work online as much as you need, without worrying about running out of bundles.',
    },
    {
        icon: TrendingUp,
        title: 'Grows With You',
        text: 'Upgrade your speed as your household or business grows, without changing your cabling or equipment.',
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

export default function InternetProvisioning() {
    const category = getNetworkCategoryBySlug('internet-provisioning');
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
                        Connected at the Speed of Light
                    </h1>
                </div>

                <div className="relative h-[50vh] sm:h-[65vh] lg:h-[75vh] -mt-16 sm:-mt-24">
                    <img src={InternetHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#262b2e] via-[#262b2e]/40 via-30% to-transparent to-70%" />
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Internet Provisioning</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    Fast, dependable internet is the foundation of every modern home and business. We connect you
                    to high-speed fibre and set up everything inside — router, Wi-Fi and cabling — so you are
                    online from day one.
                </p>
            </section>

            {/* Image fading into brand dark (--color-brand-dark) */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={InternetFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(35, 31, 32, 0) 0%, rgba(35, 31, 32, 0.05) 25%, rgba(35, 31, 32, 0.35) 50%, rgba(35, 31, 32, 0.75) 75%, var(--color-brand-dark) 100%)',
                    }}
                />
            </section>

            {/* Subcategories on brand dark — a single provider gets a wide feature layout */}
            <section className="bg-brand-dark text-white px-6 pb-24 pt-4 sm:pt-8">
                <div className="max-w-6xl mx-auto space-y-16">
                    {subcategories.map((sub) => (
                        <div key={sub.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                            <div>
                                <span className="text-sm font-bold tracking-wider uppercase text-[var(--color-brand-accent)]">
                                    Our Fibre Partner
                                </span>
                                <h3 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">{sub.title}</h3>
                                <p className="mt-5 text-lg text-white/75 leading-relaxed">{sub.description}</p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    {sub.url && (
                                        <a
                                            href={sub.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] hover:opacity-90 transition"
                                        >
                                            Visit {sub.title}
                                            <ExternalLink className="w-4 h-4 ml-2" />
                                        </a>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => requestQuote(sub.title)}
                                        className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white border-2 border-white/30 hover:border-white transition group"
                                    >
                                        Request a Quote
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>

                            {sub.highlights?.length > 0 && (
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 lg:pt-10 lg:border-l lg:border-white/15 lg:pl-16">
                                    {sub.highlights.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-0.5 w-6 h-6 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center shrink-0">
                                                <Check className="w-4 h-4 text-[var(--color-content-primary)]" strokeWidth={3} />
                                            </span>
                                            <span className="text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Why fibre */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Choose <span className="text-[var(--color-brand-accent)]">Fibre</span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Fibre is the fastest and most reliable way to get online today. It keeps up with
                            streaming, remote work and growing businesses, and it is built to last for years to come.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_FIBRE.map((item) => (
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