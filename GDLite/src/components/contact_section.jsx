import React, { useState } from 'react';
import { Dropdown } from '../components/dropdown';

const inputClass =
    'w-full px-4 py-2.5 rounded-lg border border-content-muted focus:ring-2 focus:ring-brand outline-none bg-surface-card text-content-primary';

/**
 * Office info + quote form, shared by the main and category pages.
 * The selected service is controlled by the parent so cards can pre-fill it.
 */
export default function ContactSection({ serviceOptions, selectedService, onServiceChange }) {
    const [status, setStatus] = useState({ loading: false, error: null, success: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formElement = e.currentTarget;

        setStatus({ loading: true, error: null, success: false });

        const formData = new FormData(formElement);
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            product: selectedService,
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send_quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Failed to send inquiry.');
            }

            setStatus({ loading: false, error: null, success: true });
            formElement.reset();
            onServiceChange('');
            setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 5000);
        } catch (error) {
            setStatus({ loading: false, error: error.message, success: false });
        }
    };

    return (
        <section id="contact" className="bg-surface-card border-t border-stroke py-16 px-6 scroll-mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <span className="text-brand font-bold text-sm tracking-wider uppercase">Visit Our Office</span>
                    <h2 className="text-3xl font-extrabold text-content-primary">Get in Touch with Our Team</h2>
                    <p className="text-content-secondary leading-relaxed">
                        Have a project in mind or need a customized load assessment? Visit our office or reach out
                        directly to schedule a technical site survey.
                    </p>

                    <div className="p-6 bg-surface-light rounded-2xl border border-stroke-light space-y-4">
                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-brand flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                <h4 className="font-semibold text-content-primary">Office Location</h4>
                                <p className="text-content-secondary text-sm">3rd Floor, Spur Mall, Thika Road</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-surface-light p-8 rounded-3xl border border-stroke space-y-4">
                    <h3 className="text-xl font-bold text-content-primary">Request a Quote</h3>

                    {status.success && (
                        <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                            Inquiry sent successfully! We will get back to you soon.
                        </div>
                    )}
                    {status.error && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm font-medium">{status.error}</div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-content-body mb-1">Full Name</label>
                        <input type="text" name="name" required className={inputClass} placeholder="John Doe" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-content-body mb-1">Email Address</label>
                        <input type="email" name="email" required className={inputClass} placeholder="john@example.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-content-body mb-1">Phone Number</label>
                        <input type="tel" name="phone" required className={inputClass} placeholder="+254 700 000000" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-content-body mb-1">Type of Service</label>
                        <Dropdown
                            placeholder="Select a service..."
                            options={serviceOptions}
                            value={selectedService}
                            onChange={onServiceChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-content-body mb-1">Message</label>
                        <textarea name="message" rows="3" required className={inputClass} placeholder="Describe your power needs..." />
                    </div>

                    <button
                        type="submit"
                        disabled={status.loading}
                        className="w-full py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition disabled:opacity-50"
                    >
                        {status.loading ? 'Sending Inquiry...' : 'Send Inquiry'}
                    </button>
                </form>
            </div>
        </section>
    );
}