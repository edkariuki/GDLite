import { useState } from 'react'
import { Zap, Lock, Radio, ChevronDown } from 'lucide-react'

const megaMenuData = {
    products: [
        { title: 'Power Systems', desc: 'Modern solar and backup power solutions', icon: Zap, linkUrl: '../solutions/power-systems' },
        { title: 'Security Systems', desc: 'Secure your property with our advanced systems', icon: Lock },
        { title: 'Network Systems', desc: 'Infrastucture for seamless connectivity', icon: Radio },
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
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <a href="/" className="text-2xl font-extrabold tracking-tight">
                    <span className="text-[#EFA24C]">GD</span>
                    <span className="text-[#2547A8]">LITE</span>
                    <span className="text-black">AFRICA</span>
                </a>

                <div className="hidden md:flex items-center space-x-8 h-full">
                    <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>

                    <div
                        className="h-full flex items-center"
                        onMouseEnter={() => setActiveMenu('products')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className="flex items-center gap-1 text-gray-600 hover:text-[#2547A8] font-medium py-2">
                            Products
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-[#2547A8]' : ''
                                    }`}
                            />
                        </button>

                        {activeMenu === 'products' && (
                            <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all">
                                <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">

                                    <div className="col-span-8 grid grid-cols-2 gap-6">
                                        {megaMenuData.products.map((item, idx) => {
                                            const IconComponent = item.icon;
                                            const isReactComponent = typeof IconComponent !== 'string';

                                            return (
                                                <a key={idx} href={item.linkUrl} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                                    <span className="text-2xl p-2 bg-gray-100 rounded-lg flex items-center justify-center min-w-[40px] min-h-[40px]">
                                                        {isReactComponent ? (
                                                            <IconComponent className="w-5 h-5 text-gray-700" />
                                                        ) : (
                                                            <span>{item.icon}</span>
                                                        )}
                                                    </span>
                                                    <div>
                                                        <p className="font-bold text-gray-900">{item.title}</p>
                                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="px-5 py-2.5 text-sm font-semibold text-white bg-[#2547A8] rounded-lg hover:bg-blue-800 transition-colors">
                        Enquire Now
                    </a>
                </div>

                <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-2xl z-50">
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