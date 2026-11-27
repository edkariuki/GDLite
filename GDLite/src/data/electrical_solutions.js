import CommercialImg from '../assets/images/electrical_design.jpg';
import IndustrialImg from '../assets/images/voltmeter.jpg';
import ResidentialImg from '../assets/images/electrical_design.jpg';   // swap for dedicated images later

export const ELECTRICAL_SOLUTIONS = [
    {
        slug: 'commercial',
        title: 'Commercial',
        headline: 'Electrical systems for offices, retail and institutions',
        image: CommercialImg,
        overview:
            'Load analysis, design and turn-key installation for offices, shops, hotels, schools and hospitals, delivered to EPRA and national safety standards, with the documentation you need for approvals and inspections.',
        features: [
            { title: 'Load analysis and design', text: 'Circuits and protection sized around your actual demand.' },
            { title: 'Compliant installation', text: 'Work that meets EPRA and national standards.' },
            { title: 'Energy-efficient lighting', text: 'Well-planned circuits and lighting that reduce wasted power.' },
            { title: 'Ready for expansion', text: 'Spare capacity so new floors, tenants and equipment can be added safely.' },
        ],
        steps: [
            { title: 'Site survey', text: 'We review drawings and the existing installation.' },
            { title: 'Design', text: 'Load calculations, drawings and a clear bill of quantities.' },
            { title: 'Installation', text: 'Installation by certified technicians.' },
            { title: 'Testing and handover', text: 'Inspection, certification and documentation.' },
        ],
        idealFor: ['Offices', 'Retail and malls', 'Hotels', 'Schools and hospitals'],
    },
    {
        slug: 'industrial',
        title: 'Industrial',
        headline: 'Heavy-duty electrical for factories and plants',
        image: IndustrialImg,
        overview:
            'Power distribution, motor control and protection systems for factories, workshops and processing plants, engineered to handle heavy loads safely and keep production running.',
        features: [
            { title: 'Heavy-load distribution', text: 'Panels and cabling built for motors and machinery.' },
            { title: 'Motor control', text: 'Starters, drives and control panels installed and tested.' },
            { title: 'Robust protection', text: 'Earthing, breakers and surge protection suited to industrial duty.' },
            { title: 'Minimal downtime', text: 'Planned work scheduled around your production.' },
        ],
        steps: [
            { title: 'Load and process review', text: 'We study your machinery and duty cycles.' },
            { title: 'Engineering design', text: 'Distribution, protection and control specified.' },
            { title: 'Installation', text: 'Installation and commissioning on site.' },
            { title: 'Maintenance', text: 'Inspection, testing and ongoing support.' },
        ],
        idealFor: ['Factories', 'Workshops', 'Processing plants', 'Warehouses'],
    },
    {
        slug: 'residential',
        title: 'Residential',
        headline: 'Safe, tidy wiring for homes of every size',
        image: ResidentialImg,
        overview:
            'Complete home wiring for new builds, extensions and renovations, with correctly sized cables, proper earthing and protection that guard against fires, shocks and damaged appliances.',
        features: [
            { title: 'Safe by design', text: 'Right-sized cables, breakers and earthing throughout.' },
            { title: 'Clean workmanship', text: 'Neat routing and clearly labelled distribution boards.' },
            { title: 'Smart lighting and power layout', text: 'Socket and lighting plans that suit how you live.' },
            { title: 'Solar-ready', text: 'Wiring planned so solar and backup power can be added later.' },
        ],
        steps: [
            { title: 'Home visit', text: 'We go through plans or inspect the existing wiring.' },
            { title: 'Design and quote', text: 'Clear layout, materials and cost.' },
            { title: 'Installation', text: 'Careful installation with minimal mess.' },
            { title: 'Testing and handover', text: 'Testing, certification and a walkthrough.' },
        ],
        idealFor: ['New homes', 'Renovations', 'Apartments', 'Rental properties'],
    },
];

export const getElectricalSolutionBySlug = (slug) => ELECTRICAL_SOLUTIONS.find((s) => s.slug === slug);
export const ELECTRICAL_SLUG_BY_TITLE = Object.fromEntries(ELECTRICAL_SOLUTIONS.map((s) => [s.title, s.slug]));