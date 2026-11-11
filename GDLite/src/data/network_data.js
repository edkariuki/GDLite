import InternetProvisioningImg from '../assets/images/internet_provisioning.jpg';
import CableStructureImg from '../assets/images/cable_structure.jpg';
import FiberSplicingImg from '../assets/images/fiber_splicing.jpg';
import NetworkingImg from '../assets/images/networking.jpg';
import DataCenterImg from '../assets/images/data_center.jpg';
import IbmLogo from '../assets/logos/ibm.png'
import MicrotikLogo from '../assets/logos/microtik.png'
import HuaweiLogo from '../assets/logos/huawei.png'
import SophosLogo from '../assets/logos/sophos.png'
import NiafiberLogo from '../assets/logos/niafiber.png'
import CiscoLogo from '../assets/logos/cisco.png'
import UbiquitiLogo from '../assets/logos/ubiquiti.png';

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
        brands: [],
        description:
            'Structured cabling designed, installed, labelled and tested to standard, giving you a tidy and dependable network backbone.',
        subcategories: [
            {
                title: 'Commercial',
                description:
                    'Structured cabling for supermarkets, shops, offices and warehouses, connecting tills, POS systems, Wi-Fi, CCTV and back-office networks through neat, labelled racks.',
            },
            {
                title: 'Estates',
                description:
                    'Estate-wide cabling backbones that bring internet, intercoms, CCTV and access control to every house or apartment block, planned for easy expansion.',
            },
        ],
    },
    {
        slug: 'fibre-optic-deployment',
        title: 'Fibre Optic Deployment',
        image: FiberSplicingImg,
        brands: [
            { name: 'Niafiber', logo: NiafiberLogo },
            { name: 'Huawei', logo: HuaweiLogo },
            { name: 'Mikrotik', logo: MicrotikLogo },
            { name: 'Sophos', logo: SophosLogo },
            { name: 'IBM', logo: IbmLogo },
        ],
        description:
            'End-to-end fibre installation, from route planning and cable laying to fusion splicing, termination and OTDR testing.',
        subcategories: [],
    },
    {
        slug: 'networking',
        title: 'Networking',
        image: NetworkingImg,
        brands: [
            { name: 'Ubiquiti', logo: UbiquitiLogo },
            { name: 'Mikrotik', logo: MicrotikLogo },
            { name: 'Sophos', logo: SophosLogo },
            { name: 'Cisco', logo: CiscoLogo },
        ],
        description:
            'Switches, routers, firewalls and Wi-Fi access points configured for fast, secure data flow and full coverage across your premises.',
        brands: [],
        subcategories: [
            {
                title: 'Residential',
                tagline: 'Smart Homes',
                description:
                    'Whole-home Wi-Fi and wired networks that keep smart TVs, speakers, cameras, lighting and every family device connected in every room.',
            },
            {
                title: 'Commercial',
                tagline: 'Offices & Businesses',
                description:
                    'Business-grade switches, routers, firewalls and access points for offices, with secure staff and guest networks and room to grow.',
            },
        ],
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