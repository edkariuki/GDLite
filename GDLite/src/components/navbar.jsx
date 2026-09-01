import { useState } from 'react'

const megaMenuData = {
    products: [
        { title: 'Analytics', desc: 'Real-time performance tracking', icon: '📊' },
        { title: 'Automation', desc: 'Workflow optimization tools', icon: '⚡' },
        { title: 'Security', desc: 'Enterprise data protection', icon: '🔒' },
        { title: 'Cloud Sync', desc: 'Seamless cross-platform storage', icon: '☁️' },
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
        /* Updated: sticky top-0 ensures it stays pinned to the top on scroll */
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Brand Logo */}
                <a href="#" className="text-2xl font-extrabold tracking-tight">
                    <span className="text-[#EFA24C]">GD</span>
                    <span className="text-[#2547A8]">LITE</span>
                    <span className="text-black">AFRICA</span>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8 h-full">
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>

                    {/* Mega Menu Trigger: Products */}
                    <div
                        className="h-full flex items-center"
                        onMouseEnter={() => setActiveMenu('products')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className="flex items-center gap-1 text-gray-600 hover:text-[#2547A8] font-medium py-2">
                            Products
                            <svg className={`w-4 h-4 transition-transform ${activeMenu === 'products' ? 'rotate-180 text-[#2547A8]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Mega Menu Dropdown */}
                        {activeMenu === 'products' && (
                            <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all">
                                <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">

                                    {/* Category Grid (Left/Center) */}
                                    <div className="col-span-8 grid grid-cols-2 gap-6">
                                        {megaMenuData.products.map((item, idx) => (
                                            <a key={idx} href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                                <span className="text-2xl p-2 bg-gray-100 rounded-lg">{item.icon}</span>
                                                <div>
                                                    <p className="font-bold text-gray-900">{item.title}</p>
                                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    {/* Featured Promo Block (Right) */}
                                    <div className="col-span-4 bg-gradient-to-br from-[#2547A8] to-blue-900 text-white rounded-2xl p-6 flex flex-col justify-between">
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full">New Release</span>
                                            <h4 className="text-xl font-bold mt-3">Platform V2.0 is Live</h4>
                                            <p className="text-sm text-blue-100 mt-2">Explore faster response speeds and updated dashboard layout.</p>
                                        </div>
                                        <a href="#" className="inline-flex items-center text-sm font-semibold hover:underline mt-4">
                                            Read announcement &rarr;
                                        </a>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                </div>

                {/* Action Button */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="px-5 py-2.5 text-sm font-semibold text-white bg-[#2547A8] rounded-lg hover:bg-blue-800 transition-colors">
                        Get Started
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
                    <a href="#" className="block font-medium text-gray-800">Home</a>
                    <p className="font-semibold text-xs text-gray-400 uppercase tracking-wider mt-4">Products</p>
                    <div className="pl-2 space-y-3">
                        {megaMenuData.products.map((item, idx) => (
                            <a key={idx} href="#" className="block text-gray-600 font-medium text-sm">
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <a href="#" className="block font-medium text-gray-800 pt-2">About</a>
                </div>
            )}
        </nav>
    )
}