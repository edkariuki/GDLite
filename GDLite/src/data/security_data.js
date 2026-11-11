import { Fingerprint, Cctv, BellRing } from 'lucide-react';
import AlarmSystemsImg from '../assets/images/alarm_system.jpg';
import CctvImg from '../assets/images/cctv_img.jpg';
import FireSuppressionImg from '../assets/images/fire_suppression.jpg';
import BiometricAccessImg from '../assets/images/biometric_access.jpg';
import DahuaLogo from '../assets/logos/dahua.png';
import HikvisionLogo from '../assets/logos/hikvision.png';
import ZKTecoLogo from '../assets/logos/zkteco.png';

export const securityCategories = [
    {
        slug: 'access-control',
        title: 'Access Control',
        icon: Fingerprint,
        image: BiometricAccessImg,
        description:
            'Decide exactly who gets in, where and when — from biometric door access to automated gates and secured perimeters.',
        brands: [],
        subcategories: [
            {
                title: 'Residential',
                description:
                    'Biometric and keypad door locks, automated gates, video intercoms and electric fencing that keep your home and family secure without slowing you down.',
            },
            {
                title: 'Commercial',
                description:
                    'Biometric and card readers, turnstiles, boom barriers and time-and-attendance systems that control and record who enters every part of your premises.',
            },
        ],
    },
    {
        slug: 'cctv',
        title: 'CCTV',
        icon: Cctv,
        image: CctvImg,
        description:
            'Comprehensive surveillance for residential and commercial properties, with clear footage and remote viewing from your phone.',
        brands: [
            { name: 'Dahua', logo: DahuaLogo },
            { name: 'Hikvision', logo: HikvisionLogo },
            { name: 'ZKTeco', logo: ZKTecoLogo },
        ],
        subcategories: [
            {
                title: 'Residential',
                description:
                    'Discreet HD cameras for gates, compounds and entrances, with live viewing and playback on your phone wherever you are.',
            },
            {
                title: 'Commercial',
                description:
                    'Multi-camera systems for shops, offices and warehouses that deter theft, monitor staff areas and protect stock around the clock.',
            },
            {
                title: 'Institutional',
                description:
                    'Large-scale surveillance for schools, hospitals, churches and government facilities, with centralised monitoring and long-term recording.',
            },
            {
                title: 'Solar',
                description:
                    'Solar-powered cameras with battery and 4G connectivity for farms, construction sites and remote areas with no power or internet.',
            },
        ],
    },
    {
        slug: 'alarms',
        title: 'Alarms',
        icon: BellRing,
        image: AlarmSystemsImg,
        description:
            'Intruder and fire alarm systems with real-time alerts, so threats are detected and acted on before they escalate.',
        brands: [],
        subcategories: [
            {
                title: 'Intruder Alarm Systems',
                description:
                    'Advanced alarm systems with real-time alerts and monitoring for enhanced security.',
                image: AlarmSystemsImg,
            },
            {
                title: 'Fire Alarm & Suppression',
                description:
                    'Advanced fire detection and suppression systems for residential and commercial properties, ensuring safety and compliance.',
                image: FireSuppressionImg,
            },
        ],
    },
];

export const getSecurityCategoryBySlug = (slug) => securityCategories.find((c) => c.slug === slug);