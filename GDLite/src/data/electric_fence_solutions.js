import ResidentialImg from '../assets/images/electric_fence.jpg';
import EstatesImg from '../assets/images/electricfence.jpg';
import FarmsImg from '../assets/images/electricfence.jpg';   // swap for dedicated images later

export const ELECTRIC_FENCE_SOLUTIONS = [
    {
        slug: 'residential',
        title: 'Residential',
        headline: 'A secure boundary around your home',
        image: ResidentialImg,
        overview:
            'Electric fencing for homes and compounds that turns your wall into an active barrier. A safe but memorable shock and clear warning signs deter most intruders, and any attempt to cut, short or climb the fence triggers a siren and alerts you straight away.',
        features: [
            { title: 'Strong deterrent', text: 'Warning signs and a safe shock stop most intruders before they try.' },
            { title: 'Instant alerts', text: 'A siren and notifications when the fence is cut, shorted or touched.' },
            { title: 'Battery backup', text: 'Stays live during power cuts.' },
            { title: 'Neat installation', text: 'Fitted to your wall or fence line with a clean, tidy finish.' },
        ],
        steps: [
            { title: 'Site survey', text: 'We walk the perimeter and note walls, gates and corners.' },
            { title: 'Design and quote', text: 'Wire runs, energizer and alarm specified, with a clear price.' },
            { title: 'Installation', text: 'Installation, earthing and testing.' },
            { title: 'Training and support', text: 'We show you how to use it and stay available for servicing.' },
        ],
        idealFor: ['Family homes', 'Compounds', 'Apartments', 'Small commercial plots'],
    },
    {
        slug: 'big-estates',
        title: 'Big Estates',
        headline: 'Perimeter protection that scales with your estate',
        image: EstatesImg,
        overview:
            'Electric fence systems for gated communities, large residential estates and commercial premises. Zoned detection shows exactly where an attempt was made, and the system integrates with guard posts, alarms and CCTV.',
        features: [
            { title: 'Zoned monitoring', text: 'Know which section of the fence was triggered.' },
            { title: 'Guard-room integration', text: 'Alerts routed to your control room or guards.' },
            { title: 'Covers long perimeters', text: 'Engineered for long runs and many corners.' },
            { title: 'Works with CCTV and alarms', text: 'A breach can trigger cameras and sirens together.' },
        ],
        steps: [
            { title: 'Perimeter survey', text: 'We assess length, terrain, gates and risk areas.' },
            { title: 'Zone design', text: 'Fence zones, energizers and monitoring planned.' },
            { title: 'Installation', text: 'Installation and commissioning by section.' },
            { title: 'Maintenance', text: 'Regular servicing and vegetation and earthing checks.' },
        ],
        idealFor: ['Gated estates', 'Residential developments', 'Schools and institutions', 'Commercial premises'],
    },
    {
        slug: 'big-farms',
        title: 'Big Farms',
        headline: 'Protect land, livestock and produce across long boundaries',
        image: FarmsImg,
        overview:
            'Electric fencing for farms, ranches and large plots, covering many kilometres of boundary. Solar-powered energizers with battery backup keep the fence live in remote areas, protecting crops, livestock and equipment.',
        features: [
            { title: 'Solar-powered', text: 'Energizers that work off-grid, with battery backup.' },
            { title: 'Many-kilometre coverage', text: 'Designed for long boundaries and rough terrain.' },
            { title: 'Livestock and theft protection', text: 'Keeps animals in and intruders out.' },
            { title: 'Low running costs', text: 'No fuel and minimal power needed.' },
        ],
        steps: [
            { title: 'Land survey', text: 'We walk the boundary and plan routes and corners.' },
            { title: 'Design', text: 'Energizers, solar power and fence layout specified.' },
            { title: 'Installation', text: 'Installation and testing across the boundary.' },
            { title: 'Maintenance', text: 'Servicing and fault-finding support.' },
        ],
        idealFor: ['Farms and ranches', 'Livestock paddocks', 'Large plots', 'Remote sites'],
    },
];

const norm = (s = '') => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export const getElectricFenceSolutionBySlug = (slug) => ELECTRIC_FENCE_SOLUTIONS.find((s) => s.slug === slug);

export const getElectricFenceSlugByTitle = (title) =>
    ELECTRIC_FENCE_SOLUTIONS.find((s) => norm(s.title) === norm(title))?.slug;