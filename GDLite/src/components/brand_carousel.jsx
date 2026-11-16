import React from 'react';

export default function BrandCarousel({
    brands = [],
    staticBelow = 5,
    title,
    eyebrow = 'Trusted Brands',
    speed = 45,
    minItems = 12,
    grayscale = true,
    className = '',
}) {
    if (!brands.length) return null;

    const sectionProps = { title, eyebrow, className };

    // Few brands: show them once, centred, without movement.
    if (brands.length < staticBelow) {
        return (
            <Section {...sectionProps}>
                <ul className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 sm:gap-x-20 px-6">
                    {brands.map((brand) => (
                        <BrandLogo key={brand.name} brand={brand} grayscale={grayscale} />
                    ))}
                </ul>
            </Section>
        );
    }

    const repeats = Math.max(1, Math.ceil(minItems / brands.length));
    const group = Array.from({ length: repeats }, () => brands).flat();
    const track = [...group, ...group];

    return (
        <Section {...sectionProps}>
            <style>{`
                @keyframes brand-carousel-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .brand-carousel-track { animation: brand-carousel-scroll var(--brand-carousel-speed, 30s) linear infinite; }
                .brand-carousel:hover .brand-carousel-track { animation-play-state: paused; }
                @media (prefers-reduced-motion: reduce) { .brand-carousel-track { animation: none; } }
            `}</style>

            <div
                className="brand-carousel relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                style={{ '--brand-carousel-speed': `${speed}s` }}
            >
                <ul className="brand-carousel-track flex w-max items-center">
                    {track.map((brand, i) => (
                        <BrandLogo
                            key={`${brand.name}-${i}`}
                            brand={brand}
                            grayscale={grayscale}
                            isDuplicate={i >= brands.length}
                            className="mx-8"
                        />
                    ))}
                </ul>
            </div>
        </Section>
    );
}

// Shared wrapper: background, spacing and the optional eyebrow + title.
function Section({ title, eyebrow, className = '', children }) {
    return (
        <section className={`py-16 bg-surface-light border-t border-stroke-light ${className}`}>
            {(eyebrow || title) && (
                <div className="max-w-7xl mx-auto px-6 text-center mb-10">
                    {eyebrow && <span className="text-brand font-bold text-sm tracking-wider uppercase">{eyebrow}</span>}
                    {title && <h2 className="mt-2 text-3xl font-bold text-content-primary">{title}</h2>}
                </div>
            )}
            {children}
        </section>
    );
}

// A single logo (or name as text), optionally linked. Duplicates in the scrolling strip are hidden
// from screen readers and keyboard focus so each brand is announced only once.
function BrandLogo({ brand, grayscale, isDuplicate = false, className = '' }) {
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
            aria-hidden={isDuplicate || undefined}
            className={`h-16 w-40 shrink-0 flex items-center justify-center transition duration-300 ${grayscale ? 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100' : ''
                } ${className}`}
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
}