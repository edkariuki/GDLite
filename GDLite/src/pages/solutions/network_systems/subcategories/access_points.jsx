import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Wifi, Repeat, Users, MonitorCheck } from 'lucide-react';
import { getNetworkCategoryBySlug } from '../../../../data/network_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated photos (e.g. access_points_hero.png, access_points_solutions.png)
import AccessPointsHeroImg from '../../../../assets/images/access_points.jpg';
import AccessPointsFeatureImg from '../../../../assets/images/access_points.jpg';

// Shown in the "Type of Service" dropdown on this page.
const WIFI_SERVICES = [
    'Home Wi-Fi',
    'Office & Commercial Wi-Fi',
    'Outdoor & Campus Wi-Fi',
    'Wi-Fi Survey & Optimisation',
];

// What we install — shown on the brand-dark band.
const SCOPE = [
    'Wi-Fi site survey & heatmaps',
    'Indoor & outdoor access points',
    'Mesh & seamless roaming',
    'Guest Wi-Fi & captive portals',
    'PoE switches & cabling',
    'Cloud management & monitoring',
];

const WHY_ACCESS_POINTS = [
    {
        icon: Wifi,
        title: 'No More Dead Zones',
        text: 'Access points placed from a proper site survey give you a strong signal in every room, floor and outdoor area.',
    },
    {
        icon: Repeat,
        title: 'Seamless Roaming',
        text: 'Walk from one end of the building to the other without your call or video dropping as devices switch access points.',
    },
    {
        icon: Users,
        title: 'Handles Crowds',
        text: 'Business-grade access points serve dozens of users each, so Wi-Fi stays fast in busy offices, hotels and halls.',
    },
    {
        icon: MonitorCheck,
        title: 'Centrally Managed',
        text: 'Monitor usage, update settings and spot problems across every access point from a single dashboard.',
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

export default function AccessPoints() {
    const category = getNetworkCategoryBySlug('access-points');
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const requestQuote = () => {
        setSelectedService(WIFI_SERVICES[0]);
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
                        Strong Wi-Fi in Every Corner
                    </h1>
                </div>

                <div className="relative h-[50vh] sm:h-[65vh] lg:h-[75vh] -mt-16 sm:-mt-24">
                    <img src={AccessPointsHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#262b2e] via-[#262b2e]/40 via-30% to-transparent to-70%" />
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Access Point Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    Reliable Wi-Fi depends on the right access points in the right places. We survey your space,
                    then design and install wireless networks that cover every corner — from a single home to
                    offices, hotels, schools and outdoor campuses.
                </p>
            </section>

            {/* Image fading into brand dark */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={AccessPointsFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
                            Homes, Offices & Campuses
                        </span>
                        <h3 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">Wi-Fi Designed, Not Guessed</h3>
                        <p className="mt-5 text-lg text-white/75 leading-relaxed">
                            We start with a site survey to map walls, interference and user numbers, then place each
                            access point for full coverage and capacity. The result is fast, stable Wi-Fi with
                            seamless roaming, secure guest access and central management.
                        </p>
                        <button
                            type="button"
                            onClick={requestQuote}
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-xl font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] hover:opacity-90 transition group"
                        >
                            Request a Wi-Fi Quote
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

            {/* Why access points */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Business-Grade <span className="text-[var(--color-brand-accent)]">Access Points</span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            A single router or a few plug-in extenders can't cover a large home or a busy office.
                            Properly planned access points deliver consistent speed to every user, wherever they are
                            in the building.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_ACCESS_POINTS.map((item) => (
                            <WhyCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="Trusted Wi-Fi Brands" brands={category?.brands} />

            <ContactSection
                serviceOptions={WIFI_SERVICES}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}