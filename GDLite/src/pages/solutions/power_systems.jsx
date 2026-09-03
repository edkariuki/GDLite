import React from 'react';
import SolarWaterImg from '../../assets/images/solar_water.jpg';
import HybridBackupImg from '../../assets/images/hybrid_backup.jpg';
import SolarWaterPumpingImg from '../../assets/images/solar_water_pumping.jpg';
import BackupGeneratorImg from '../../assets/images/backup_generator.jpg';
import ElectricalDesignImg from '../../assets/images/electrical_design.jpg';
import OffGridSolarImg from '../../assets/images/off_grid_solar.png';


export default function PowerSystems() {
    const coreServices = [
        {
            title: "Hybrid Backup Systems",
            description: "Seamlessly switch between solar, battery storage, and grid power to eliminate downtime and reduce electricity expenses for home or business.",
            image: HybridBackupImg,
            linkUrl: "#contact",
        },
        {
            title: "Off-Grid Solar Solutions",
            description: "Complete energy independence for remote locations. Standalone solar and battery setups engineered to keep power running 24/7 without a grid connection.",
            image: OffGridSolarImg,
            linkUrl: "#contact",
        },
        {
            title: "Solar Water Pumping",
            description: "Cost-effective, reliable water pumping powered directly by the sun. Perfect for agricultural irrigation, livestock, and domestic water supply.",
            image: SolarWaterPumpingImg,
            linkUrl: "#contact",
        },
        {
            title: "Solar Water Heaters",
            description: "High-efficiency thermal water heating for residential and commercial properties. Cut monthly water heating bills significantly.",
            image: SolarWaterImg,
            linkUrl: "#contact",
        },
        {
            title: "Backup Generators",
            description: "Heavy-duty automatic and manual backup generators. Ensure essential machinery and critical systems stay powered during outages.",
            image: BackupGeneratorImg,
            linkUrl: "#contact",
        },
        {
            title: "Electrical Design & Contracting",
            description: "Certified professional electrical designs, load analysis, wiring, and turn-key installation services complying with EPRA and national safety standards.",
            image: ElectricalDesignImg,
            linkUrl: "#contact",
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
            {/* Hero Header */}
            <section className="bg-slate-900 text-white py-20 px-6 sm:px-12 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase">
                        Energy & Electrical Engineering
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        Reliable & Sustainable <br className="hidden sm:inline" /> Power Solutions
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                        From solar installations to electrical contracting, we deliver energy independence for residential, commercial, and agricultural projects.
                    </p>
                    <div className="pt-4">
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#2547A8] rounded-xl hover:bg-blue-700 transition">
                            Get a Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section - Grid Layout */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Power Systems solutions</h2>
                    <p className="text-gray-600 mt-2">Tailored engineering services designed to meet your power requirements.</p>
                </div>

                {/* Responsive Grid: 1 column on mobile, 2 columns on desktop (md:) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {coreServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Larger Image Container (Dominates the card) */}
                            <div className="w-full h-80 sm:h-96 overflow-hidden relative bg-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Compact Text Area */}
                            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <a
                                        href={service.linkUrl || "#contact"}
                                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#2547A8] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-colors duration-200 w-full sm:w-auto"
                                    >
                                        Request Solution
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Location & Contact Section */}
            <section id="contact" className="bg-white border-t border-gray-200 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <span className="text-[#2547A8] font-bold text-sm tracking-wider uppercase">Visit Our Office</span>
                        <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch with Our Team</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Have a project in mind or need a customized load assessment? Visit our office or reach out directly to schedule a technical site survey.
                        </p>

                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                            <div className="flex items-start space-x-3">
                                <svg className="w-6 h-6 text-[#2547A8] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Office Location</h4>
                                    <p className="text-gray-600 text-sm">3rd Floor, Spur Mall, Thika Road</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Inquiry Form */}
                    <form className="bg-gray-50 p-8 rounded-3xl border border-gray-200 space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">Request a Quote</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2547A8] outline-none" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                            <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2547A8] outline-none">
                                <option>Hybrid Backup System</option>
                                <option>Off-grid Solar</option>
                                <option>Solar Pumps</option>
                                <option>Solar Water Heaters</option>
                                <option>Backup Generators</option>
                                <option>Electrical Design & Contracting</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows="3" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2547A8] outline-none" placeholder="Describe your power needs..."></textarea>
                        </div>
                        <button type="button" className="w-full py-3 bg-[#2547A8] text-white font-semibold rounded-lg hover:bg-blue-800 transition">
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}