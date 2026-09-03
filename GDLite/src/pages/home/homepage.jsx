import HeroImg from '../../assets/images/105.jpg'
import WorkersSolarImg from '../../assets/images/workers_solar.jpg'
import CctvImg from '../../assets/images/cctv_image.jpg'
import SeverImg from '../../assets/images/server_room.jpg'
import StackingCard from '../../components/stacking_card'

const cardsData = [
    {
        badge: "01 / Quality",
        title: "Power Systems",
        description: "Reliable, efficient, and sustainable energy solutions designed for homes and commercial spaces. GDLite Africa delivers control and independence through solar installations and integrated hybrid systems.",
        image: WorkersSolarImg,
        linkUrl: "../solutions/power-systems",
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

                <p className="absolute top-20 left-6 right-6 md:top-26 md:left-12 md:right-auto md:max-w-2xl text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    <span>Your trusted partner for innovative technology solutions.</span>
                </p>

            </div>
            <section className="bg-surface-light min-h-screen py-20 px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-content-primary mb-4">
                        Explore Our Solutions
                    </h1>
                    <p className="text-content-body text-lg">
                        Each solution is designed to provide maximum efficiency, security, and scalability for your home or business.
                    </p>
                </div>

                <div className="relative pb-24">
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

    )
}

export default Homepage