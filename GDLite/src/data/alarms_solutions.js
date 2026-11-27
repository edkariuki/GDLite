import ResidentialImg from '../assets/images/motion_sensor.jpg';
import CommercialImg from '../assets/images/alarm_lights.jpg';
import CriticalRoomsImg from '../assets/images/alarm_lights.jpg';

export const ALARMS_SOLUTIONS = [
    {
        slug: 'residential',
        title: 'Residential',
        headline: 'Know the moment something is wrong at home',
        image: ResidentialImg,
        overview:
            'Intruder alarm systems for homes that detect unauthorised entry and alert you immediately, with sirens, phone notifications and optional response from your security provider, so your family and belongings stay protected day and night.',
        features: [
            { title: 'Instant alerts', text: 'A loud siren and phone notifications the moment a sensor is triggered.' },
            { title: 'Door, window and motion sensing', text: 'Coverage matched to how your home is laid out.' },
            { title: 'Smoke detection options', text: 'Add early fire detection to the same system.' },
            { title: 'Arm and disarm from your phone', text: 'Control the system remotely, wherever you are.' },
        ],
        steps: [
            { title: 'Home assessment', text: 'We walk through the property and identify entry points and risks.' },
            { title: 'System design', text: 'Sensors, keypads and sirens chosen for your home.' },
            { title: 'Installation', text: 'Neat installation, testing and set-up of alerts.' },
            { title: 'Training and support', text: 'We show you how to use it and stay available for servicing.' },
        ],
        idealFor: ['Family homes', 'Gated estates', 'Apartments', 'Holiday homes'],
    },
    {
        slug: 'commercial',
        title: 'Commercial',
        headline: 'Round-the-clock protection for your premises',
        image: CommercialImg,
        overview:
            'Intruder and fire alarm systems for offices, shops, warehouses and critical facilities. Zoned detection, monitoring options and early fire detection protect your people, stock and equipment, even when no one is on site.',
        features: [
            { title: 'Zoned detection', text: 'Know exactly which area has been triggered.' },
            { title: 'Fire detection and suppression', text: 'Smoke and heat detectors, with suppression for critical rooms.' },
            { title: 'Monitoring options', text: 'Report to a command centre so someone is always ready to respond.' },
            { title: 'Scales with your premises', text: 'Add zones and devices as you expand.' },
        ],
        steps: [
            { title: 'Risk assessment', text: 'We review your premises, assets and the risks you face.' },
            { title: 'Design', text: 'Detection zones, devices and reporting specified.' },
            { title: 'Installation', text: 'Installation and commissioning with minimal disruption.' },
            { title: 'Maintenance', text: 'Servicing, testing and ongoing support.' },
        ],
        idealFor: ['Offices', 'Shops and retail', 'Warehouses', 'Schools and clinics'],
    },
    {
        slug: 'critical-rooms',
        title: 'Critical rooms',
        headline: 'Detect and suppress before damage spreads',
        image: CriticalRoomsImg,
        overview:
            'Early fire detection and suppression for server rooms, labs, control rooms and other spaces where equipment and data cannot be replaced easily. Smoke and heat detection catches problems early, and suppression systems act before a small fault becomes a major loss.',
        features: [
            { title: 'Early smoke and heat detection', text: 'Sensitive detectors that catch problems at the earliest stage.' },
            { title: 'Clean-agent suppression', text: 'Suppression that protects equipment without water damage.' },
            { title: 'Monitoring and alerts', text: 'Alarms reported to a command centre or straight to your team.' },
            { title: 'Integrated with your building', text: 'Works with access control, ventilation and power shutdown.' },
        ],
        steps: [
            { title: 'Room assessment', text: 'We review the space, equipment and fire risks.' },
            { title: 'System design', text: 'Detection and suppression specified for the room.' },
            { title: 'Installation', text: 'Installation, commissioning and discharge testing.' },
            { title: 'Maintenance', text: 'Scheduled inspections and servicing to keep it ready.' },
        ],
        idealFor: ['Server and data rooms', 'Laboratories', 'Control and comms rooms', 'Archives and records'],
    },
];

export const getAlarmsSolutionBySlug = (slug) => ALARMS_SOLUTIONS.find((s) => s.slug === slug);
export const ALARMS_SLUG_BY_TITLE = Object.fromEntries(ALARMS_SOLUTIONS.map((s) => [s.title, s.slug]));