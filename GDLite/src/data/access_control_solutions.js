import ResidentialImg from '../assets/images/smart_lock.jpg';
import WorkplaceImg from '../assets/images/office_access.jpg';
import CommercialImg from '../assets/images/card_access.jpg';
import SecureRoomsImg from '../assets/images/biometric_access.jpg';

export const ACCESS_CONTROL_SOLUTIONS = [
    {
        slug: 'residential',
        title: 'Residential Access Control',
        headline: 'Know who comes and goes from your home',
        image: ResidentialImg,
        overview:
            'Smart locks and access solutions that give you greater control over who enters your home, so your family and property stay safer without the hassle of copied or lost keys.',
        features: [
            { title: 'Keyless entry', text: 'Fingerprints, PIN codes or cards instead of keys.' },
            { title: 'Instant access changes', text: 'Grant or revoke access for family, staff or visitors in seconds.' },
            { title: 'Entry records', text: 'See who came in and when.' },
            { title: 'Works with your gate and CCTV', text: 'Integrates with other security on the property.' },
        ],
        steps: [
            { title: 'Site visit', text: 'We look at your doors, gates and how you use them.' },
            { title: 'Recommendation', text: 'The right lock or reader for each entry point.' },
            { title: 'Installation', text: 'Neat installation and testing.' },
            { title: 'Training', text: 'We show you how to manage users and access.' },
        ],
        idealFor: ['Family homes', 'Gated estates', 'Apartments', 'Home offices'],
    },
    {
        slug: 'workplace-office',
        title: 'Workplace & Office Access Control',
        headline: 'Controlled entry and accurate staff records',
        image: WorkplaceImg,
        overview:
            'Manage employee time logs and visitor access with ease, protect sensitive work areas and improve workplace security through reliable controlled-entry systems.',
        features: [
            { title: 'Time and attendance', text: 'Entry logs double as accurate attendance records.' },
            { title: 'Visitor management', text: 'Issue temporary access and track who is on site.' },
            { title: 'Zone-based permissions', text: 'Different staff, different doors and different hours.' },
            { title: 'Central management', text: 'Control multiple doors and sites from one system.' },
        ],
        steps: [
            { title: 'Access audit', text: 'We map your doors, areas and who needs access to what.' },
            { title: 'System design', text: 'Readers, controllers and software specified.' },
            { title: 'Installation', text: 'Installation and configuration with minimal disruption.' },
            { title: 'Support', text: 'Training, user changes and maintenance.' },
        ],
        idealFor: ['Offices', 'Co-working spaces', 'Schools and colleges', 'Clinics'],
    },
    {
        slug: 'commercial',
        title: 'Commercial Access Control',
        headline: 'Protect your business, staff and assets',
        image: CommercialImg,
        overview:
            'Intelligent access solutions that help prevent unauthorised entry and give you greater control over your premises, from shops and warehouses to hotels and multi-tenant buildings.',
        features: [
            { title: 'Biometric and card readers', text: 'Fingerprint, card and keypad options for every entry point.' },
            { title: 'Anti-tailgating options', text: 'Turnstiles and controlled doors for busy entrances.' },
            { title: 'Alarm and CCTV integration', text: 'A forced door can trigger an alert and pull up the camera.' },
            { title: 'Scalable', text: 'Start with one door and add more as you grow.' },
        ],
        steps: [
            { title: 'Security review', text: 'We assess entry points, risks and traffic.' },
            { title: 'Design', text: 'Readers, locks and software matched to your premises.' },
            { title: 'Installation', text: 'Installation, cabling and commissioning.' },
            { title: 'Maintenance', text: 'Servicing and support.' },
        ],
        idealFor: ['Retail and warehouses', 'Hotels', 'Banks and SACCOs', 'Multi-tenant buildings'],
    },
    {
        slug: 'secure-rooms',
        title: 'Secure Rooms & Server Rooms',
        headline: 'Only authorised people get through the door',
        image: SecureRoomsImg,
        overview:
            'Restricted access systems that protect critical infrastructure and sensitive equipment, such as IT and lab equipment, so only authorised personnel can enter your secure rooms.',
        features: [
            { title: 'Multi-factor entry', text: 'Combine biometrics, cards and PINs for sensitive areas.' },
            { title: 'Detailed audit trail', text: 'Every entry logged by name and time.' },
            { title: 'Door-forced and held-open alerts', text: 'Be notified when something is wrong.' },
            { title: 'Fail-safe options', text: 'Locks that behave correctly during power cuts and emergencies.' },
        ],
        steps: [
            { title: 'Requirements review', text: 'We identify the rooms, users and security level needed.' },
            { title: 'Design', text: 'Authentication method and hardware specified.' },
            { title: 'Installation', text: 'Installation and testing.' },
            { title: 'Support', text: 'Access reviews and maintenance.' },
        ],
        idealFor: ['Server and data rooms', 'Laboratories', 'Records and archive rooms', 'Cash and equipment stores'],
    },
];

export const getAccessControlSolutionBySlug = (slug) => ACCESS_CONTROL_SOLUTIONS.find((s) => s.slug === slug);