import { Fingerprint, Cctv, BellRing } from 'lucide-react';
import AlarmSystemsImg from '../assets/images/alarm_system.jpg';
import CctvImg from '../assets/images/cctv_img.jpg';
import FireSuppressionImg from '../assets/images/fire_suppression.jpg';
import BiometricAccessImg from '../assets/images/biometric_access.jpg';

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
        brands: [],
        subcategories: [],
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