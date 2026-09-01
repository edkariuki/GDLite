export default function StackingCard({ title, description, imageSrc, badgeText, index }) {
    return (
        <div
            className="sticky top-12 w-full max-w-5xl mx-auto rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden p-8 md:p-12 mb-8 transition-all"
            style={{
                // Offsets top sticky positioning slightly per card to create a subtle layered stack
                top: `calc(4rem + ${index * 1.5}rem)`,
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side: Content */}
                <div className="flex flex-col justify-center space-y-4">
                    {badgeText && (
                        <span className="w-fit px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2547A8] bg-[#2547A8]/10 rounded-full">
                            {badgeText}
                        </span>
                    )}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden relative shadow-inner bg-gray-100">
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