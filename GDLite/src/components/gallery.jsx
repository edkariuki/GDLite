
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Solar1 from "../assets/gallery/power/solar/solar_1.PNG";
import Solar2 from "../assets/gallery/power/solar/solar_2.PNG";
import Solar3 from "../assets/gallery/power/solar/solar_3.PNG";
import Solar4 from "../assets/gallery/power/solar/solar_4.png";
import Solar5 from "../assets/gallery/power/solar/solar_5.PNG";
import Solar6 from "../assets/gallery/power/solar/solar_6.png";
import Solar7 from "../assets/gallery/power/solar/solar_7.png";
import Solar8 from "../assets/gallery/power/solar/solar_8.png";
import Solar9 from "../assets/gallery/power/solar/solar_9.png";
import Solar10 from "../assets/gallery/power/solar/solar_10.png";
import Solar11 from "../assets/gallery/power/solar/solar_11.png";
import Solar12 from "../assets/gallery/power/solar/solar_12.png";
import Solar13 from "../assets/gallery/power/solar/solar_13.png";
import Solar14 from "../assets/gallery/power/solar/solar_14.png";
import Solar15 from "../assets/gallery/power/solar/solar_15.png";
import Solar16 from "../assets/gallery/power/solar/solar_16.png";
import Solar17 from "../assets/gallery/power/solar/solar_17.png";
import Solar18 from "../assets/gallery/power/solar/solar_18.png";

const galleryData = {
    hybrid: {
        title: "Hybrid Solar Systems",
        images: [
            Solar12,
            Solar5,
            Solar17,
            Solar9,
            Solar18,
            Solar7,
            Solar16,
            Solar11,
            Solar10,
            Solar13,
            Solar15,
        ],
    },

    "off-grid": {
        title: "Off-Grid Solar Solutions",
        images: [
            Solar1,
            Solar2,
            Solar14,
            Solar3,
            Solar4,
            Solar6,
            Solar8,
        ],
    },

    "water-pumping": {
        title: "Solar Water Pumping",
        images: [
            "/images/gallery/solar/water-pumping/pumping-1.jpg",
            "/images/gallery/solar/water-pumping/pumping-2.jpg",
            "/images/gallery/solar/water-pumping/pumping-3.jpg",
        ],
    },
};

export default function Gallery() {
    const { service } = useParams();
    const navigate = useNavigate();

    const gallery = galleryData[service];

    const [selectedImage, setSelectedImage] = useState(null);

    if (!gallery) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold">Gallery not found</h2>
                <Link to="/" className="text-blue-600">
                    Return Home
                </Link>
            </div>
        );
    }

    const closeViewer = () => setSelectedImage(null);

    const showNext = () => {
        setSelectedImage(
            (current) => (current + 1) % gallery.images.length
        );
    };

    const showPrevious = () => {
        setSelectedImage(
            (current) =>
                (current - 1 + gallery.images.length) %
                gallery.images.length
        );
    };

    return (
        <main className="min-h-screen bg-white px-5 py-20 sm:px-8 lg:px-16">

            <div className="max-w-[1400px] mx-auto">

                {/* Gallery Header */}
                <div className="mb-10">

                    <button
                        onClick={() => navigate(-1)}
                        className="text-brand font-semibold inline-flex items-center hover:cursor-pointer">

                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </button>

                    <h1 className="text-3xl md:text-4xl font-bold text-content-primary mt-10">
                        {gallery.title}
                    </h1>

                </div>

                {/* Masonry Gallery */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                    {gallery.images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className="block w-full mb-5 break-inside-avoid p-0 border-0 bg-transparent"
                        >
                            <img
                                src={image}
                                alt=""
                                loading="lazy"
                                className="block w-full h-auto rounded-lg"
                            />
                        </button>
                    ))}
                </div>

            </div>

            {/* Fullscreen Image Viewer */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-5"
                    onClick={closeViewer}
                >

                    {/* Close */}
                    <button
                        onClick={closeViewer}
                        aria-label="Close image viewer"
                        className="absolute top-5 right-7 text-white text-4xl"
                    >
                        &times;
                    </button>

                    {/* Previous */}
                    {gallery.images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showPrevious();
                                }}
                                aria-label="Previous image"
                                className="absolute left-3 md:left-8 text-white text-3xl"
                            >
                                &#10094;
                            </button>

                            {/* Next */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showNext();
                                }}
                                aria-label="Next image"
                                className="absolute right-3 md:right-8 text-white text-3xl"
                            >
                                &#10095;
                            </button>
                        </>
                    )}

                    {/* Selected Image */}
                    <img
                        src={gallery.images[selectedImage]}
                        alt=""
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-[90vw] max-h-[85vh] object-contain"
                    />

                </div>
            )}

        </main>
    );
}
