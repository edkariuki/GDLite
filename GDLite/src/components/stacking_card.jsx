import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function StackingCard({ title, description, imageSrc, badgeText, linkUrl = "#", index }) {
    return (
        <div
            className="sticky w-full max-w-5xl mx-auto rounded-3xl bg-surface-card border border-stroke shadow-xl overflow-hidden p-8 md:p-12 mb-8 transition-all"
            style={{
                top: `calc(4rem + ${index * 1.5}rem)`,
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center space-y-6">
                    <div className="space-y-4">
                        {badgeText && (
                            <span className="w-fit px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand bg-brand-light rounded-full">
                                {badgeText}
                            </span>
                        )}
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary leading-tight">
                            {title}
                        </h2>
                        <p className="text-content-secondary text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div>
                        <Link
                            to={linkUrl || "#"}
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-hover focus:ring-4 focus:ring-brand-focus transition-colors duration-200"
                        >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>

                <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden relative shadow-inner bg-stroke-light">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    )
}