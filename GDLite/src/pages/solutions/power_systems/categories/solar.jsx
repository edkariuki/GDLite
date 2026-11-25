import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Wallet, Leaf, Unplug, Sun, BatteryCharging, Droplets } from 'lucide-react';
import { getCategoryBySlug } from '../../../../data/data';
import ContactSection from '../../../../components/contact_section';
import SolarHeroImg from '../../../../assets/images/solar_hero.png';
import SolarRooftopImg from '../../../../assets/images/solar_solutions.png';
import BrandCarousel from '../../../../components/brand_carousel';
import SolarFarm from '../../../../assets/images/solar_farm.png';
import { SOLAR_SLUG_BY_TITLE } from '../../../../data/solar_solutions';

const SOLUTION_ICONS = {
    'Hybrid Solar Systems': BatteryCharging,
    'Off-Grid Solar Solutions': Sun,
    'Solar Water Pumping': Droplets,
};

const FEATURED_SOLUTIONS = ['Hybrid Solar Systems', 'Off-Grid Solar Solutions', 'Solar Water Pumping'];

const WHY_SOLAR = [
    {
        icon: ShieldCheck,
        title: 'Reliable',
        text: 'Kenya enjoys strong sunshine all year round. Paired with battery storage, solar keeps your lights, pumps and equipment running through blackouts and load-shedding.',
    },
    {
        icon: Wallet,
        title: 'Cost-Effective',
        text: 'Once installed, sunshine costs nothing. Most systems pay for themselves within a few years through lower electricity and fuel bills.',
    },
    {
        icon: Leaf,
        title: 'Environmentally Friendly',
        text: 'Solar produces power without fuel, noise or emissions, cutting your reliance on diesel generators and fossil-fuel plants.',
    },
    {
        icon: Unplug,
        title: 'Energy Independence',
        text: 'Generate your own power and rely less on the grid. Blackouts, tariff hikes and fuel price swings stop dictating your bills and your day.',
    },
];

function WhySolarCard({ icon: Icon, title, text }) {
    return (
        <div className="bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8 sm:p-10 flex flex-col">
            <Icon className="w-10 h-10 self-end text-brand" strokeWidth={1.5} />
            <h3 className="mt-8 text-2xl font-bold text-content-primary">{title}</h3>
            <p className="mt-4 text-content-secondary leading-relaxed">{text}</p>
        </div>
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

    const seeMore = (title) => {
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
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Solar Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    We deliver reliable solar energy solutions designed to help homes and businesses take control of their energy needs. From lowering electricity bills to improving energy reliability and supporting a cleaner environment, our solutions are tailored to your unique requirements, helping you enjoy greater efficiency and long term value.
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
                                <Link
                                    to={`/power-systems/solar/${SOLAR_SLUG_BY_TITLE[sol.title]}`}
                                    className="mt-8 self-start inline-flex items-center font-semibold text-[var(--color-brand-accent)]"
                                >
                                    See More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
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
                            Why <br />
                            <span className="text-[var(--color-brand-accent)]">Solar Energy </span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Solar turns Kenya's abundant sunshine into clean, affordable power. It lowers running
                            costs, keeps you going through outages and reduces reliance on diesel and the grid —
                            a long-term investment in both your property and the environment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_SOLAR.map((item) => (
                            <WhySolarCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative min-h-[85vh] sm:min-h-screen flex items-end overflow-hidden">
                <img src={SolarFarm} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(15, 81, 178, 0) 0%, rgba(15, 81, 178, 0) 40%, rgba(15, 81, 178, 0.45) 62%, rgba(15, 81, 178, 0.9) 80%, var(--color-brand) 100%)',
                    }}
                />

                <div className="relative w-full max-w-4xl mx-auto px-6 pb-24 sm:pb-32 text-center text-white">
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                        Ready to Switch to <span className="text-[var(--color-brand-accent)]">Solar</span>?
                    </h2>
                    <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                        Tell us about your property and power needs. Our engineers will size the right system and
                        send you a free, no-obligation quote.
                    </p>
                </div>
            </section>

            <BrandCarousel title="Quality Equipment We Supply & Install" brands={category.brands} />

            <ContactSection
                serviceOptions={category.subcategories.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}