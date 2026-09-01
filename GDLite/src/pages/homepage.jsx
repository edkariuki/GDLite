import HeroImg from '../assets/images/105.jpg'
import WorkersSolarImg from '../assets/images/workers_solar.jpg'
import StackingCard from '../components/stacking_card'

const cardsData = [
    {
        badge: "01 / Quality",
        title: "Power Systems",
        description: "Reliable, efficient, and sustainable energy solutions designed for homes and commercial spaces. GDLite Africa delivers control and independence through solar installations and integrated hybrid systems.",
        image: WorkersSolarImg,
    },
    {
        badge: "02 / Monitoring",
        title: "Security Systems",
        description: "Smart protection for homes, businesses, and institutions. Our security setups ensure peace of mind with intelligent monitoring, automated alerts, and secured access—always in your control.",
        image: HeroImg,
    },
    {
        badge: "03 / Scalability",
        title: "Network Systems",
        description: "Fast and secure networking for modern living and workspaces. GDLite Africa builds strong infrastructure with seamless data flow, structured cabling, and tailored smart connectivity.",
        image: HeroImg,
    },
]

function Homepage() {
    return (
        <>
            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
                <img
                    src={HeroImg}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />

                <p className="absolute top-42 left-6 md:top-48 md:left-12 text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold whitespace-nowrap drop-shadow-md">
                    <span className="text-[#EFA24C]">GD</span>
                    <span className="text-[#2547A8]">LITE</span>
                    <span className="text-black">AFRICA</span>
                </p>

            </div>
            <section className="bg-gray-50 min-h-screen py-20 px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Explore Our Platform
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Scroll down to see our feature breakdown in action.
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative pb-24">
                    {cardsData.map((card, idx) => (
                        <StackingCard
                            key={idx}
                            index={idx}
                            badgeText={card.badge}
                            title={card.title}
                            description={card.description}
                            imageSrc={card.image}
                        />
                    ))}
                </div>
            </section>
        </>

    )
}

export default Homepage