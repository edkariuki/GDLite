import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import ContactSection from '../../../../components/contact_section';
import ImageSlideshow from '../../../../components/image_slideshow';

/**
 * One page for every CCTV subcategory: /security-systems/cctv/:subSlug
 * Content (title, tagline, cover photo, project photos) comes from security_data.js.
 */
export default function CctvSubcategory() {
    const { subSlug } = useParams();
    const category = getSecurityCategoryBySlug('cctv');
    const subcategories = category?.subcategories ?? [];
    const sub = subcategories.find((s) => s.slug === subSlug);
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedService(sub?.title ?? '');
    }, [subSlug, sub?.title]);

    if (!sub) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center bg-surface-light">
                <h1 className="text-3xl font-bold text-content-primary">CCTV solution not found</h1>
                <Link to="/security-systems/cctv" className="text-brand font-semibold inline-flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to CCTV
                </Link>
            </div>
        );
    }

    const others = subcategories.filter((s) => s.slug !== sub.slug);

    const requestQuote = () => {
        setSelectedService(sub.title);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Hero: full-screen cover photo with the title over it (no gradient) */}
            <section className="relative min-h-[80vh] sm:min-h-screen flex flex-col overflow-hidden">
                <img src={sub.cover} alt="" className="absolute inset-0 w-full h-full object-cover" />

                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24 text-white">
                    <Link
                        to="/security-systems/cctv"
                        className="inline-flex items-center text-sm font-medium text-white hover:opacity-80 transition [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> CCTV Solutions
                    </Link>
                    <h1 className="mt-12 sm:mt-16 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
                        {sub.title}
                    </h1>
                </div>
            </section>

            {/* Tagline */}
            <section className="max-w-3xl mx-auto pt-20 pb-12 px-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold leading-snug text-content-primary">{sub.tagline}</p>
                <button
                    type="button"
                    onClick={requestQuote}
                    className="mt-8 inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white bg-brand hover:bg-brand-hover transition-colors group"
                >
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
            </section>

            {/* Project photos slideshow */}
            {sub.gallery?.length > 0 && (
                <section className="px-6 pb-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-sm font-bold tracking-wider uppercase text-brand text-center mb-6">
                            Our Projects
                        </h2>
                        <ImageSlideshow slides={sub.gallery} />
                    </div>
                </section>
            )}

            {/* Other CCTV solutions */}
            {others.length > 0 && (
                <section className="bg-[var(--color-brand-accent)] text-[var(--color-content-primary)] px-6 py-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Other CCTV Solutions</h2>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {others.map((s) => (
                                <Link
                                    key={s.slug}
                                    to={`/security-systems/cctv/${s.slug}`}
                                    className="px-5 py-2.5 rounded-full bg-white/90 text-sm font-semibold hover:bg-white transition"
                                >
                                    {s.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <ContactSection
                serviceOptions={subcategories.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}