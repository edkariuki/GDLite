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
import PanasonicLogo from '../assets/logos/panasonic.png';
import DahuaLogo from '../assets/logos/dahua.png';
import HikvisionLogo from '../assets/logos/hikvision.png';
import YealinkLogo from '../assets/logos/yealink.png';
import TplinkLogo from '../assets/logos/tplink.png';
import TendaLogo from '../assets/logos/tenda.png';

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
        slug: 'intercomms',
        title: 'Intercomms',
        image: NetworkingImg,
        brands: [
            { name: 'Panasonic', logo: PanasonicLogo },
            { name: 'Dahua', logo: DahuaLogo },
            { name: 'Hikvision', logo: HikvisionLogo },
            { name: 'Yealink', logo: YealinkLogo },
            { name: 'Huawei', logo: HuaweiLogo },
        ],
        description:
            'Audio and video intercoms for homes, estates and offices, letting you screen visitors and open doors and gates from a monitor or your phone.',
        subcategories: [],
    },
    {
        slug: 'access-points',
        title: 'Access Points',
        image: NetworkingImg,
        brands: [
            { name: 'Ubiquiti', logo: UbiquitiLogo },
            { name: 'Mikrotik', logo: MicrotikLogo },
            { name: 'TP Link', logo: TplinkLogo },
            { name: 'Cisco', logo: CiscoLogo },
            { name: 'Huawei', logo: HuaweiLogo },
            { name: 'Tenda', logo: TendaLogo },
        ],
        description:
            'Professionally planned Wi-Fi with indoor and outdoor access points, seamless roaming and central management for full coverage everywhere.',
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