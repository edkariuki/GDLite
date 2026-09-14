import React, { useState } from 'react';
import AlarmSystemsImg from '../../assets/images/alarm_system.png';
import HybridBackupImg from '../../assets/images/hybrid_backup.jpg';
import FireExtinguisherImg from '../../assets/images/fire_extinguisher.jpg';
import ElectricFenceImg from '../../assets/images/electric_fence.jpg';
import ElectricalDesignImg from '../../assets/images/electrical_design.jpg';
import OffGridSolarImg from '../../assets/images/off_grid_solar.png';
import { ArrowRight } from 'lucide-react';
import { Dropdown } from '../../components/dropdown';


export default function SecuritySystems() {
    const coreServices = [
        {
            title: "CCTV",
            description: "Comprehensive surveillance solutions for residential and commercial properties.",
            image: HybridBackupImg,
            linkUrl: "#contact",
        },
        {
            title: "Alarm Systems",
            description: "Advanced alarm systems with real-time alerts and monitoring for enhanced security.",
            image: AlarmSystemsImg,
            linkUrl: "#contact",
        },
        {
            title: "Electric Fence",
            description: "High-security electric fencing solutions for perimeter protection of homes, farms, and commercial properties.",
            image: ElectricFenceImg,
            linkUrl: "#contact",
        },
        {
            title: "Biometric Access Control",
            description: "Advanced access control systems using biometric authentication for secure and convenient entry management.",
            image: HybridBackupImg,
            linkUrl: "#contact",
        },
        {
            title: "Gate Automation",
            description: "Automated gate systems for residential and commercial properties, providing convenience and security.",
            image: ElectricalDesignImg,
            linkUrl: "#contact",
        },
        {
            title: "Fire Suppression",
            description: "Advanced fire suppression systems for residential and commercial properties, ensuring safety and compliance.",
            image: FireExtinguisherImg,
            linkUrl: "#contact",
        },
    ];
    const [selectedService, setSelectedService] = useState('');

    return (
        <div className="bg-surface-light text-content-primary font-sans min-h-screen">
            <section className="bg-surface-hero text-white py-20 px-6 sm:px-12 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-accent/20 text-blue-accent-light text-sm font-semibold tracking-wide uppercase">
                        Security Systems
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        Reliable & Sustainable <br className="hidden sm:inline" /> Power Solutions
                    </h1>
                    <p className="text-lg sm:text-xl text-content-muted max-w-2xl mx-auto">
                        From solar installations to electrical contracting, we deliver energy independence for residential, commercial, and agricultural projects.
                    </p>
                    <div className="pt-4">
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-hover transition">
                            Get a Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-content-primary">Our Security Systems solutions</h2>
                    <p className="text-content-secondary mt-2">Tailored engineering services designed to meet your security requirements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {coreServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-surface-card rounded-3xl border border-stroke shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="w-full h-80 sm:h-96 overflow-hidden relative bg-stroke-light">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-extrabold text-content-primary leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <a
                                        href={service.linkUrl || "#contact"}
                                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-hover focus:ring-4 focus:ring-brand-focus transition-colors duration-200 w-full sm:w-auto"
                                    >
                                        Request Solution
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="bg-surface-card border-t border-stroke py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <span className="text-brand font-bold text-sm tracking-wider uppercase">Visit Our Office</span>
                        <h2 className="text-3xl font-extrabold text-content-primary">Get in Touch with Our Team</h2>
                        <p className="text-content-secondary leading-relaxed">
                            Have a project in mind or need a customized load assessment? Visit our office or reach out directly to schedule a technical site survey.
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


                    <form className="bg-surface-light p-8 rounded-3xl border border-stroke space-y-4">
                        <h3 className="text-xl font-bold text-content-primary">Request a Quote</h3>
                        <div>
                            <label className="block text-sm font-medium text-content-body mb-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-content-muted focus:ring-2 focus:ring-brand outline-none bg-surface-card text-content-primary" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-content-body mb-1">Type of Service</label>
                            <Dropdown
                                placeholder="Select a service..."
                                options={coreServices.map(service => service.title)}
                                value={selectedService}
                                onChange={(value) => setSelectedService(value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-content-body mb-1">Message</label>
                            <textarea rows="3" className="w-full px-4 py-2.5 rounded-lg border border-content-muted focus:ring-2 focus:ring-brand outline-none bg-surface-card text-content-primary" placeholder="Describe your power needs..."></textarea>
                        </div>
                        <button type="button" className="w-full py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition">
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}