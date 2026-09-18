import React, { useEffect, useRef, useState } from 'react';
import HeroImg from '../../assets/images/home.jpg';
import WorkersSolarImg from '../../assets/images/workers_solar.jpg';
import CctvImg from '../../assets/images/cctv_image.jpg';
import SeverImg from '../../assets/images/server_room.jpg';
import StackingCard from '../../components/stacking_card';

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
    },
    {
        badge: "03 / Scalability",
        title: "Network Systems",
        description: "Fast and secure networking for modern living and workspaces. GDLite Africa builds strong infrastructure with seamless data flow, structured cabling, and tailored smart connectivity.",
        image: SeverImg,
    },
];

function Homepage() {
    const sectionRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

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
                await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
                // await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js');

                if (!vantaEffect && sectionRef.current) {
                    const effect = VANTA.NET({
                        el: sectionRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        backgroundColor: 0x231F20, // Uses your --color-content-primary color
                        color: 0xF89E1D,           // Keeps your vibrant Brand Accent Orange for high contrast nodes
                        points: 20.00,             // Higher points density
                        maxDistance: 14.00,        // Tighter lines
                        spacing: 14.00,            // Tighter mesh grouping
                        size: 0.50,                // Keeps base size tiny
                        speed: 1.50
                    });

                    // const effect = VANTA.FOG({
                    //     el: sectionRef.current,
                    //     mouseControls: true,
                    //     touchControls: true,
                    //     gyroControls: false,
                    //     minHeight: 200.00,
                    //     minWidth: 200.00,
                    //     highlightColor: 0xF89E1D, // Brand Accent Orange
                    //     midtoneColor: 0x0F51B2,   // Brand Primary Blue
                    //     lowlightColor: 0x0F51B2,
                    //     baseColor: 0x231F20,      // Content Primary background
                    //     blurFactor: 0.60,
                    //     speed: 1.20,
                    //     zoom: 0.80
                    // });
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
            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
                <img
                    src={HeroImg}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />

                <p className="absolute top-20 left-6 right-6 md:top-26 md:left-12 md:right-auto md:max-w-2xl text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    <span>Your trusted partner for innovative technology solutions.</span>
                </p>
            </div>

            <section
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
        </>
    );
}

export default Homepage;