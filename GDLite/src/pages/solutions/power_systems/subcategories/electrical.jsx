import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Factory,
    Home,
    ShieldCheck,
    BadgeCheck,
    Lightbulb,
    TrendingUp,
    Zap,
} from 'lucide-react';
import { getCategoryBySlug } from '../../../../data/data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated photos (e.g. electrical_hero.png, electrical_solutions.png)
import ElectricalHeroImg from '../../../../assets/images/electrical_design.jpg';
import ElectricalFeatureImg from '../../../../assets/images/electrical_design.jpg';

const SUBCATEGORY_ICONS = {
    Commercial: Building2,
    Industrial: Factory,
    Residential: Home,
};

const WHY_CERTIFIED = [
    {
        icon: ShieldCheck,
        title: 'Safety First',
        text: 'Correctly sized cables, protection devices and earthing prevent electrical fires, shocks and damage to your equipment.',
    },
    {
        icon: BadgeCheck,
        title: 'Fully Compliant',
        text: 'Designs and installations that meet EPRA and national safety standards, with the documentation you need for approvals and inspections.',
    },
    {
        icon: Lightbulb,
        title: 'Energy Efficient',
        text: 'Balanced loads, efficient lighting and well-planned circuits reduce wasted power and keep your electricity bills down.',
    },
    {
        icon: TrendingUp,
        title: 'Ready to Grow',
        text: 'We plan capacity for the future, so adding solar, backup power, new machinery or extra rooms later is simple and safe.',
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

export default function Electrical() {
    const category = getCategoryBySlug('electrical');
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
                        to="/power-systems"
                        className="inline-flex items-center text-sm text-white/80 hover:text-white transition"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Power Systems
                    </Link>
                    <h1 className="mt-10 sm:mt-14 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05]">
                        Wired for Safety, Built to Last
                    </h1>
                </div>

                <div className="relative h-[50vh] sm:h-[65vh] lg:h-[75vh] -mt-16 sm:-mt-24">
                    <img src={ElectricalHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#262b2e] via-[#262b2e]/40 via-30% to-transparent to-70%" />
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">
                    Electrical Design & Contracting
                </h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    From the first drawing to the final inspection, our certified engineers handle load analysis,
                    electrical design, wiring and turn-key installation — delivered to EPRA and national safety
                    standards for projects of every size.
                </p>
            </section>

            {/* Image fading into brand blue */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={ElectricalFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(15, 81, 178, 0) 0%, rgba(15, 81, 178, 0.05) 25%, rgba(15, 81, 178, 0.35) 50%, rgba(15, 81, 178, 0.75) 75%, var(--color-brand) 100%)',
                    }}
                />
            </section>

            {/* Subcategories on brand blue */}
            <section className="bg-brand text-white px-6 pb-24 pt-4 sm:pt-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white/20">
                    {subcategories.map((sub, i) => {
                        const Icon = SUBCATEGORY_ICONS[sub.title] || Zap;
                        return (
                            <div
                                key={sub.title}
                                className={`flex flex-col py-10 md:py-4 md:px-10 ${i > 0 ? 'border-t border-white/20 md:border-t-0' : ''} ${i === 0 ? 'md:pl-0' : ''} ${i === subcategories.length - 1 ? 'md:pr-0' : ''}`}
                            >
                                <Icon className="w-10 h-10 text-[var(--color-brand-accent)]" strokeWidth={1.5} />
                                <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold leading-tight">{sub.title}</h3>
                                <p className="mt-4 text-white/80 leading-relaxed flex-1">{sub.description}</p>
                                <button
                                    type="button"
                                    onClick={() => requestQuote(sub.title)}
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

            {/* Why certified electrical work */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Choose <span className="text-[var(--color-brand-accent)]">Certified</span> Electrical Work?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Poor wiring is one of the leading causes of property fires and equipment failure. A
                            professionally designed and certified installation protects your people, your property
                            and your investment for decades.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Engineer
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_CERTIFIED.map((item) => (
                            <WhyCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="Trusted Electrical Brands" brands={category?.brands} />

            <ContactSection
                serviceOptions={subcategories.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}