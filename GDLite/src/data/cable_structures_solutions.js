import CommercialImg from '../assets/images/cable_mgt_feature.jpeg';
import EstatesImg from '../assets/images/structured_cabling_hero.jpg';   // swap for dedicated images later

export const CABLE_STRUCTURES_SOLUTIONS = [
    {
        slug: 'commercial',
        title: 'Commercial',
        headline: 'Neat, organised cabling for offices, shops and facilities',
        image: CommercialImg,
        overview:
            'Cable trays, trunking and ladders that route and protect your ICT cabling across offices, retail spaces and industrial sites. Every run is tidy, supported and labelled, so your infrastructure is safe, easy to maintain and ready to grow.',
        features: [
            { title: 'Trays, trunking and ladders', text: 'The right support system for each route and load.' },
            { title: 'Neat and labelled', text: 'Cables routed, tied and labelled at both ends.' },
            { title: 'Protected installations', text: 'Cables kept clear of damage, moisture and tangles.' },
            { title: 'Room to expand', text: 'Spare capacity planned in for new tills, cameras and desks.' },
        ],
        steps: [
            { title: 'Site survey', text: 'We review the building, routes and equipment locations.' },
            { title: 'Design', text: 'Containment routes and cable capacity planned.' },
            { title: 'Installation', text: 'Installation and cable dressing to standard.' },
            { title: 'Labelling and handover', text: 'Documentation and testing before we sign off.' },
        ],
        idealFor: ['Offices', 'Retail and shops', 'Warehouses and factories', 'Banks and institutions'],
    },
    {
        slug: 'estates',
        title: 'Estates',
        headline: 'Durable cable infrastructure across entire developments',
        image: EstatesImg,
        overview:
            'Cable management and containment for residential estates and large developments, with durable routes for the data, Wi-Fi, CCTV and access control that run across buildings and common areas.',
        features: [
            { title: 'Weather-ready containment', text: 'Durable trays and conduit for outdoor and exposed routes.' },
            { title: 'One backbone for everything', text: 'Data, Wi-Fi, CCTV and access control on shared infrastructure.' },
            { title: 'Multi-building layouts', text: 'Routes planned between blocks, gates and utility rooms.' },
            { title: 'Easy maintenance', text: 'Clear labelling so faults are found in minutes.' },
        ],
        steps: [
            { title: 'Estate survey', text: 'We map buildings, trenches and distribution points.' },
            { title: 'Design', text: 'Containment, backbone routes and capacity specified.' },
            { title: 'Installation', text: 'Installation in phases to suit construction and occupancy.' },
            { title: 'Documentation', text: 'As-built records and labelling for future maintenance.' },
        ],
        idealFor: ['Residential estates', 'Gated communities', 'Mixed-use developments', 'Campuses'],
    },
];

const norm = (s = '') => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export const getCableStructuresSolutionBySlug = (slug) => CABLE_STRUCTURES_SOLUTIONS.find((s) => s.slug === slug);

export const getCableStructuresSlugByTitle = (title) =>
    CABLE_STRUCTURES_SOLUTIONS.find((s) => norm(s.title) === norm(title))?.slug;