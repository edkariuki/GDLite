import HybridImg from '../assets/gallery/power/solar/solar_13.png';       // swap for dedicated images later
import OffGridImg from '../assets/images/solar_solutions.png';
import PumpingImg from '../assets/images/solar_farm.png';

export const SOLAR_SOLUTIONS = [
    {
        slug: 'hybrid',
        title: 'Hybrid Solar Systems',
        headline: 'Solar, battery and grid working together',
        image: HybridImg,
        overview:
            'A hybrid system combines solar panels, battery storage and your existing grid connection. Solar powers your property during the day, batteries store the surplus for the evening and during outages, and the grid fills any remaining gap.',
        features: [
            { title: 'Backup during blackouts', text: 'Batteries switch in automatically, so lights, fridges and equipment keep running.' },
            { title: 'Lower electricity bills', text: 'Use your own solar power first and draw from the grid only when you need to.' },
            { title: 'Expandable', text: 'Add more panels or batteries later as your power needs grow.' },
            { title: 'Smart monitoring', text: 'Track production and consumption from your phone.' },
        ],
        steps: [
            { title: 'Site assessment', text: 'We review your property, roof and current power usage.' },
            { title: 'System sizing', text: 'Our engineers size panels, inverter and batteries to your load.' },
            { title: 'Installation', text: 'Professional installation with safe grid integration.' },
            { title: 'Support', text: 'Commissioning, training and ongoing maintenance.' },
        ],
        idealFor: ['Homes', 'Offices and shops', 'Clinics and schools', 'Businesses with frequent outages'],
    },
    {
        slug: 'off-grid',
        title: 'Off-Grid Solar Solutions',
        headline: 'Independent power, wherever you are',
        image: OffGridImg,
        overview:
            'Off-grid systems run entirely on solar and battery storage with no utility connection. They are built for remote homes, farms and facilities where grid power is unavailable or unreliable.',
        features: [
            { title: 'Full independence', text: 'No grid connection, no monthly utility bills.' },
            { title: 'Built for remote sites', text: 'Rugged equipment designed for demanding conditions.' },
            { title: 'Right-sized storage', text: 'Battery capacity matched to your nightly and cloudy-day needs.' },
            { title: 'Low running cost', text: 'Replace or reduce diesel generator use.' },
        ],
        steps: [
            { title: 'Load audit', text: 'We list every appliance and how long it runs.' },
            { title: 'System design', text: 'Panels, batteries and inverter sized for autonomy.' },
            { title: 'Installation', text: 'Mounting, wiring and protection done to standard.' },
            { title: 'Support', text: 'Handover, training and maintenance plans.' },
        ],
        idealFor: ['Remote homes', 'Farms and lodges', 'Telecom and security sites', 'Off-grid facilities'],
    },
    {
        slug: 'water-pumping',
        title: 'Solar Water Pumping',
        headline: 'Pump water with sunshine, not diesel',
        image: PumpingImg,
        overview:
            'Solar water pumping uses panels to drive a pump directly, moving water from boreholes, rivers or tanks for irrigation, livestock and domestic supply, with no fuel and very little maintenance.',
        features: [
            { title: 'No fuel costs', text: 'Sunshine drives the pump, so there is no diesel to buy or haul.' },
            { title: 'Low maintenance', text: 'Fewer moving parts than a generator-driven pump.' },
            { title: 'Works with storage tanks', text: 'Pump during the day and store water for use at any time.' },
            { title: 'Scalable', text: 'From a household supply to large-scale irrigation.' },
        ],
        steps: [
            { title: 'Water survey', text: 'We check source depth, yield and daily demand.' },
            { title: 'Pump & array sizing', text: 'The right pump and panel array for your head and flow.' },
            { title: 'Installation', text: 'Pump, panels, controller and piping installed and tested.' },
            { title: 'Support', text: 'Commissioning and servicing.' },
        ],
        idealFor: ['Farms and irrigation', 'Livestock watering', 'Schools and communities', 'Homes with boreholes'],
    },
];

export const getSolarSolutionBySlug = (slug) => SOLAR_SOLUTIONS.find((s) => s.slug === slug);
export const SOLAR_SLUG_BY_TITLE = Object.fromEntries(SOLAR_SOLUTIONS.map((s) => [s.title, s.slug]));