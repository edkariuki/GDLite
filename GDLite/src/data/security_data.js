import { Fingerprint, Cctv, BellRing } from 'lucide-react';
import AlarmSystemsImg from '../assets/images/alarm_system.jpg';
import CctvImg from '../assets/images/cctv_img.jpg';
import FireSuppressionImg from '../assets/images/fire_suppression.jpg';
import BiometricAccessImg from '../assets/images/biometric_access.jpg';
import DahuaLogo from '../assets/logos/dahua.png';
import HikvisionLogo from '../assets/logos/hikvision.png';
import ZKTecoLogo from '../assets/logos/zkteco.png';
import UniviewLogo from '../assets/logos/uniview.png';
import UbiquitiLogo from '../assets/logos/ubiquiti.png';
import SonyLogo from '../assets/logos/sony.png';
import AxisLogo from '../assets/logos/axis.png';
import VitronicLogo from '../assets/logos/vitronic.png';
import RingLogo from '../assets/logos/ring.png';
import SecolinkLogo from '../assets/logos/secolink.png';
import LightsysLogo from '../assets/logos/lightsys.png';
import IdsLogo from '../assets/logos/ids.png';

export const securityCategories = [
    {
        slug: 'access-control',
        title: 'Access Control',
        icon: Fingerprint,
        image: BiometricAccessImg,
        brands: [
            { name: 'Dahua', logo: DahuaLogo },
            { name: 'Hikvision', logo: HikvisionLogo },
            { name: 'ZKTeco', logo: ZKTecoLogo },
        ],
        description:
            'Decide exactly who gets in, where and when — from biometric door access to automated gates and secured perimeters.',
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
        brands: [
            { name: 'Dahua', logo: DahuaLogo },
            { name: 'Hikvision', logo: HikvisionLogo },
            { name: 'ZKTeco', logo: ZKTecoLogo },
            { name: 'Uniview', logo: UniviewLogo },
            { name: 'Ubiquiti', logo: UbiquitiLogo },
            { name: 'Sony', logo: SonyLogo },
            { name: 'Axis', logo: AxisLogo },
            { name: 'Vitronic', logo: VitronicLogo },
        ],
        description:
            'Comprehensive surveillance for residential and commercial properties, with clear footage and remote viewing from your phone.',
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
        brands: [
            { name: 'Ring', logo: RingLogo },
            { name: 'Secolink', logo: SecolinkLogo },
            { name: 'Lightsys', logo: LightsysLogo },
            { name: 'IDS', logo: IdsLogo },
        ],
        description:
            'Intruder and fire alarm systems with real-time alerts, so threats are detected and acted on before they escalate.',
        subcategories: [
            {
                title: 'Residential',
                description:
                    'Intruder alarms, door and window sensors, panic buttons and smoke detectors that alert you and your security provider the moment something is wrong at home.',
            },
            {
                title: 'Commercial',
                description:
                    'Intruder and fire alarm systems for offices, warehouses and retail, plus specialist protection for critical rooms such as server rooms, data centres and electrical rooms, including gas-based fire suppression. All alerts can feed into your command centre for round-the-clock monitoring and rapid response.',
            },
        ],
    },
];

export const getSecurityCategoryBySlug = (slug) => securityCategories.find((c) => c.slug === slug);