import HomesImg from '../assets/images/commercial_ups.jpeg';
import DataRoomImg from '../assets/images/ups_hero.png';
import CriticalImg from '../assets/images/ups_hospital.jpeg';

export const UPS_SOLUTIONS = [
    {
        slug: 'homes-offices',
        title: 'Homes & Offices',
        headline: 'Keep work and sales running through every outage',
        image: HomesImg,
        overview:
            'A UPS keeps computers, routers, CCTV and POS systems running when the grid drops, and protects them from the surges and brownouts that damage everyday electronics.',
        features: [
            { title: 'Instant switchover', text: 'Equipment stays on when power fails, with no reboot and no lost work.' },
            { title: 'Surge protection', text: 'Shields devices from spikes and voltage dips.' },
            { title: 'Quiet, compact units', text: 'Designed to sit on a desk or in a small comms cabinet.' },
            { title: 'Right-sized runtime', text: 'Battery capacity matched to how long you need to stay up.' },
        ],
        steps: [
            { title: 'Load check', text: 'We list the equipment you need to protect.' },
            { title: 'Sizing', text: 'We recommend the right capacity and runtime.' },
            { title: 'Installation', text: 'Clean installation and testing on site.' },
            { title: 'Support', text: 'Battery replacement and servicing when needed.' },
        ],
        idealFor: ['Home offices', 'Small businesses', 'Shops and POS', 'CCTV and routers'],
    },
    {
        slug: 'data-rooms',
        title: 'Servers & Data Rooms',
        headline: 'Clean, continuous power for your core infrastructure',
        image: DataRoomImg,
        overview:
            'Online double-conversion UPS systems deliver clean power with zero transfer time, protecting servers, storage and network equipment from every kind of power disturbance.',
        features: [
            { title: 'Zero transfer time', text: 'Double-conversion design means no break in supply.' },
            { title: 'Voltage regulation', text: 'Stable output regardless of grid fluctuations.' },
            { title: 'Scalable capacity', text: 'Modular systems that grow with your racks.' },
            { title: 'Remote monitoring', text: 'Track load, battery health and alarms over the network.' },
        ],
        steps: [
            { title: 'Power audit', text: 'We assess your rack load and growth plans.' },
            { title: 'System design', text: 'Capacity, redundancy and runtime are specified.' },
            { title: 'Installation', text: 'Installation, cabling and commissioning.' },
            { title: 'Maintenance', text: 'Scheduled servicing and battery checks.' },
        ],
        idealFor: ['Server rooms', 'Data centres', 'Banks and SACCOs', 'Network hubs'],
    },
    {
        slug: 'critical-equipment',
        title: 'Critical Equipment',
        headline: 'Backup power where an interruption is not an option',
        image: CriticalImg,
        overview:
            'Reliable UPS backup for medical devices, laboratory instruments, radiology and industrial controls, where even a brief outage can put patients, samples or production at risk.',
        features: [
            { title: 'Medical-grade reliability', text: 'Dependable power for ICUs, labs and radiology departments.' },
            { title: 'Seamless transition', text: 'Protection before the generator starts.' },
            { title: 'Redundant options', text: 'Parallel configurations for higher availability.' },
            { title: 'Planned servicing', text: 'Preventive maintenance to keep backup ready.' },
        ],
        steps: [
            { title: 'Requirements review', text: 'We identify your critical loads and risks.' },
            { title: 'Design', text: 'Systems specified with the redundancy you need.' },
            { title: 'Installation', text: 'Careful installation with minimal disruption.' },
            { title: 'Maintenance', text: 'Regular inspections and battery replacement.' },
        ],
        idealFor: ['Hospitals and clinics', 'Laboratories', 'Radiology departments', 'Industrial controls'],
    },
];

export const getUpsSolutionBySlug = (slug) => UPS_SOLUTIONS.find((s) => s.slug === slug);
export const UPS_SERVICES = ['New UPS Supply & Installation', 'UPS Battery Replacement', 'UPS Servicing & Repair'];