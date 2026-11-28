import React, { useEffect, useRef, useState } from 'react';
import HeroImg from '../../assets/images/home.png';
import WorkersSolarImg from '../../assets/images/workers_solar.jpg';
import CctvImg from '../../assets/images/cctv_image.jpg';
import SeverImg from '../../assets/images/server_room.jpg';
import StackingCard from '../../components/stacking_card';
import ContactSection from '../../components/contact_section';
import WhyChooseUs from '../../components/why_choose_us';
import ProjectGallery from '../../components/project_gallery';
import { featuredProjects } from '../../data/featured_projects';

const cardsData = [
    {
        badge: "01 / Quality",
        title: "Power Systems",
        description: "Reliable, efficient, and sustainable energy solutions designed for homes and commercial spaces. GDLite Africa delivers control and independence through solar installations and integrated hybrid systems.",
        image: WorkersSolarImg,
        linkUrl: "/power-systems",
    },
    {
        badge: "02 / Monitoring",
        title: "Security Systems",
        description: "Smart protection for homes, businesses, and institutions. Our security setups ensure peace of mind with intelligent monitoring, automated alerts, and secured access—always in your control.",
        image: CctvImg,
        linkUrl: "/security-systems",
    },
    {
        badge: "03 / Scalability",
        title: "Network Systems",
        description: "Fast and secure networking for modern living and workspaces. GDLite Africa builds strong infrastructure with seamless data flow, structured cabling, and tailored smart connectivity.",
        image: SeverImg,
        linkUrl: "/network-systems",
    },
];

function Homepage() {
    const sectionRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const [selectedService, setSelectedService] = useState('');

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const initVanta = async () => {
            try {
                await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
                // await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
                await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js');

                if (!vantaEffect && sectionRef.current) {
                    // const effect = VANTA.NET({
                    //     el: sectionRef.current,
                    //     mouseControls: true,
                    //     touchControls: true,
                    //     gyroControls: false,
                    //     minHeight: 200.00,
                    //     minWidth: 200.00,
                    //     scale: 1.00,
                    //     scaleMobile: 1.00,
                    //     backgroundColor: 0x231F20, 
                    //     color: 0xF89E1D,          
                    //     points: 20.00,            
                    //     maxDistance: 14.00,       
                    //     spacing: 14.00,          
                    //     size: 0.50,     
                    //     speed: 1.50
                    // });

                    const effect = VANTA.FOG({
                        el: sectionRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        highlightColor: 0xF89E1D,
                        midtoneColor: 0x0F51B2,
                        lowlightColor: 0x0F51B2,
                        baseColor: 0x231F20,
                        blurFactor: 0.60,
                        speed: 1.20,
                        zoom: 0.80
                    });
                    setVantaEffect(effect);
                }
            } catch (error) {
                console.error("Failed to load Vanta background:", error);
            }
        };

        initVanta();

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <>
            <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden">
                <img
                    src={HeroImg}
                    alt="Home with solar panels, CCTV and automated gate"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

                <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-12 py-24">
                    <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] text-balance drop-shadow-lg">
                        Your trusted partner for innovative technology solutions.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">
                        Solar and backup power, security systems and networks, designed, installed and maintained by one team.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button
                            type="button"
                            onClick={() => scrollTo('contact')}
                            className="inline-flex items-center justify-center px-8 py-4 font-bold text-[var(--color-content-primary)] bg-[var(--color-brand-accent)] rounded-xl hover:opacity-90 transition"
                        >
                            Get a Free Quote
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollTo('solutions')}
                            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white border-2 border-white/70 rounded-xl hover:bg-white hover:text-[var(--color-content-primary)] transition"
                        >
                            Explore Services
                        </button>
                    </div>
                </div>
            </section>

            <section
                id="solutions"
                ref={sectionRef}
                className="relative min-h-screen py-20 px-4 bg-content-primary"
            >
                <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
                        Explore Our Solutions
                    </h1>
                    <p className="text-blue-100 text-lg font-light">
                        Each solution is designed to provide maximum efficiency, security, and scalability for your home or business.
                    </p>
                </div>

                <div className="relative z-10 pb-24">
                    {cardsData.map((card, idx) => (
                        <StackingCard
                            key={idx}
                            index={idx}
                            badgeText={card.badge}
                            title={card.title}
                            description={card.description}
                            imageSrc={card.image}
                            linkUrl={card.linkUrl}
                        />
                    ))}
                </div>
            </section>

            <WhyChooseUs />

            <div className="bg-surface-light">
                <ProjectGallery
                    title="Projects Delivered"
                    images={featuredProjects}
                    limit={6}
                />
            </div>

            <ContactSection
                serviceOptions={['Power Systems', 'Security Systems', 'Network Systems']}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
            />
        </>
    );
}

export default Homepage;