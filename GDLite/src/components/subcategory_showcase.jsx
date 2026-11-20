import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Endless "belt" of subcategories: one large highlighted card with neighbours on both sides.
 * It always moves forward past the last item into the first (no rewinding), auto-advances every
 * `interval` ms, and pauses while hovered, focused or touched.
 *
 * How the loop works: the list is rendered three times side by side and the belt sits in the
 * middle copy. After each move, if it has drifted into an outer copy, it snaps (without animation)
 * to the identical card in the middle copy — so it looks endless.
 *
 * items:    [{ slug, title, cover }]
 * basePath: e.g. '/security-systems/cctv' → links to `${basePath}/${slug}`
 * interval: ms between automatic moves (0 turns autoplay off)
 */
export default function SubcategoryShowcase({ items = [], basePath, interval = 5000 }) {
    const count = items.length;
    const looped = count > 1;
    const belt = looped ? [...items, ...items, ...items] : items;

    const [pos, setPos] = useState(looped ? count : 0); // position on the belt (start of middle copy)
    const [animate, setAnimate] = useState(true);
    const [moving, setMoving] = useState(false);
    const [paused, setPaused] = useState(false);
    const touchStartX = useRef(null);

    const active = looped ? pos % count : 0; // index into `items`

    const step = useCallback(
        (delta) => {
            if (!looped || moving) return;
            setAnimate(true);
            setMoving(true);
            setPos((p) => p + delta);
        },
        [looped, moving]
    );
    const next = useCallback(() => step(1), [step]);
    const prev = useCallback(() => step(-1), [step]);

    // Jump to a specific item, travelling the short way round.
    const goTo = (i) => {
        if (!looped || moving || i === active) return;
        let delta = i - active;
        if (delta > count / 2) delta -= count;
        if (delta < -count / 2) delta += count;
        step(delta);
    };

    // After a move finishes, snap back into the middle copy without animating.
    const onTransitionEnd = (e) => {
        if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;
        setMoving(false);
        if (pos < count || pos >= 2 * count) {
            setAnimate(false);
            setPos(count + (((pos % count) + count) % count));
        }
    };

    // Re-enable animation on the frame after a silent snap.
    useEffect(() => {
        if (animate) return;
        const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
        return () => cancelAnimationFrame(id);
    }, [animate]);

    // Autoplay. Restarts after every move, so a manual click gives a full interval before the next auto-move.
    useEffect(() => {
        if (!looped || !interval || paused || moving) return;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
        const id = setTimeout(() => {
            if (document.visibilityState === 'visible') next();
        }, interval);
        return () => clearTimeout(id);
    }, [looped, interval, paused, moving, pos, next]);

    if (!count) return null;

    const onKeyDown = (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    };
    const onTouchStart = (e) => {
        setPaused(true);
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
        setPaused(false);
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) (dx > 0 ? prev : next)();
        touchStartX.current = null;
    };

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Solutions"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="outline-none"
        >
            {/* --w is each card's width as a % of the viewport: wider on phones, more peek on desktop */}
            <div className="relative overflow-hidden [--w:86] md:[--w:72] lg:[--w:64]">
                <div
                    className={`flex ${animate ? 'transition-transform duration-500 ease-out' : ''}`}
                    style={{ transform: `translateX(calc((100 - var(--w)) / 2 * 1% - ${pos} * var(--w) * 1%))` }}
                    onTransitionEnd={onTransitionEnd}
                >
                    {belt.map((item, b) => {
                        const isActive = b === pos;
                        const card = (
                            <div
                                className={`relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden rounded-3xl bg-stroke-light shadow-lg ${animate ? 'transition-all duration-500' : ''
                                    } ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40'}`}
                            >
                                <img
                                    src={item.cover}
                                    alt=""
                                    loading={Math.abs(b - pos) <= 1 ? 'eager' : 'lazy'}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'group-hover:scale-105' : ''}`}
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex items-end justify-between gap-4 text-white">
                                    <h3 className="text-3xl sm:text-5xl font-extrabold leading-tight">{item.title}</h3>
                                    {isActive && (
                                        <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--color-brand-accent)] text-[var(--color-content-primary)] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
                                    )}
                                </div>
                            </div>
                        );

                        return (
                            <div
                                key={`${item.slug ?? item.title}-${b}`}
                                className="shrink-0 px-2 sm:px-3"
                                style={{ flexBasis: 'calc(var(--w) * 1%)' }}
                                aria-hidden={!isActive}
                            >
                                {isActive ? (
                                    <Link to={`${basePath}/${item.slug}`} className="group block" aria-label={`Open ${item.title}`}>
                                        {card}
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        tabIndex={-1}
                                        onClick={() => step(b - pos)}
                                        className="block w-full text-left cursor-pointer"
                                    >
                                        {card}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {looped && (
                    <>
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous solution"
                            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-content-primary flex items-center justify-center shadow-lg hover:scale-105 transition"
                        >
                            <ChevronLeft className="w-7 h-7" />
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next solution"
                            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-content-primary flex items-center justify-center shadow-lg hover:scale-105 transition"
                        >
                            <ChevronRight className="w-7 h-7" />
                        </button>
                    </>
                )}
            </div>

            {/* Quick jump: every title, current one highlighted */}
            {looped && (
                <div className="mt-8 flex flex-wrap justify-center gap-2 px-6">
                    {items.map((item, i) => (
                        <button
                            key={`chip-${item.slug ?? item.title}`}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-current={i === active}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${i === active
                                    ? 'bg-[var(--color-content-primary)] text-white'
                                    : 'bg-white/60 text-[var(--color-content-primary)] hover:bg-white'
                                }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}