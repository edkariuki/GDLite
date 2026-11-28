import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { solarGalleryData } from "../data/solar_gallery";
import { upsGalleryData } from "../data/ups_gallery";
import { generatorsGalleryData } from "../data/generators_gallery";
import { electricalGalleryData } from "../data/electrical_gallery";
import { accessControlGalleryData } from "../data/access_control_gallery";
import { alarmsGalleryData } from "../data/alarms_gallery";
import { electricFenceGalleryData } from "../data/electric_fence_gallery";
import { gateAutomationGalleryData } from "../data/gate_automation_gallery";
import { cableStructuresGalleryData } from "../data/cable_structures_gallery";

const allGalleries = {
    solar: solarGalleryData, ups: upsGalleryData, generators: generatorsGalleryData,
    electrical: electricalGalleryData, "access-control": accessControlGalleryData,
    alarms: alarmsGalleryData, "electric-fence": electricFenceGalleryData, "gate-automation": gateAutomationGalleryData,
    "cable-structures": cableStructuresGalleryData,
};

export default function ProjectGallery({
    title = "Projects We've Completed",
    category,
    service,
    images: imagesProp,
    galleryPath: galleryPathProp,
    limit = 6,
}) {
    const [selected, setSelected] = useState(null);

    const raw = imagesProp ?? allGalleries[category]?.[service]?.images ?? [];
    const items = raw.map((i) => (typeof i === "string" ? { src: i, caption: "" } : i));

    const galleryPath =
        galleryPathProp ?? (category && service ? `/gallery/${category}/${service}` : undefined);
    const visible = items.slice(0, limit);

    const close = () => setSelected(null);
    const next = () => setSelected((i) => (i + 1) % items.length);
    const prev = () => setSelected((i) => (i - 1 + items.length) % items.length);

    useEffect(() => {
        setSelected(null);
    }, [category, service]);

    useEffect(() => {
        if (selected === null) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected, items.length]);

    if (!items.length) return null;

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">{title}</h2>
                    {galleryPath && items.length > limit && (
                        <Link to={galleryPath} className="inline-flex items-center font-semibold text-brand">
                            View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    )}
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visible.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(i)}
                            className="group relative block w-full aspect-[4/3] overflow-hidden rounded-2xl bg-surface-card border border-stroke-light p-0"
                        >
                            <img
                                src={item.src}
                                alt={item.caption}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {item.caption && (
                                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pt-10 pb-3 text-left text-sm font-medium text-white">
                                    {item.caption}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {selected !== null && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-5"
                    onClick={close}
                >
                    <button onClick={close} aria-label="Close" className="absolute top-5 right-7 text-white text-4xl">
                        &times;
                    </button>
                    {items.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                aria-label="Previous image"
                                className="absolute left-3 md:left-8 text-white text-3xl"
                            >
                                &#10094;
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                aria-label="Next image"
                                className="absolute right-3 md:right-8 text-white text-3xl"
                            >
                                &#10095;
                            </button>
                        </>
                    )}
                    <img
                        src={items[selected].src}
                        alt={items[selected].caption}
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-[90vw] max-h-[80vh] object-contain"
                    />
                    {items[selected].caption && (
                        <p className="mt-4 text-white/85 text-center" onClick={(e) => e.stopPropagation()}>
                            {items[selected].caption}
                        </p>
                    )}
                </div>
            )}
        </section>
    );
}