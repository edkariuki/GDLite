import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { categories, getCategoryBySlug } from '../../../data/data';
import ContactSection from '../../../components/contact_section';

export default function PowerSystemCategory() {
    const { categorySlug } = useParams();
    const category = getCategoryBySlug(categorySlug);
    const [selectedService, setSelectedService] = useState('');

    // Reset form selection and scroll to top when switching categories.
    useEffect(() => {
        setSelectedService('');
        window.scrollTo(0, 0);
    }, [categorySlug]);

    if (!category) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center bg-surface-light">
                <h1 className="text-3xl font-bold text-content-primary">Category not found</h1>
                <Link to="/power-systems" className="text-brand font-semibold inline-flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Power Systems
                </Link>
            </div>
        );
    }

    const Icon = category.icon;
    const otherCategories = categories.filter((c) => c.slug !== category.slug);

    const requestQuote = (title) => {
        setSelectedService(title);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            <section className="bg-surface-hero text-white py-16 px-6 sm:px-12 relative overflow-hidden">
                <div className="max-w-5xl mx-auto space-y-6">
                    <nav className="text-sm text-blue-100 flex items-center gap-2">
                        <Link to="/power-systems" className="hover:text-white inline-flex items-center">
                            <ArrowLeft className="w-4 h-4 mr-1" /> Power Systems
                        </Link>
                        <span>/</span>
                        <span className="text-white font-medium">{category.title}</span>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-accent)] flex items-center justify-center shrink-0">
                            <Icon className="w-7 h-7 text-[var(--color-content-primary)]" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{category.title}</h1>
                    </div>

                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">{category.description}</p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.subcategories.map((sub) => (
                        <div
                            key={sub.title}
                            className="bg-surface-card rounded-3xl border border-stroke shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="w-full h-64 sm:h-80 overflow-hidden relative bg-stroke-light">
                                {sub.image ? (
                                    <img
                                        src={sub.image}
                                        alt={sub.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-surface-light">
                                        <Icon className="w-20 h-20 text-brand opacity-40" />
                                    </div>
                                )}
                            </div>

                            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-extrabold text-content-primary leading-tight">{sub.title}</h3>
                                    <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
                                        {sub.description}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="button"
                                        onClick={() => requestQuote(sub.title)}
                                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-hover focus:ring-4 focus:ring-brand-focus transition-colors duration-200 w-full sm:w-auto"
                                    >
                                        Request a Quote
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <h2 className="text-xl font-bold text-content-primary mb-4">Other solutions</h2>
                    <div className="flex flex-wrap gap-3">
                        {otherCategories.map((c) => (
                            <Link
                                key={c.slug}
                                to={`/power-systems/${c.slug}`}
                                className="px-4 py-2 rounded-full border border-stroke bg-surface-card text-sm font-medium text-content-secondary hover:text-brand hover:border-brand transition"
                            >
                                {c.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection
                serviceOptions={category.subcategories.map((s) => s.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}