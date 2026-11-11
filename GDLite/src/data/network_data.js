import InternetProvisioningImg from '../assets/images/internet_provisioning.jpg';
import CableStructureImg from '../assets/images/cable_structure.jpg';
import FiberSplicingImg from '../assets/images/fiber_splicing.jpg';
import NetworkingImg from '../assets/images/networking.jpg';
import DataCenterImg from '../assets/images/data_center.jpg';

// Subcategories are empty until each category page is built.
export const networkCategories = [
    {
        slug: 'internet-provisioning',
        title: 'Internet Provisioning',
        image: InternetProvisioningImg,
        brands: [],
        description:
            'Reliable internet for homes and businesses, from fibre and wireless links to failover connections that keep you online.',
        subcategories: [
            {
                title: 'Linknet Fiber',
                description:
                    'High-speed fibre internet for homes and businesses, with symmetrical upload and download speeds, unlimited data and 24/7 support.',
                url: 'https://linknetkenya.co.ke/',
                highlights: [
                    'Speeds up to 1 Gbps',
                    'Symmetrical upload & download',
                    'Unlimited data',
                    'Home & business plans',
                    'Enterprise plans with dedicated bandwidth',
                    '24/7 support',
                ],
            },
        ],
    },
    {
        slug: 'cable-structures',
        title: 'Cable Structures',
        image: CableStructureImg,
        description:
            'Structured cabling designed, installed, labelled and tested to standard, giving you a tidy and dependable network backbone.',
        brands: [],
        subcategories: [],
    },
    {
        slug: 'fiber-splicing',
        title: 'Fiber Splicing',
        image: FiberSplicingImg,
        description:
            'Precision fusion splicing, termination and OTDR testing for low-loss fibre links between buildings, floors and sites.',
        brands: [],
        subcategories: [],
    },
    {
        slug: 'networking',
        title: 'Networking',
        image: NetworkingImg,
        description:
            'Switches, routers, firewalls and Wi-Fi access points configured for fast, secure data flow and full coverage across your premises.',
        brands: [],
        subcategories: [],
    },
    {
        slug: 'data-centers',
        title: 'Data Centers',
        image: DataCenterImg,
        description:
            'Server rooms and data centres built for uptime: racks, power, cooling, cable management and monitoring under one design.',
        brands: [],
        subcategories: [],
    },
];

export const getNetworkCategoryBySlug = (slug) => networkCategories.find((c) => c.slug === slug);