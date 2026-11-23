import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Eye, Target, Zap, ShieldCheck, Network } from 'lucide-react';
import AboutHeroImg from '../../assets/images/about_hero.png';

const PILLARS = [
    { icon: Zap, title: 'Power Systems', to: '/power-systems' },
    { icon: ShieldCheck, title: 'Security Systems', to: '/security-systems' },
    { icon: Network, title: 'Network Systems', to: '/network-systems' },
];

export default function About() {
    return (
        <main className="bg-surface-light text-content-primary font-sans min-h-screen">
            {/* Intro band */}
            {/* Hero: full-screen photo with the title over it (no gradient) */}
            <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-end overflow-hidden">
                <img src={AboutHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />

                <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 pt-28 pb-32 sm:pb-40 text-white">
                    <span className="text-sm font-bold tracking-wider uppercase text-[var(--color-brand-dark)] [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
                        About Us
                    </span>
                    <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
                        Quality-built solutions that make a{' '}
                        <span className="text-[var(--color-brand-accent)]">lasting difference</span>.
                    </h1>
                </div>
            </section>

            {/* Vision & Mission cards, pulled up over the band */}
            {/* Vision & Mission cards, pulled up over the hero */}
            <section className="relative z-10 px-6 sm:px-10 lg:px-12 -mt-20 sm:-mt-28">
                <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl bg-brand p-8 text-white shadow-xl sm:p-12">
                        <Eye className="h-10 w-10 text-[var(--color-brand-accent)]" strokeWidth={1.5} />
                        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">VISION</h2>
                        <p className="mt-4 text-xl font-medium leading-relaxed sm:text-2xl">
                            To be the trusted choice for quality-built solutions that make a
                            lasting difference.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-[var(--color-brand-accent)] p-8 text-content-primary shadow-xl sm:p-12">
                        <Target className="h-10 w-10 text-brand" strokeWidth={1.5} />
                        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">MISSION</h2>
                        <p className="mt-4 text-xl font-medium leading-relaxed sm:text-2xl">
                            To deliver reliable, high-quality solutions tailored to our
                            clients&apos; needs through expert workmanship and dependable
                            service.
                        </p>
                    </div>
                </div>
            </section>

            {/* One partner */}
            <section className="px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:items-center">
                    <div>
                        <h3 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                            One Partner. Integrated Solutions.{' '}
                            <span className="text-brand">Less Complexity.</span>
                        </h3>
                        <p className="mt-8 text-lg leading-relaxed text-content-secondary sm:text-xl">
                            We bring power, security and networking solutions together under
                            one roof, ensuring every system works seamlessly with the others.
                            By coordinating design and installation from the outset, we
                            eliminate conflicting systems, reduce unnecessary costs and
                            simplify project management—giving our clients one reliable
                            partner to turn to for multiple needs.
                        </p>
                    </div>

                    {/* Links to the three service areas */}
                    <ul className="space-y-4">
                        {PILLARS.map(({ icon: Icon, title, to }) => (
                            <li key={title}>
                                <Link
                                    to={to}
                                    className="group flex items-center justify-between gap-4 rounded-2xl border border-stroke bg-surface-card p-6 shadow-sm transition hover:shadow-md"
                                >
                                    <span className="flex items-center gap-4">
                                        <Icon className="h-8 w-8 text-brand" strokeWidth={1.5} />
                                        <span className="text-xl font-bold">{title}</span>
                                    </span>
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-accent)] text-content-primary transition-transform group-hover:rotate-45">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}