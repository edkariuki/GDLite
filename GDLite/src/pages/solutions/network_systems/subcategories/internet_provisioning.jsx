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
import InternetHeroImg from '../../../../assets/images/internet_hero.jpg';
import InternetFeatureImg from '../../../../assets/images/internet_speed.jpg';

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
            {/* Hero: full-screen photo with the title over it (no gradient) */}
            <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col overflow-hidden">
                <img src={InternetHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />

                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24 text-white">
                    <Link
                        to="/network-systems"
                        className="inline-flex items-center text-sm font-medium text-white hover:opacity-80 transition [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Network Systems
                    </Link>
                    <h1 className="mt-12 sm:mt-16 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
                        Fast, Reliable Internet.
                    </h1>
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
            <section aria-hidden="true" className="relative h-[75vh] sm:h-screen overflow-hidden">
                <img src={InternetFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(35, 31, 32, 0) 0%, rgba(35, 31, 32, 0) 62%, rgba(35, 31, 32, 0.4) 80%, rgba(35, 31, 32, 0.85) 93%, var(--color-brand-dark) 100%)',
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
                            Why Choose <span className="text-[var(--color-brand-accent)]">Litenet Fibre </span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Fibre is the fastest and most reliable way to get online today. It keeps up with
                            streaming, remote work and growing businesses, and it is built to last for years to come.
                        </p>
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