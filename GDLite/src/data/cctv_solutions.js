// Extra detail-page content, keyed by the subcategory slug in security_data.
export const CCTV_EXTRA = {
    residential: {
        headline: 'See your home from anywhere',
        features: [
            { title: 'Live view on your phone', text: 'Check your cameras from the next room or from abroad.' },
            { title: 'Motion alerts', text: 'Get notified the moment something moves on your property.' },
            { title: 'Night vision', text: 'Clear footage after dark, in black and white or colour.' },
            { title: 'Neat, discreet installation', text: 'Cabling tidied away and cameras placed where they matter.' },
        ],
        steps: [
            { title: 'Home survey', text: 'We walk the property and identify blind spots and entry points.' },
            { title: 'Camera plan', text: 'The right cameras, positions and recorder for your home.' },
            { title: 'Installation', text: 'Installation, set-up and testing.' },
            { title: 'Phone set-up and training', text: 'We connect your phone and show you how it works.' },
        ],
        idealFor: ['Family homes', 'Gated estates', 'Apartments', 'Holiday homes'],
    },
    commercial: {
        headline: 'Full visibility across your premises',
        features: [
            { title: 'Multi-camera coverage', text: 'Entrances, floors, stock areas and car parks all covered.' },
            { title: 'Central monitoring', text: 'View every camera from one screen, on site or remotely.' },
            { title: 'Reliable recording', text: 'Storage sized to keep the footage you need, for as long as you need it.' },
            { title: 'Scalable', text: 'Add cameras and sites as your business grows.' },
        ],
        steps: [
            { title: 'Site survey', text: 'We review your premises, risks and operations.' },
            { title: 'System design', text: 'Cameras, recorders and cabling planned for full coverage.' },
            { title: 'Installation', text: 'Installation with minimal disruption to your business.' },
            { title: 'Support', text: 'Maintenance, upgrades and quick fault response.' },
        ],
        idealFor: ['Factories', 'Retail and shops', 'Warehouses and go-downs', 'Offices'],
    },
    'outdoor-traffic': {
        headline: 'Intelligent surveillance for roads, yards and fleets',
        features: [
            { title: 'Weatherproof cameras', text: 'Built for rain, dust, heat and long outdoor runs.' },
            { title: 'Vehicle tracking and recognition', text: 'Follow vehicle movement and capture number plates.' },
            { title: 'Long-range coverage', text: 'Cameras suited to highways, depots and large open areas.' },
            { title: 'Central control room', text: 'Monitor many locations from a single station.' },
        ],
        steps: [
            { title: 'Site assessment', text: 'We study traffic flow, lighting and coverage needs.' },
            { title: 'System design', text: 'Cameras, power and links planned for the location.' },
            { title: 'Installation', text: 'Installation and commissioning on site.' },
            { title: 'Monitoring and support', text: 'Ongoing servicing and support.' },
        ],
        idealFor: ['Highways and roads', 'Depots and yards', 'Stadiums', 'Logistics and fleet operations'],
    },
    farm: {
        headline: 'Keep watch over land, livestock and equipment',
        features: [
            { title: 'Wide-area coverage', text: 'Cameras suited to large, open farm environments.' },
            { title: 'Solar-powered options', text: 'Keep cameras running where mains power is limited.' },
            { title: 'Remote viewing', text: 'Check on the farm from anywhere.' },
            { title: 'Theft and intrusion alerts', text: 'Be alerted when there is movement where there should not be.' },
        ],
        steps: [
            { title: 'Farm walk-through', text: 'We note the buildings, boundaries and risk areas.' },
            { title: 'Design', text: 'Camera positions, power and connectivity planned.' },
            { title: 'Installation', text: 'Installation and testing across the site.' },
            { title: 'Support', text: 'Servicing and fault-finding as needed.' },
        ],
        idealFor: ['Livestock farms', 'Crop farms', 'Greenhouses', 'Agricultural stores'],
    },
    site: {
        headline: 'Protect your site from theft and unauthorised access',
        features: [
            { title: 'Quick, flexible set-up', text: 'Systems that suit active, changing project sites.' },
            { title: 'Theft and vandalism deterrent', text: 'Visible cameras discourage tampering with materials and plant.' },
            { title: 'After-hours monitoring', text: 'Keep watch when the site is empty.' },
            { title: 'Progress records', text: 'Footage that also documents site activity.' },
        ],
        steps: [
            { title: 'Site visit', text: 'We review the layout, access points and valuables.' },
            { title: 'Plan', text: 'Camera positions and power planned around the build.' },
            { title: 'Installation', text: 'Installation and testing on site.' },
            { title: 'Relocation and support', text: 'Move or adjust the system as the project progresses.' },
        ],
        idealFor: ['Construction sites', 'Project locations', 'Material yards', 'Developments under way'],
    },
    vehicle: {
        headline: 'Surveillance that travels with your vehicles',
        features: [
            { title: 'Onboard recording', text: 'Footage from inside and around the vehicle.' },
            { title: 'Driver and cargo visibility', text: 'Monitor activity in the cabin and load area.' },
            { title: 'Accountability', text: 'Clear records to resolve disputes and incidents.' },
            { title: 'Built for the road', text: 'Rugged equipment that handles vibration and varying power.' },
        ],
        steps: [
            { title: 'Vehicle assessment', text: 'We review the vehicle type, use and coverage needed.' },
            { title: 'Equipment selection', text: 'Cameras and recorder matched to the vehicle.' },
            { title: 'Installation', text: 'Clean, secure installation.' },
            { title: 'Support', text: 'Servicing and footage retrieval help.' },
        ],
        idealFor: ['Buses and matatus', 'Delivery vehicles', 'Trucks and fleets', 'Company vehicles'],
    },
};

// Merge the data-file subcategory with its extra content into the shape SolutionDetail expects.
export const buildCctvSolution = (sub) => ({
    slug: sub.slug,
    title: sub.title,
    image: sub.cover,
    overview: sub.tagline,
    ...CCTV_EXTRA[sub.slug],
});