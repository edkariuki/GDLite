import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import ContactSection from './contact_section';
import ProjectGallery from './project_gallery';

export default function SolutionDetail({
    solution,
    solutions,          // all solutions in this category (for "explore others")
    basePath,           // e.g. '/power-systems/ups'
    backLabel,          // e.g. 'UPS Solutions'
    otherTitle,         // e.g. 'Explore Other UPS Solutions'
    serviceOptions,     // contact dropdown options
    defaultService,     // preselected contact option
    galleryCategory,
    theme = 'brand',
}) {

    const THEMES = {
        // --color-brand (blue)
        brand: {
            band: 'bg-brand text-white',
            divide: 'divide-white/20',
            border: 'border-white/20',
            number: 'text-[var(--color-brand-accent)]',
            body: 'text-white/80',
        },
        // --color-brand-accent (orange)
        accent: {
            band: 'bg-[var(--color-brand-accent)] text-[var(--color-content-primary)]',
            divide: 'divide-black/15',
            border: 'border-black/15',
            number: 'text-brand',
            body: 'opacity-85',
        },
        // --color-brand-dark
        dark: {
            band: 'bg-[var(--color-brand-dark)] text-white',
            divide: 'divide-white/20',
            border: 'border-white/20',
            number: 'text-[var(--color-brand-accent)]',
            body: 'text-white/80',
        },
    };

    const t = THEMES[theme] ?? THEMES.brand;
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedService(defaultService || '');
    }, [solution.slug]);

    const others = solutions.filter((s) => s.slug !== solution.slug);

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Hero */}
            <section className="relative min-h-[70vh] sm:min-h-[85vh] flex flex-col overflow-hidden">
                <img src={solution.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/10" />
                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24">
                    <Link to={basePath} className="inline-flex items-center text-sm text-white/80 hover:text-white transition">
                        <ArrowLeft className="w-4 h-4 mr-1" /> {backLabel}
                    </Link>
                    <p className="mt-12 sm:mt-16 text-[var(--color-brand-accent)] font-semibold tracking-wide uppercase text-sm">
                        {solution.title}
                    </p>
                    <h1 className="mt-4 text-5xl sm:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.05]">
                        {solution.headline}
                    </h1>
                </div>
            </section>

            {/* Overview */}
            <section className="max-w-3xl mx-auto pt-20 pb-14 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold">{solution.title}</h2>
                <p className="mt-5 text-lg text-content-secondary leading-relaxed">{solution.overview}</p>
            </section>

            {/* Features */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solution.features.map((f) => (
                        <div key={f.title} className="bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8">
                            <CheckCircle2 className="w-8 h-8 text-brand" strokeWidth={1.5} />
                            <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
                            <p className="mt-3 text-content-secondary leading-relaxed">{f.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How it works */}
            <section className={`px-6 py-20 ${t.band}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold">How It Works</h2>
                    <div className={`mt-12 grid grid-cols-1 md:grid-cols-4 md:divide-x ${t.divide}`}>
                        {solution.steps.map((s, i) => (
                            <div
                                key={s.title}
                                className={`py-8 md:py-2 md:px-8 ${i === 0 ? 'md:pl-0' : ''} ${i > 0 ? `border-t md:border-t-0 ${t.border}` : ''
                                    }`}
                            >
                                <span className={`text-5xl font-extrabold ${t.number}`}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                                <p className={`mt-3 leading-relaxed ${t.body}`}>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ideal for */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold">
                        Ideal <span className="text-[var(--color-brand-accent)]">For</span>
                    </h2>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {solution.idealFor.map((item) => (
                            <span key={item} className="px-5 py-2.5 rounded-full border border-stroke-light bg-surface-card font-medium">{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other solutions */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold">{otherTitle}</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {others.map((o) => (
                            <Link
                                key={o.slug}
                                to={`${basePath}/${o.slug}`}
                                className="group bg-surface-card rounded-3xl border border-stroke-light shadow-sm hover:shadow-md transition-shadow p-8 flex items-center justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-bold">{o.title}</h3>
                                    <p className="mt-2 text-content-secondary">{o.headline}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ProjectGallery
                title={`${solution.title} Projects`}
                category={galleryCategory}
                service={solution.slug}
            />

            <ContactSection
                serviceOptions={serviceOptions}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}