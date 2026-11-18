import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    ArrowLeftRight,
    Gauge,
    Clock,
    MapPin,
    Home,
    Building2,
    Tractor,
} from 'lucide-react';
import { getCategoryBySlug } from '../../../../data/data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated generator photos (e.g. generators_hero.png, generators_solutions.png)
import GeneratorsHeroImg from '../../../../assets/images/generator_hero.png';
import GeneratorsFeatureImg from '../../../../assets/images/backup_generator.jpg';
import GeneratorCumminsImg from '../../../../assets/images/generator_cummins.jpeg';

// Shown in the "Type of Service" dropdown on this page.
const GENERATOR_SERVICES = [
    'New Generator Supply & Installation',
    'Changeover / ATS Installation',
    'Generator Servicing & Repair',
];

// Who we power — shown on the brand-blue band.
const APPLICATIONS = [
    {
        icon: Home,
        title: 'Homes & Estates',
        text: 'Quiet, efficient standby generators that keep lights, water pumps, security systems and appliances running through outages.',
    },
    {
        icon: Building2,
        title: 'Businesses & Institutions',
        text: 'Backup for offices, hotels, hospitals, schools and retail — sized to carry lifts, cold rooms and critical systems without interruption.',
    },
    {
        icon: Tractor,
        title: 'Farms & Industry',
        text: 'Heavy-duty generators for factories, irrigation, construction sites and remote operations that need dependable power all day.',
    },
];

const WHY_GENERATORS = [
    {
        icon: ArrowLeftRight,
        title: 'Automatic Switchover',
        text: 'With an automatic transfer switch, your generator starts and takes over within seconds of a power cut — no one needs to flip a switch.',
    },
    {
        icon: Gauge,
        title: 'Handles Heavy Loads',
        text: 'Generators power what batteries alone cannot: motors, pumps, air conditioning, welding equipment and entire buildings.',
    },
    {
        icon: Clock,
        title: 'Long Runtime',
        text: 'As long as there is fuel, a generator keeps going — through extended outages that would drain any battery bank.',
    },
    {
        icon: MapPin,
        title: 'Power Anywhere',
        text: 'From construction sites to remote farms, a generator brings full mains-level power to locations the grid does not reach.',
    },
];

function WhyGeneratorCard({ icon: Icon, title, text }) {
    return (
        <div className="bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8 sm:p-10 flex flex-col">
            <Icon className="w-10 h-10 self-end text-brand" strokeWidth={1.5} />
            <h3 className="mt-8 text-2xl font-bold text-content-primary">{title}</h3>
            <p className="mt-4 text-content-secondary leading-relaxed">{text}</p>
        </div>
    );
}

export default function Generators() {
    const category = getCategoryBySlug('generators');
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const requestQuote = () => {
        setSelectedService(GENERATOR_SERVICES[0]);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Hero: full-screen photo with the title over it (no gradient) */}
            <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col overflow-hidden">
                <img src={GeneratorsHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />

                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24 text-white">
                    <Link
                        to="/power-systems"
                        className="inline-flex items-center text-sm font-medium text-white hover:opacity-80 transition [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Power Systems
                    </Link>
                    <h1 className="mt-12 sm:mt-16 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
                        Power Through Every Outage
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Generator Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    We provide dependable generator solutions designed to meet the power demands of commercial facilities, industrial operations and institutions.
                    From generator supply and installation to servicing and maintenance, we deliver tailored power backup solutions taht help minimize downtime,
                    maintain operational continuity and keep your business running when the grid goes down.
                </p>
            </section>

            {/* Image fading into brand blue */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={GeneratorsFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 md:mb-14">Who We Power</h2>

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
                        Request a Quote
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </section>

            {/* Why generators */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Invest in a <span className="text-[var(--color-brand-accent)]">Generator </span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Extended blackouts cost money — spoiled stock, idle staff, missed orders. A generator
                            gives you full, independent power for as long as you need it, keeping your operations
                            and your household running no matter what the grid does.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_GENERATORS.map((item) => (
                            <WhyGeneratorCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Statement between two full photos (no gradient, no crop) */}
            <section aria-hidden="true">
                <img src={GeneratorCumminsImg} alt="" className="block w-full h-auto" />
            </section>

            <section className="bg-surface-light py-20 sm:py-28 px-6">
                <p className="max-w-4xl mx-auto text-center text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.2] text-content-primary">
                    We are trusted by schools, petrol stations, hotels and factories to{' '}
                    <span className="text-brand">supply, install</span> and{' '}
                    <span className="text-[var(--color-brand-accent)]">maintain</span> their power backup
                    equipment and generators.
                </p>
            </section>

            <section aria-hidden="true">
                <img src={GeneratorCumminsImg} alt="" className="block w-full h-auto" />
            </section>

            <BrandCarousel title="Generator Brands We Install and Maintain" brands={category?.brands} />

            <ContactSection
                serviceOptions={GENERATOR_SERVICES}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}