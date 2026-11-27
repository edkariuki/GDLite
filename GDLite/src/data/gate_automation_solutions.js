import HomeImg from '../assets/images/automatic_gate.jpg';
import EstatesImg from '../assets/images/gate_hero.jpg';
import ParkingImg from '../assets/images/gate_hero.jpg';   // swap for dedicated images later

export const GATE_AUTOMATION_SOLUTIONS = [
    {
        slug: 'home',
        title: 'Home',
        headline: 'Arrive home without leaving your car',
        image: HomeImg,
        overview:
            'Automated swing and sliding gates for homes, operated with a remote, keypad or phone. Less time waiting at an open gate means safer arrivals, and a gate that closes behind you keeps tailgating intruders out.',
        features: [
            { title: 'Remote, keypad and phone control', text: 'Open the gate from your car or from anywhere.' },
            { title: 'Safer arrivals', text: 'No getting out at night or waiting at an open gate.' },
            { title: 'Battery and solar backup', text: 'Keeps working through power cuts.' },
            { title: 'Safety sensors', text: 'Photocells and obstruction detection protect people and vehicles.' },
        ],
        steps: [
            { title: 'Site visit', text: 'We check your gate type, space, slope and power supply.' },
            { title: 'Motor selection', text: 'The right motor for your gate weight and usage.' },
            { title: 'Installation', text: 'Installation, safety sensors and testing.' },
            { title: 'Training and support', text: 'We show you how to use it and stay available for servicing.' },
        ],
        idealFor: ['Family homes', 'Compounds', 'Villas', 'Existing manual gates'],
    },
    {
        slug: 'estates',
        title: 'Estates',
        headline: 'Controlled vehicle access for residents and visitors',
        image: EstatesImg,
        overview:
            'Gate automation for residential estates and commercial premises, with tags, codes and automatic number plate recognition (ANPR). Decide which vehicles get in and keep a log of every entry.',
        features: [
            { title: 'Resident tags and codes', text: 'Issue and revoke access in seconds.' },
            { title: 'Visitor management', text: 'Temporary codes and guard-post integration.' },
            { title: 'ANPR options', text: 'Number-plate recognition for hands-free entry and records.' },
            { title: 'Entry logs', text: 'A record of who came in and when.' },
        ],
        steps: [
            { title: 'Traffic and layout survey', text: 'We review lanes, queues and guard-post positions.' },
            { title: 'System design', text: 'Barriers, gates, readers and software specified.' },
            { title: 'Installation', text: 'Installation and commissioning with minimal disruption.' },
            { title: 'Maintenance', text: 'Servicing and user management support.' },
        ],
        idealFor: ['Gated estates', 'Apartment complexes', 'Commercial premises', 'Institutions'],
    },
    {
        slug: 'parking-lots',
        title: 'Parking Lots',
        headline: 'Smooth, controlled flow for busy car parks',
        image: ParkingImg,
        overview:
            'Boom barriers and gate systems for parking lots and car parks, built for high-frequency use. Control who enters, manage capacity and reduce queues with tags, tickets or number-plate recognition.',
        features: [
            { title: 'Fast boom barriers', text: 'Built for heavy, repeated daily use.' },
            { title: 'Ticket, tag or ANPR entry', text: 'Choose the method that fits your traffic.' },
            { title: 'Capacity control', text: 'Manage how many vehicles are on site.' },
            { title: 'Entry and exit records', text: 'A log for security and billing.' },
        ],
        steps: [
            { title: 'Site assessment', text: 'We look at lanes, traffic volume and peak times.' },
            { title: 'Design', text: 'Barriers, readers and controls specified.' },
            { title: 'Installation', text: 'Installation, loops and commissioning.' },
            { title: 'Maintenance', text: 'Scheduled servicing and fast repair support.' },
        ],
        idealFor: ['Office parks', 'Malls and retail', 'Hospitals and schools', 'Hotels'],
    },
];

const norm = (s = '') => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export const getGateAutomationSolutionBySlug = (slug) => GATE_AUTOMATION_SOLUTIONS.find((s) => s.slug === slug);

export const getGateAutomationSlugByTitle = (title) =>
    GATE_AUTOMATION_SOLUTIONS.find((s) => norm(s.title) === norm(title))?.slug;