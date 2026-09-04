import { useState } from 'react'
import { Zap, Lock, Radio, ChevronDown, X, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const megaMenuData = {
    products: [
        { title: 'Power Systems', desc: 'Modern solar and backup power solutions', icon: Zap, linkUrl: '/power-systems' },
        { title: 'Security Systems', desc: 'Secure your property with our advanced systems', icon: Lock },
        { title: 'Network Systems', desc: 'Infrastructure for seamless connectivity', icon: Radio },
    ],
    resources: [
        { title: 'Documentation', desc: 'Guides, API references, and SDKs' },
        { title: 'Case Studies', desc: 'See how companies scale with us' },
        { title: 'Community', desc: 'Join our developer forums and events' },
        { title: 'Blog', desc: 'Latest updates and industry trends' },
    ],
}

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null)
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-surface-card border-b border-stroke shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <a href="/" className="text-2xl font-extrabold tracking-tight">
                    <span className="text-brand-accent">GD</span>
                    <span className="text-brand">LITE</span>
                    <span className="text-content-primary">AFRICA</span>
                </a>

                <div className="hidden md:flex items-center space-x-8 h-full">
                    <a href="/" className="text-content-body hover:text-content-primary font-medium">Home</a>

                    <div
                        className="h-full flex items-center"
                        onMouseEnter={() => setActiveMenu('products')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className="flex items-center gap-1 text-content-body hover:text-brand font-medium py-2">
                            Products
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-brand' : ''
                                    }`}
                            />
                        </button>

                        {activeMenu === 'products' && (
                            <div className="absolute top-20 left-0 w-full bg-surface-card border-b border-stroke shadow-xl transition-all">
                                <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">

                                    <div className="col-span-8 grid grid-cols-2 gap-6">
                                        {megaMenuData.products.map((item, idx) => {
                                            const IconComponent = item.icon;
                                            const isReactComponent = typeof IconComponent !== 'string';

                                            return (
                                                <a key={idx} href={item.linkUrl} className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-light transition-colors">
                                                    <span className="text-2xl p-2 bg-stroke-light rounded-lg flex items-center justify-center min-w-[40px] min-h-[40px]">
                                                        {isReactComponent ? (
                                                            <IconComponent className="w-5 h-5 text-content-body" />
                                                        ) : (
                                                            <span>{item.icon}</span>
                                                        )}
                                                    </span>
                                                    <div>
                                                        <p className="font-bold text-content-primary">{item.title}</p>
                                                        <p className="text-sm text-content-secondary">{item.desc}</p>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
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
                    <a href="#" className="block font-medium text-content-primary">Home</a>
                    <p className="font-semibold text-xs text-content-muted uppercase tracking-wider mt-4">Products</p>
                    <div className="pl-2 space-y-3">
                        {megaMenuData.products.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.linkUrl}
                                className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-light transition-colors"
                            >
                            </Link>
                        ))}
                    </div>
                    <a href="#" className="block font-medium text-content-primary pt-2">About</a>
                </div>
            )}
        </nav>
    )
}