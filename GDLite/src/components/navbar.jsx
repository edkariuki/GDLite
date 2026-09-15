import { useState } from 'react'
import { Zap, Lock, Radio, ChevronDown, X, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const megaMenuData = {
    products: [
        { title: 'Power Systems', desc: 'Modern solar and backup power solutions', icon: Zap, linkUrl: '/power-systems' },
        { title: 'Security Systems', desc: 'Secure your property with our advanced systems', icon: Lock, linkUrl: '/security-systems' },
        { title: 'Network Systems', desc: 'Infrastructure for seamless connectivity', icon: Radio, linkUrl: '/network-systems' },
    ],
}

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

    const handleMobileLinkClick = () => {
        setMobileOpen(false)
        setMobileProductsOpen(false)
    }

    return (
        <nav className="sticky top-0 z-50 bg-surface-card border-b border-stroke shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <a href="/" className="text-2xl font-extrabold tracking-tight">
                    <span className="text-brand-accent">GD</span>
                    <span className="text-brand">LITE</span>
                    <span className="text-content-primary">AFRICA</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 h-full">
                    <a href="/" className="text-content-body hover:text-content-primary font-medium">Home</a>

                    <div
                        className="relative h-full flex items-center"
                        onMouseEnter={() => setActiveMenu('products')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className="flex items-center gap-1 text-content-body hover:text-brand font-medium py-2">
                            Products
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-brand' : ''}`}
                            />
                        </button>

                        {activeMenu === 'products' && (
                            /* Updated absolute classes to center it horizontally under the button */
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-surface-card border border-stroke rounded-2xl shadow-xl p-3 mt-1 transition-all">
                                <div className="flex flex-col gap-2">
                                    {megaMenuData.products.map((item, idx) => {
                                        const IconComponent = item.icon;
                                        const isReactComponent = typeof IconComponent !== 'string';

                                        return (
                                            <a
                                                key={idx}
                                                href={item.linkUrl}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-light transition-colors"
                                            >
                                                <span className="text-2xl p-2 bg-stroke-light rounded-lg flex items-center justify-center min-w-[36px] min-h-[36px]">
                                                    {isReactComponent ? (
                                                        <IconComponent className="w-4 h-4 text-content-body" />
                                                    ) : (
                                                        <span>{item.icon}</span>
                                                    )}
                                                </span>
                                                <div>
                                                    <p className="font-bold text-sm text-content-primary">{item.title}</p>
                                                    <p className="text-xs text-content-secondary line-clamp-1">{item.desc}</p>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    <a href="#" className="text-content-body hover:text-content-primary font-medium">About</a>
                    <a href="#" className="text-content-body hover:text-content-primary font-medium">Contact</a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="px-5 py-2.5 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-hover transition-colors">
                        Enquire Now
                    </a>
                </div>

                <button className="md:hidden p-2 text-content-body" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-surface-card border-b border-stroke px-6 py-6 space-y-4 shadow-2xl z-50">
                    <a href="/" onClick={handleMobileLinkClick} className="block font-medium text-content-primary">Home</a>

                    <div>
                        <button
                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                            className="flex items-center justify-between w-full font-medium text-content-primary py-2"
                        >
                            <span>Products</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-brand' : ''}`} />
                        </button>

                        {mobileProductsOpen && (
                            <div className="pl-4 pt-2 space-y-2 border-l border-stroke ml-2 my-2">
                                {megaMenuData.products.map((item, idx) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <Link
                                            key={idx}
                                            to={item.linkUrl}
                                            onClick={handleMobileLinkClick}
                                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-light transition-colors"
                                        >
                                            {IconComponent && <IconComponent className="w-4 h-4 text-brand" />}
                                            <span className="text-sm font-medium text-content-body">{item.title}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <a href="#" onClick={handleMobileLinkClick} className="block font-medium text-content-primary">About</a>
                    <a href="#" onClick={handleMobileLinkClick} className="block font-medium text-content-primary">Contact</a>

                    <div className="pt-4 border-t border-stroke">
                        <a
                            href="#"
                            onClick={handleMobileLinkClick}
                            className="block text-center w-full px-5 py-2.5 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-hover transition-colors"
                        >
                            Enquire Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}