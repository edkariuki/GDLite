import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, Smartphone, FileVideo, Moon } from 'lucide-react';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
import SubcategoryShowcase from '../../../../components/subcategory_showcase';
// TODO: replace with dedicated photos (e.g. cctv_hero.png, cctv_solutions.png)
import CctvHeroImg from '../../../../assets/images/cctv_img.jpg';
import CctvFeatureImg from '../../../../assets/images/cctv_img.jpg';

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

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Hero: full-screen photo with the title over it (no gradient) */}
            <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col overflow-hidden">
                <img src={CctvHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />

                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24 text-white">
                    <Link
                        to="/security-systems"
                        className="inline-flex items-center text-sm font-medium text-white hover:opacity-80 transition [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Security Systems
                    </Link>
                    <h1 className="mt-12 sm:mt-16 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
                        Eyes on What Matters
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">CCTV Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    We deliver intelligent CCTV solutions tailored to protect homes, businesses and critical facilities.
                    From system design and installation to remote monitoring, we provide reliable security and clear visibility
                    of what matters most.
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

            {/* Subcategories: one large highlighted card, arrows to change it (titles only).
                Clicking the highlighted card opens its page with tagline + project slideshow. */}
            <section className="bg-[var(--color-brand-accent)] text-[var(--color-content-primary)] pb-24 pt-4 sm:pt-8">
                <h2 className="max-w-7xl mx-auto px-6 text-3xl sm:text-4xl font-extrabold mb-8 md:mb-10">
                    Explore Our CCTV Solutions
                </h2>
                <SubcategoryShowcase items={subcategories} basePath="/security-systems/cctv" />
            </section>

            {/* Why CCTV */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Install <span className="text-brand">CCTVs </span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            A well-planned camera system protects people and property around the clock. It
                            discourages intruders, lets you check in from anywhere and gives you a reliable record
                            when something does go wrong.
                        </p>
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