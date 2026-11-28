import React from 'react';

function Card({ item }) {
    return (
        <div className="relative shrink-0 w-72 sm:w-80 aspect-[4/3] mr-5 overflow-hidden rounded-2xl bg-surface-card">
            <img
                src={item.src}
                alt={item.caption || ''}
                loading="lazy"
                draggable="false"
                className="w-full h-full object-cover"
            />
            {item.caption && (
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pt-10 pb-3 text-sm font-medium text-white">
                    {item.caption}
                </span>
            )}
        </div>
    );
}

export default function ProjectsMarquee({ title = "Projects We've Delivered", items = [], secondsPerCard = 6 }) {
    if (!items.length) return null;

    // Make sure one copy is wider than the screen, otherwise the loop shows a gap
    const base = items.length < 6 ? Array.from({ length: Math.ceil(6 / items.length) }, () => items).flat() : items;
    const duration = base.length * secondsPerCard;

    return (
        <section className="py-20 overflow-hidden">
            <style>{`
                @keyframes gd-marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                .gd-marquee-track { animation: gd-marquee var(--gd-dur) linear infinite; }
                .gd-marquee:hover .gd-marquee-track { animation-play-state: paused; }
                @media (prefers-reduced-motion: reduce) {
                    .gd-marquee-track { animation: none; }
                    .gd-marquee { overflow-x: auto; }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-content-primary">{title}</h2>
            </div>

            <div className="gd-marquee relative mt-10 overflow-hidden" style={{ '--gd-dur': `${duration}s` }}>
                <div className="gd-marquee-track flex w-max">
                    <div className="flex shrink-0">
                        {base.map((item, i) => <Card key={i} item={item} />)}
                    </div>
                    <div className="flex shrink-0" aria-hidden="true">
                        {base.map((item, i) => <Card key={i} item={item} />)}
                    </div>
                </div>

                {/* Edge dimming: images darken slightly as they enter and leave */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r " />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l" />
            </div>
        </section>
    );
}