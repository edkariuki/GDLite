import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Feather, Anchor, Zap, Globe, Sun, BatteryCharging, Droplets } from 'lucide-react';
import { getCategoryBySlug } from '../../../../data/data';
import ContactSection from '../../../../components/contact_section';
import SolarHeroImg from '../../../../assets/images/solar_hero.png';
import SolarRooftopImg from '../../../../assets/images/solar_solutions.png';

const SOLUTION_ICONS = {
    'Hybrid Solar Systems': BatteryCharging,
    'Off-Grid Solar Solutions': Sun,
    'Solar Water Pumping': Droplets,
};

const FEATURED_SOLUTIONS = ['Hybrid Solar Systems', 'Off-Grid Solar Solutions', 'Solar Water Pumping'];

const WHY_SOLAR = [
    {
        icon: Feather,
        title: 'Renewable & Abundant',
        text: 'Sunlight is free and never runs out. Kenya enjoys strong sunshine all year round, making solar one of the most dependable energy sources available to homes, farms and businesses.',
    },
    {
        icon: Anchor,
        title: 'Environmentally Friendly',
        text: 'Solar panels generate electricity without fuel, noise or emissions. Every kilowatt-hour you produce yourself replaces power from diesel generators or fossil-fuel plants, cutting your carbon footprint and keeping the air around your property clean.',
    },
    {
        icon: Zap,
        title: 'Cost-Effective',
        text: 'After installation, sunshine costs nothing. Most systems pay for themselves within a few years through lower electricity and fuel bills, and quality panels keep producing for 25 years or more with very little maintenance.',
    },
    {
        icon: Globe,
        title: 'Energy Independence',
        text: 'Generating your own power shields you from blackouts, tariff increases and fuel price swings. With battery storage, your lights, pumps and equipment keep running even when the grid goes down.',
    },
];

// Replace with the brands you actually supply. Add `logo: ImportedImg` to show an image instead of text.
const BRANDS = [
    { name: 'Brand One' },
    { name: 'Brand Two' },
    { name: 'Brand Three' },
    { name: 'Brand Four' },
    { name: 'Brand Five' },
    { name: 'Brand Six' },
];

function WhySolarCard({ icon: Icon, title, text }) {
    const textRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [overflowing, setOverflowing] = useState(false);

    // Only show "Show More" when the clamped text is actually cut off.
    useLayoutEffect(() => {
        const el = textRef.current;
        if (!el) return;
        const check = () => {
            if (!expanded) setOverflowing(el.scrollHeight > el.clientHeight + 1);
        };
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, [expanded]);

    return (
        <div className="bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8 sm:p-10 flex flex-col">
            <Icon className="w-10 h-10 self-end text-content-primary" strokeWidth={1.5} />
            <h3 className="mt-8 text-2xl font-bold text-content-primary">{title}</h3>
            <p
                ref={textRef}
                className={`mt-4 text-content-secondary leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}
            >
                {text}
            </p>
            {(overflowing || expanded) && (
                <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    className="mt-4 self-start text-sm font-medium text-content-primary hover:text-brand transition"
                >
                    {expanded ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
}

function BrandCarousel() {
    // Duplicate the list so the marquee loops seamlessly.
    const items = [...BRANDS, ...BRANDS];
    return (
        <section className="py-16 bg-surface-light border-t border-stroke-light">
            <style>{`
                @keyframes brand-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .brand-track { animation: brand-marquee 30s linear infinite; }
                .brand-track:hover { animation-play-state: paused; }
                @media (prefers-reduced-motion: reduce) { .brand-track { animation: none; } }
            `}</style>
            <div className="max-w-7xl mx-auto px-6 text-center mb-10">
                <span className="text-brand font-bold text-sm tracking-wider uppercase">Trusted Brands</span>
                <h2 className="mt-2 text-3xl font-bold text-content-primary">Quality Equipment We Supply & Install</h2>
            </div>
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <ul className="brand-track flex w-max items-center gap-16 px-8">
                    {items.map((brand, i) => (
                        <li
                            key={`${brand.name}-${i}`}
                            aria-hidden={i >= BRANDS.length}
                            className="h-16 w-40 shrink-0 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                        >
                            {brand.logo ? (
                                <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                            ) : (
                                <span className="text-xl font-extrabold tracking-tight text-content-secondary">
                                    {brand.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default function Solar() {
    const category = getCategoryBySlug('solar');
    const solutions = FEATURED_SOLUTIONS.map((title) =>
        category.subcategories.find((s) => s.title === title)
    ).filter(Boolean);

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
            {/* Hero */}
            <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col overflow-hidden">
                <img src={SolarHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/10" />

                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24">
                    <Link
                        to="/power-systems"
                        className="inline-flex items-center text-sm text-white/80 hover:text-white transition"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Power Systems
                    </Link>
                    <h1 className="mt-12 sm:mt-16 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.05]">
                        Harnessing the Power of the Sun
                    </h1>
                    <a
                        href="#contact"
                        className="mt-10 sm:mt-12 inline-flex items-center px-8 py-4 text-base font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] rounded-xl hover:opacity-90 transition shadow-lg"
                    >
                        Get a Free Site Survey
                    </a>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Solar Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    Whether you want to cut your power bills, keep running through blackouts, or bring
                    electricity and water to a remote site, we design and install solar systems sized to your
                    exact needs — backed by professional engineering and after-sales support.
                </p>
            </section>

            {/* Image fading into brand blue */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={SolarRooftopImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(15, 81, 178, 0) 0%, rgba(15, 81, 178, 0.05) 25%, rgba(15, 81, 178, 0.35) 50%, rgba(15, 81, 178, 0.75) 75%, var(--color-brand) 100%)',
                    }}
                />
            </section>

            {/* Solutions on brand blue */}
            <section className="bg-brand text-white px-6 pb-24 pt-4 sm:pt-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white/20">
                    {solutions.map((sol, i) => {
                        const Icon = SOLUTION_ICONS[sol.title] || Sun;
                        return (
                            <div
                                key={sol.title}
                                className={`flex flex-col py-10 md:py-4 md:px-10 ${i > 0 ? 'border-t border-white/20 md:border-t-0' : ''} ${i === 0 ? 'md:pl-0' : ''} ${i === solutions.length - 1 ? 'md:pr-0' : ''}`}
                            >
                                <Icon className="w-10 h-10 text-[var(--color-brand-accent)]" strokeWidth={1.5} />
                                <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold leading-tight">{sol.title}</h3>
                                <p className="mt-4 text-white/80 leading-relaxed flex-1">{sol.description}</p>
                                <button
                                    type="button"
                                    onClick={() => requestQuote(sol.title)}
                                    className="mt-8 self-start inline-flex items-center font-semibold text-[var(--color-brand-accent)] hover:text-white transition-colors group"
                                >
                                    Request a Quote
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why solar */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Solar <br />
                            <span className="text-brand">Energy</span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Solar turns Kenya's abundant sunshine into clean, affordable power. It lowers running
                            costs, keeps you going through outages and reduces reliance on diesel and the grid —
                            a long-term investment in both your property and the environment.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Engineer
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_SOLAR.map((item) => (
                            <WhySolarCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel />

            <ContactSection
                serviceOptions={category.subcategories.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}