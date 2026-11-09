import React from 'react';

export default function BrandCarousel({
    brands = [],
    staticBelow,
    title,
    eyebrow = 'Trusted Brands',
    speed = 45,
    minItems = 12,
    grayscale = true,
    className = '',
}) {
    if (!brands.length) return null;

    if (brands.length < staticBelow) {
        return (
            <Section {...rest}>
                <ul className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 px-6">
                    {brands.map((b) => <BrandLogo key={b.name} brand={b} />)}
                </ul>
            </Section>
        );
    }

    const repeats = Math.max(1, Math.ceil(minItems / brands.length));
    const group = Array.from({ length: repeats }, () => brands).flat();
    const track = [...group, ...group];

    return (
        <section className={`py-16 bg-surface-light border-t border-stroke-light ${className}`}>
            <style>{`
                @keyframes brand-carousel-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .brand-carousel-track { animation: brand-carousel-scroll var(--brand-carousel-speed, 30s) linear infinite; }
                .brand-carousel:hover .brand-carousel-track { animation-play-state: paused; }
                @media (prefers-reduced-motion: reduce) { .brand-carousel-track { animation: none; } }
            `}</style>

            {(eyebrow || title) && (
                <div className="max-w-7xl mx-auto px-6 text-center mb-10">
                    {eyebrow && (
                        <span className="text-brand font-bold text-sm tracking-wider uppercase">{eyebrow}</span>
                    )}
                    {title && <h2 className="mt-2 text-3xl font-bold text-content-primary">{title}</h2>}
                </div>
            )}

            <div
                className="brand-carousel relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                style={{ '--brand-carousel-speed': `${speed}s` }}
            >
                <ul className="brand-carousel-track flex w-max items-center">
                    {track.map((brand, i) => {
                        const isDuplicate = i >= brands.length;
                        const content = brand.logo ? (
                            <img
                                src={brand.logo}
                                alt={isDuplicate ? '' : brand.name}
                                loading="lazy"
                                className="max-h-full max-w-full object-contain"
                            />
                        ) : (
                            <span className="text-xl font-extrabold tracking-tight text-content-secondary whitespace-nowrap">
                                {brand.name}
                            </span>
                        );

                        return (
                            <li
                                key={`${brand.name}-${i}`}
                                aria-hidden={isDuplicate || undefined}
                                className={`h-16 w-40 mx-8 shrink-0 flex items-center justify-center transition duration-300 ${grayscale ? 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100' : ''
                                    }`}
                            >
                                {brand.url ? (
                                    <a
                                        href={brand.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        tabIndex={isDuplicate ? -1 : undefined}
                                        className="h-full w-full flex items-center justify-center"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}