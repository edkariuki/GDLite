import { Fingerprint, Cctv, BellRing, DoorOpen } from 'lucide-react';
import AlarmSystemsImg from '../assets/images/alarm_system.jpg';
import CctvImg from '../assets/images/cctv_img.jpg';
import BiometricAccessImg from '../assets/images/biometric_access.jpg';
import ElectricFenceImg from '../assets/images/electric_fence.jpg';
import AutomaticGateImg from '../assets/images/automatic_gate.jpg';
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
import StafixLogo from '../assets/logos/stafix.png';
import NemtekLogo from '../assets/logos/nemtek.png';
import JvaLogo from '../assets/logos/jva.png';
import CenturionLogo from '../assets/logos/centurion.png';
import NiceLogo from '../assets/logos/nice.png';

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
    {
        slug: 'electric-fence',
        title: 'Electric Fence',
        icon: Fence,
        image: ElectricFenceImg,
        brands: [
            { name: 'Stafix', logo: StafixLogo },
            { name: 'Nemtek', logo: NemtekLogo },
            { name: 'Jva', logo: JvaLogo },
            { name: 'Hikvision', logo: HikvisionLogo },
        ],
        description:
            'High-security electric fencing that deters intruders and wildlife and raises the alarm the moment the perimeter is touched or cut.',
        subcategories: [
            {
                title: 'Residential',
                description:
                    'Wall-top and free-standing electric fencing for homes and compounds, with alarm energizers, warning signs and remote alerts.',
            },
            {
                title: 'Big Estates',
                description:
                    'Zoned perimeter fencing for gated communities and large estates, so guards know exactly which section has been breached.',
            },
            {
                title: 'Big Farms',
                description:
                    'Long-range, solar-powered fencing that keeps livestock in, wildlife and intruders out, and holds up across rough terrain.',
            },
        ],
    },
    {
        slug: 'gate-automation',
        title: 'Gate Automation',
        icon: DoorOpen,
        image: AutomaticGateImg,
        brands: [
            { name: 'Centurion', logo: CenturionLogo },
            { name: 'Nice', logo: NiceLogo },
            { name: 'Hikvision', logo: HikvisionLogo },
        ],
        description:
            'Sliding and swing gate motors, boom barriers and smart controls that make entry faster, safer and fully under your control.',
        subcategories: [
            {
                title: 'Home',
                description:
                    'Quiet sliding and swing gate motors with remotes, keypads and phone control, plus battery backup so the gate still opens during power cuts.',
            },
            {
                title: 'Estates',
                description:
                    'Heavy-duty gates and boom barriers for gated communities, with resident access tags, visitor intercoms and guard-house controls.',
            },
            {
                title: 'Parking Lots',
                description:
                    'Boom barriers, ticketing and number-plate recognition for malls, offices and hospitals, keeping traffic moving and every vehicle recorded.',
            },
        ],
    },
];

export const getSecurityCategoryBySlug = (slug) => securityCategories.find((c) => c.slug === slug);