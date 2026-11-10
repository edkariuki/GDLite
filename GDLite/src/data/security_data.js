import AlarmSystemsImg from '../assets/images/alarm_system.jpg';
import CctvImg from '../assets/images/cctv_img.jpg';
import FireSuppressionImg from '../assets/images/fire_suppression.jpg';
import ElectricFenceImg from '../assets/images/electric_fence.jpg';
import BiometricAccessImg from '../assets/images/biometric_access.jpg';
import AutomaticGateImg from '../assets/images/automatic_gate.jpg';

export const securityCategories = [
    {
        slug: 'access-control',
        title: 'Access Control',
        image: BiometricAccessImg,
        description:
            'Decide exactly who gets in, where and when — from biometric door access to automated gates and secured perimeters.',
        brands: [],
        subcategories: [
            {
                title: 'Biometric Access Control',
                description:
                    'Advanced access control systems using biometric authentication for secure and convenient entry management.',
                image: BiometricAccessImg,
            },
            {
                title: 'Gate Automation',
                description:
                    'Automated gate systems for residential and commercial properties, providing convenience and security.',
                image: AutomaticGateImg,
            },
            {
                title: 'Electric Fence',
                description:
                    'High-security electric fencing solutions for perimeter protection of homes, farms, and commercial properties.',
                image: ElectricFenceImg,
            },
        ],
    },
    {
        slug: 'cctv',
        title: 'CCTV',
        image: CctvImg,
        description:
            'Comprehensive surveillance for residential and commercial properties, with clear footage and remote viewing from your phone.',
        brands: [],
        subcategories: [],
    },
    {
        slug: 'alarms',
        title: 'Alarms',
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