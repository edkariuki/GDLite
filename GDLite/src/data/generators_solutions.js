import HomesImg from '../assets/images/backup_generator.jpg';
import BusinessImg from '../assets/images/cat_generator.jpg';
import FarmsImg from '../assets/images/generator_hero.png';

export const GENERATOR_SOLUTIONS = [
    {
        slug: 'homes-estates',
        title: 'Homes & Estates',
        headline: 'Quiet, dependable backup for your household',
        image: HomesImg,
        overview:
            'Standby generators keep lights, water pumps, security systems and appliances running through outages. With an automatic transfer switch, power returns within seconds and nobody needs to lift a finger.',
        features: [
            { title: 'Automatic switchover', text: 'An ATS starts the generator and takes over as soon as the grid fails.' },
            { title: 'Quiet operation', text: 'Canopied, low-noise units suited to residential settings.' },
            { title: 'Fuel-efficient', text: 'Sized to your load so you are not burning more fuel than you need.' },
            { title: 'Whole-home coverage', text: 'Power essential circuits or the entire property.' },
        ],
        steps: [
            { title: 'Load assessment', text: 'We calculate what you need to keep running.' },
            { title: 'Generator selection', text: 'The right capacity, canopy and fuel type.' },
            { title: 'Installation', text: 'Safe siting, cabling, ATS and earthing.' },
            { title: 'Servicing', text: 'Scheduled maintenance to keep it ready.' },
        ],
        idealFor: ['Family homes', 'Gated estates', 'Apartments', 'Homes with borehole pumps'],
    },
    {
        slug: 'businesses-institutions',
        title: 'Businesses & Institutions',
        headline: 'Keep operations running when the grid goes down',
        image: BusinessImg,
        overview:
            'Backup generators for offices, hotels, hospitals, schools and retail, sized to carry lifts, cold rooms and critical systems without interruption, so outages never cost you stock, staff time or sales.',
        features: [
            { title: 'Sized for critical loads', text: 'Capacity planned around lifts, cold rooms, servers and more.' },
            { title: 'ATS and synchronisation', text: 'Seamless changeover and multi-unit configurations.' },
            { title: 'Long runtime', text: 'Extended operation for long outages with proper fuel storage.' },
            { title: 'Maintenance contracts', text: 'Planned servicing to avoid failures when you need it most.' },
        ],
        steps: [
            { title: 'Site survey', text: 'We review your electrical layout and critical loads.' },
            { title: 'System design', text: 'Generator, ATS and fuel setup specified.' },
            { title: 'Installation', text: 'Installation and commissioning with minimal disruption.' },
            { title: 'Maintenance', text: 'Scheduled servicing and emergency repair.' },
        ],
        idealFor: ['Hotels', 'Hospitals and clinics', 'Schools', 'Petrol stations and retail'],
    },
    {
        slug: 'farms-industry',
        title: 'Farms & Industry',
        headline: 'Heavy-duty power for demanding operations',
        image: FarmsImg,
        overview:
            'Heavy-duty generators for factories, irrigation, construction sites and remote operations that need dependable power all day, handling motors, pumps and machinery that batteries alone cannot.',
        features: [
            { title: 'Handles heavy loads', text: 'Motors, pumps, welding gear and production lines.' },
            { title: 'Built for long hours', text: 'Industrial-grade engines rated for continuous duty.' },
            { title: 'Works off-grid', text: 'Full power at sites the grid does not reach.' },
            { title: 'Scalable', text: 'Add units as your operation grows.' },
        ],
        steps: [
            { title: 'Requirements review', text: 'Load profile, duty cycle and site conditions.' },
            { title: 'Design', text: 'Generator size, fuel storage and protection specified.' },
            { title: 'Installation', text: 'Installation and testing on site.' },
            { title: 'Maintenance', text: 'Servicing, repair and parts support.' },
        ],
        idealFor: ['Factories', 'Irrigation and farms', 'Construction sites', 'Remote operations'],
    },
];

export const getGeneratorSolutionBySlug = (slug) => GENERATOR_SOLUTIONS.find((s) => s.slug === slug);

export const GENERATOR_SERVICES = [
    'New Generator Supply & Installation',
    'Changeover / ATS Installation',
    'Generator Servicing & Repair',
];