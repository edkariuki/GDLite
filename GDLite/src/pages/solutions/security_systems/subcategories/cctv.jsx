import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Home,
    Building2,
    School,
    Sun,
    Cctv as CctvIcon,
    ShieldAlert,
    Smartphone,
    FileVideo,
    Moon,
} from 'lucide-react';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
// TODO: replace with dedicated photos (e.g. cctv_hero.png, cctv_solutions.png)
import CctvHeroImg from '../../../../assets/images/cctv_img.jpg';
import CctvFeatureImg from '../../../../assets/images/cctv_img.jpg';

const SUBCATEGORY_ICONS = {
    Residential: Home,
    Commercial: Building2,
    Institutional: School,
    Solar: Sun,
};

// Divider lines for a list that is 1 column on phones, 2x2 on tablets and 4 across on desktop.
const columnBorders = (i) =>
    [
        i > 0 && 'border-t',
        i === 1 && 'md:border-t-0 md:border-l',
        i === 3 && 'md:border-l',
        'lg:border-t-0',
        i > 0 && 'lg:border-l',
        i === 0 && 'md:pl-0',
        i === 2 && 'md:pl-0 lg:pl-8',
        i === 1 && 'md:pr-0 lg:pr-8',
        i === 3 && 'md:pr-0',
    ]
        .filter(Boolean)
        .join(' ');

const WHY_CCTV = [
    {
        icon: ShieldAlert,
        title: 'Deters Crime',
        text: 'Visible cameras make your property a harder target, stopping many break-ins and thefts before they happen.',
    },
    {
        icon: Smartphone,
        title: 'Watch From Anywhere',
        text: 'View live and recorded footage on your phone or computer, whether you are in the next room or out of the country.',
    },
    {
        icon: FileVideo,
        title: 'Evidence When It Counts',
        text: 'Clear, time-stamped recordings support police reports, insurance claims and internal investigations.',
    },
    {
        icon: Moon,
        title: 'Day & Night Coverage',
        text: 'Night-vision and colour low-light cameras keep watch 24/7, with motion alerts sent straight to your phone.',
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

export default function Cctv() {
    const category = getSecurityCategoryBySlug('cctv');
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
                        to="/security-systems"
                        className="inline-flex items-center text-sm text-white/80 hover:text-white transition"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Security Systems
                    </Link>
                    <h1 className="mt-10 sm:mt-14 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05]">
                        Eyes on What Matters, Day and Night
                    </h1>
                </div>

                <div className="relative h-[50vh] sm:h-[65vh] lg:h-[75vh] -mt-16 sm:-mt-24">
                    <img src={CctvHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#262b2e] via-[#262b2e]/40 via-30% to-transparent to-70%" />
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">CCTV Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    We design and install surveillance systems for every kind of property — from a single home
                    to a multi-site institution. HD and night-vision cameras, reliable recording and remote
                    viewing on your phone, with off-grid solar options for sites without power.
                </p>
            </section>

            {/* Image fading into brand accent */}
            <section aria-hidden="true" className="relative h-[55vh] sm:h-[75vh] overflow-hidden">
                <img src={CctvFeatureImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(248, 158, 29, 0) 0%, rgba(248, 158, 29, 0.05) 25%, rgba(248, 158, 29, 0.35) 50%, rgba(248, 158, 29, 0.75) 75%, var(--color-brand-accent) 100%)',
                    }}
                />
            </section>

            {/* Subcategories on brand accent (dark text for contrast): 1 column on phones, 2x2 on tablets, 4 in one row on desktop */}
            <section className="bg-[var(--color-brand-accent)] text-[var(--color-content-primary)] px-6 pb-24 pt-4 sm:pt-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {subcategories.map((sub, i) => {
                        const Icon = SUBCATEGORY_ICONS[sub.title] || CctvIcon;
                        return (
                            <div
                                key={sub.title}
                                className={`flex flex-col py-10 md:px-8 lg:py-4 border-black/15 ${columnBorders(i)}`}
                            >
                                <Icon className="w-10 h-10 text-brand" strokeWidth={1.5} />
                                <h3 className="mt-6 text-2xl font-extrabold leading-tight">{sub.title}</h3>
                                <p className="mt-4 opacity-80 leading-relaxed flex-1">{sub.description}</p>
                                <button
                                    type="button"
                                    onClick={() => requestQuote(sub.title)}
                                    className="mt-8 self-start inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white bg-brand hover:bg-brand-hover transition-colors group"
                                >
                                    Request a Quote
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why CCTV */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Install <span className="text-brand">CCTV</span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            A well-planned camera system protects people and property around the clock. It
                            discourages intruders, lets you check in from anywhere and gives you a reliable record
                            when something does go wrong.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center px-6 py-3 rounded-full border-2 border-content-primary text-content-primary font-medium hover:bg-content-primary hover:text-white transition"
                        >
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_CCTV.map((item) => (
                            <WhyCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="Trusted CCTV Brands" brands={category?.brands} />

            <ContactSection
                serviceOptions={subcategories.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}