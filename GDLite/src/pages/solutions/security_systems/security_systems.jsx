import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { securityCategories } from '../../../data/security_data';
import ContactSection from '../../../components/contact_section';

export default function SecuritySystems() {
    const [selectedService, setSelectedService] = useState('');

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            <section className="bg-surface-hero text-white py-20 px-6 sm:px-12 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-accent)] text-[var(--color-content-primary)] text-sm font-bold tracking-wide uppercase">
                        Security Systems
                    </span>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        High Integrity & Reliable <br className="hidden sm:inline" /> Security Solutions
                    </h1>

                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                        Security solutions for homes, businesses, and institutions. We deliver intelligent monitoring,
                        automated alerts, and secure access — always in your control.
                    </p>

                    <div className="pt-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] rounded-xl hover:opacity-90 transition shadow-lg"
                        >
                            Get a Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-content-primary">Our Security Systems Solutions</h2>
                    <p className="text-content-secondary mt-2">Choose a category to explore the services we offer.</p>
                </div>

                <div className="flex flex-col gap-12">
                    {securityCategories.map((category, index) => {
                        const reversed = index % 2 === 1;
                        return (
                            <Link
                                key={category.slug}
                                to={`/security-systems/${category.slug}`}
                                className={`group bg-surface-card rounded-3xl border border-stroke shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'
                                    }`}
                            >
                                <div className="w-full md:w-1/2 h-80 sm:h-[28rem] md:h-auto md:min-h-[32rem] overflow-hidden relative bg-stroke-light shrink-0">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-8 sm:p-12 lg:p-16 flex-1 flex flex-col justify-center space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-3xl sm:text-4xl font-extrabold text-content-primary leading-tight">
                                            {category.title}
                                        </h3>
                                        <p className="text-content-secondary text-base sm:text-lg leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>

                                    {category.subcategories.length > 0 && (
                                        <ul className="flex flex-wrap gap-2">
                                            {category.subcategories.map((sub) => (
                                                <li
                                                    key={sub.title}
                                                    className="px-4 py-1.5 rounded-full bg-surface-light border border-stroke-light text-sm font-medium text-content-secondary"
                                                >
                                                    {sub.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <span className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand rounded-xl group-hover:bg-brand-hover transition-colors duration-200 w-full sm:w-auto sm:self-start">
                                        Explore {category.title}
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <ContactSection
                serviceOptions={securityCategories.map((c) => c.title)}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </div>
    );
}