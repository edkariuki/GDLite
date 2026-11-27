import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Home,
    Briefcase,
    Building2,
    Server,
    Users,
    KeyRound,
    ClipboardList,
    Network,
} from 'lucide-react';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import ContactSection from '../../../../components/contact_section';
import BrandCarousel from '../../../../components/brand_carousel';
import AccessHeroImg from '../../../../assets/images/access_hero.jpg';
import BiometricAccessImg from '../../../../assets/images/biometric_access.jpg';
import SmartLocksImg from '../../../../assets/images/smart_lock.jpg';
import CardAccessImg from '../../../../assets/images/card_access.jpg';
import OfficeAccessImg from '../../../../assets/images/office_access.jpg';
import CriticalAccessImg from '../../../../assets/images/critical_access.jpg';

// The four access control areas, each shown as a photo fading into orange with its text below.
// Swap `image` per section when you have dedicated photos; `imagePosition` picks which part of the photo shows.
const ACCESS_SECTIONS = [
    {
        icon: Home,
        slug: 'residential',
        title: 'Residential Access Control',
        text: 'Enhance your home security with smart locks and access solutions that give you greater control over who enters, keeping your family and property safer.',
        image: SmartLocksImg,
        imagePosition: 'center',
    },
    {
        icon: Briefcase,
        slug: 'workplace-office',
        title: 'Workplace & Office Access Control',
        text: 'Manage employee time logs and visitor access with ease, protect sensitive work areas and improve workplace security through reliable controlled-entry systems.',
        image: OfficeAccessImg,
        // imagePosition: 'top',
    },
    {
        icon: Building2,
        slug: 'commercial',
        title: 'Commercial Access Control',
        text: 'Protect your business, staff and assets with intelligent access solutions that help prevent unauthorised entry and give you greater control over your premises.',
        image: CardAccessImg,
        // imagePosition: 'bottom',
    },
    {
        icon: Server,
        slug: 'secure-rooms',
        title: 'Secure Rooms & Server Rooms',
        text: 'Protect critical infrastructure and sensitive equipment, such as IT and lab equipment, with restricted access systems that ensure only authorised personnel can enter your secure rooms.',
        image: BiometricAccessImg,
        imagePosition: 'center',
    },
];

const WHY_ACCESS_CONTROL = [
    {
        icon: Users,
        title: 'Know Who Is Inside',
        text: 'Only authorised people get through each door or gate, and you can grant or revoke access instantly.',
    },
    {
        icon: KeyRound,
        title: 'No More Lost Keys',
        text: 'Fingerprints, cards and PIN codes replace keys that can be copied, lost or never returned by former staff.',
    },
    {
        icon: ClipboardList,
        title: 'Full Audit Trail',
        text: 'Every entry is logged with a name and time, giving you accurate records for security reviews and staff attendance.',
    },
    {
        icon: Network,
        title: 'Works With Your Security',
        text: 'Integrates with CCTV and alarm systems, so a forced door can trigger an alert and pull up the camera footage.',
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

export default function AccessControl() {
    const category = getSecurityCategoryBySlug('access-control');
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
                <img src={AccessHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />

                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24 text-white">
                    <Link
                        to="/security-systems"
                        className="inline-flex items-center text-sm font-medium text-white hover:opacity-80 transition [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Security Systems
                    </Link>
                    <h1 className="mt-12 sm:mt-16 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
                        Access Granted, Security Assured.
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">Access Control Solutions</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">
                    Take control of your security with smart access control solutions that help prevent unauthorized entry, protect valuable assets, keep a log of entry and give you piece of mind.
                    From biometric and card-based systems to keypads and advanced entry solutions, we help homes, businesses and institutions improve security while managing access with ease and confidence.
                </p>
            </section>

            {/* Four access control areas: photo fading into orange, then title + text on orange */}
            {ACCESS_SECTIONS.map(({ icon: Icon, slug, title, text, image, imagePosition }) => (
                <React.Fragment key={title}>
                    <section aria-hidden="true" className="relative h-[60vh] sm:h-[80vh] overflow-hidden">
                        <img
                            src={image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ objectPosition: imagePosition }}
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(to bottom, rgba(248, 158, 29, 0) 0%, rgba(248, 158, 29, 0) 50%, rgba(248, 158, 29, 0.4) 70%, rgba(248, 158, 29, 0.85) 88%, var(--color-brand-accent) 100%)',
                            }}
                        />
                    </section>

                    <section className="bg-[var(--color-brand-accent)] text-[var(--color-content-primary)] px-6 pb-20 sm:pb-24 pt-2 sm:pt-4">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
                            <div>
                                <Icon className="w-10 h-10 text-brand" strokeWidth={1.5} />
                                <h3 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">{title}</h3>
                            </div>
                            <div className="md:pt-16">
                                <p className="text-lg sm:text-xl opacity-85 leading-relaxed">{text}</p>
                                <Link
                                    to={`/security-systems/access-control/${slug}`}
                                    className="mt-8 self-start inline-flex items-center font-semibold text-[var(--color-brand)]"
                                >
                                    See More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            ))}

            {/* Why access control */}
            <section className="bg-surface-light py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                            Why Invest in <span className="text-brand">Access Control </span>?
                        </h2>
                        <p className="mt-8 text-lg text-content-secondary leading-relaxed">
                            Locks and keys only go so far. Electronic access control lets you decide exactly who
                            can enter, where and when — and gives you a record of every visit.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_ACCESS_CONTROL.map((item) => (
                            <WhyCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <BrandCarousel title="Trusted Access Control Brands" brands={category?.brands} />

            <ContactSection
                serviceOptions={ACCESS_SECTIONS.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}