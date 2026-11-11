import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Gauge, Ruler, BadgeCheck, TrendingUp } from 'lucide-react';
import { getNetworkCategoryBySlug } from '../../../../data/network_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated photos (e.g. fibre_hero.png, fibre_solutions.png)
import FibreHeroImg from '../../../../assets/images/fiber_splicing.jpg';
import FibreFeatureImg from '../../../../assets/images/fiber_splicing.jpg';

// Shown in the "Type of Service" dropdown on this page.
const FIBRE_SERVICES = ['New Fibre Deployment', 'Fibre Splicing & Repair', 'OTDR Testing & Certification'];

// What a deployment covers — shown on the brand-dark band.
const SCOPE = [
    'Route survey & planning',
    'Underground & aerial cable laying',
    'Fusion splicing',
    'Termination & patch panels',
    'OTDR testing & certification',
    'Fault location & repair',
];

const WHY_FIBRE_DEPLOYMENT = [
    {
        icon: Gauge,
        title: 'Low-Loss Links',
        text: 'Precise fusion splicing and clean terminations keep signal loss to a minimum, so you get the full speed of your fibre.',
    },
    {
        icon: Ruler,
        title: 'Built for Distance',
        text: 'Fibre carries data over kilometres without degrading, connecting buildings, campuses and estates on one network.',
    },
    {
        icon: BadgeCheck,
        title: 'Tested & Certified',
        text: 'Every link is OTDR-tested and documented, giving you proof of performance and a baseline for future maintenance.',
    },
    {
        icon: TrendingUp,
        title: 'Future-Proof Capacity',
        text: 'The same fibre can carry far higher speeds as your needs grow, simply by upgrading the equipment at each end.',
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

export default function FibreOpticDeployment() {
    const category = getNetworkCategoryBySlug('fibre-optic-deployment');
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const requestQuote = () => {
        setSelectedService(FIBRE_SERVICES[0]);
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
                        Fibre Built to Carry the Future
                    </h1>
                </div>

                <div className="relative h-[50vh] sm:h-[65vh] lg:h-[75vh] -mt-16 sm:-mt-24">
                    <img src={FibreHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#262b2e] via-[#262b2e]/40 via-30% to-transparent to-70%" />
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Fibre Optic Deployment</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    Fibre is the fastest, most reliable medium for moving data — but only when it is installed
                    properly. We handle the full deployment, from the first route survey to the final certified
                    link, for businesses, campuses, estates and service providers.
                </p>
            </section>

            {/* Image fading into brand dark */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={FibreFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
                            End-to-End Deployment
                        </span>
                        <h3 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">From Route to Certified Link</h3>
                        <p className="mt-5 text-lg text-white/75 leading-relaxed">
                            Our technicians lay, splice and terminate fibre to standard. Precision fusion splicing
                            joins every cable with minimal signal loss, and each link is OTDR-tested before handover.
                            We also repair and re-splice damaged fibre to get you back online fast.
                        </p>
                        <button
                            type="button"
                            onClick={requestQuote}
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-xl font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] hover:opacity-90 transition group"
                        >
                            Request a Fibre Quote
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

            {/* Why professional fibre deployment */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why <span className="text-[var(--color-brand-accent)]">Professional</span> Fibre Deployment?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            A single poor splice or bent cable can cripple an entire link. Done right, fibre delivers
                            decades of fast, interference-free connectivity with very little maintenance.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_FIBRE_DEPLOYMENT.map((item) => (
                            <WhyCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="Trusted Fibre Brands" brands={category?.brands} />

            <ContactSection
                serviceOptions={FIBRE_SERVICES}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}