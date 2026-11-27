import { Fingerprint, Cctv, BellRing, DoorOpen, Fence } from 'lucide-react';
import AlarmSystemsImg from '../assets/images/alarm_system.jpg';
import CctvImg from '../assets/images/cctv_img.jpg';
import ResidentialCctv from '../assets/images/residential_cctv.jpg';
import CommercialCctv from '../assets/images/commercial_cctv.jpg';
import TrafficCctv from '../assets/images/traffic_cctv.jpg';
import FarmCctv from '../assets/images/farm_cctv.png';
import SiteCctv from '../assets/images/site_cctv.jpg';
import VehicleCctv from '../assets/images/vehicle_cctv.jpg';
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
            },
            {
                title: 'Workplace',
            },
            {
                title: 'Commercial',
            },
            {
                title: 'Secure rooms',
            },
        ],
    },
    {
        slug: 'cctv',
        title: 'CCTV',
        icon: Cctv,
        image: CctvImg,
        description:
            'Comprehensive surveillance for homes, businesses, farms, sites and vehicles, with clear footage and remote viewing from your phone.',
        brands: [],
        subcategories: [
            {
                slug: 'residential',
                title: 'Residential CCTV',
                tagline: 'Protect your home and loved ones with smart surveillance and remote monitoring, wherever you are.',
                cover: ResidentialCctv,
                gallery: [
                    { src: CctvImg, caption: 'Homestead fitted with CCTV' },
                    { src: CctvImg, caption: 'Homestead fitted with CCTV' },
                    { src: CctvImg, caption: 'Homestead fitted with CCTV' },
                    { src: CctvImg, caption: 'Viewing home cameras on your phone' },
                ],
            },
            {
                slug: 'commercial',
                title: 'Commercial CCTV',
                tagline: 'Safeguard your business, monitor daily operations and maintain visibility across your premises.',
                cover: CommercialCctv,
                gallery: [
                    { src: CctvImg, caption: 'Factory CCTV' },
                    { src: CctvImg, caption: 'Retail CCTV' },
                    { src: CctvImg, caption: 'Go-down CCTV' },
                    { src: CctvImg, caption: 'Office CCTV' },
                    { src: CctvImg, caption: 'Command & monitoring station' },
                ],
            },
            {
                slug: 'outdoor-traffic',
                title: 'Outdoor & Traffic CCTV',
                tagline:
                    'From highway surveillance to fleet and logistics monitoring, we deliver intelligent traffic solutions that improve visibility, track vehicle movement and support safer, more efficient operations.',
                cover: TrafficCctv,
                gallery: [
                    { src: CctvImg, caption: 'Highway CCTV' },
                    { src: CctvImg, caption: 'Depot & yard CCTV' },
                    { src: CctvImg, caption: 'Stadium CCTV' },
                ],
            },
            {
                slug: 'farm',
                title: 'Farm CCTV',
                tagline: 'Protect livestock, crops, equipment and farm operations with surveillance solutions tailored to agricultural environments.',
                cover: FarmCctv,
                gallery: [
                    { src: CctvImg, caption: 'Farm surveillance' },
                    { src: CctvImg, caption: 'Farm surveillance' },
                    { src: CctvImg, caption: 'Farm surveillance' },
                ],
            },
            {
                slug: 'site',
                title: 'Site CCTV',
                tagline: 'Secure construction sites and project locations against theft, vandalism and unauthorised access.',
                cover: SiteCctv,
                gallery: [{ src: CctvImg, caption: 'Construction site CCTV' }],
            },
            {
                slug: 'vehicle',
                title: 'Vehicle CCTV',
                tagline: 'Enhance vehicle security with onboard surveillance that helps monitor activities, protect assets and improve accountability.',
                cover: VehicleCctv,
                gallery: [{ src: CctvImg, caption: 'Onboard vehicle CCTV' }],
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
            {
                title: 'Critical rooms',
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