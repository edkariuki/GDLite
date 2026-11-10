import HybridBackupImg from '../assets/images/hybrid_backup.jpg';
import SolarWaterPumpingImg from '../assets/images/solar_water_pumping.jpg';
import BackupGeneratorImg from '../assets/images/backup_generator.jpg';
import ElectricalDesignImg from '../assets/images/electrical_design.jpg';
import OffGridSolarImg from '../assets/images/off_grid_solar.png';
import ChlorideExideLogo from '../assets/logos/chloride_exide.png';
import WecoLogo from '../assets/logos/weco.png'
import TBBPowerLogo from '../assets/logos/tbb_power.png'
import SrneLogo from '../assets/logos/srne.png'
import JinkoSolarLogo from '../assets/logos/jinko_solar.png'
import LongiSolarLogo from '../assets/logos/longi_solar.png'
import FelicitySolarLogo from '../assets/logos/felicity_solar.png'
import DavisandShirtliffLogo from '../assets/logos/davis_shirtliff.png'
import DeyeLogo from '../assets/logos/deye.png'
import SolisLogo from '../assets/logos/solis.png'
import ABBLogo from '../assets/logos/abb.png'
import ApcLogo from '../assets/logos/apc.png'
import IbmLogo from '../assets/logos/ibm.png'
import MecerLogo from '../assets/logos/mecer.png'
import DeltaLogo from '../assets/logos/delta.png'
import CumminsLogo from '../assets/logos/cummins.png'
import MantracCaterpillarLogo from '../assets/logos/mantrac_cat.png'
import VolvoPentaLogo from '../assets/logos/volvo_penta.png'

// Subcategories without an `image` fall back to the category icon on a tinted panel.
export const categories = [
    {
        slug: 'solar',
        title: 'Solar Solutions',
        image: OffGridSolarImg,
        brands: [
            { name: 'Chloride Exide', logo: ChlorideExideLogo },
            { name: 'Weco', logo: WecoLogo },
            { name: 'TBB Power', logo: TBBPowerLogo },
            { name: 'SRNE', logo: SrneLogo },
            { name: 'Jinko Solar', logo: JinkoSolarLogo },
            { name: 'Longi Solar', logo: LongiSolarLogo },
            { name: 'Felicity Solar', logo: FelicitySolarLogo },
            { name: 'Davis and Shirtliff', logo: DavisandShirtliffLogo },
            { name: 'Deye', logo: DeyeLogo },
            { name: 'Solis', logo: SolisLogo },
        ],
        description:
            'Harness the sun for electricity, water pumping and water heating — from grid-tied homes to fully off-grid sites.',
        subcategories: [
            {
                title: 'Hybrid Solar Systems',
                description:
                    'Seamlessly switch between solar, battery storage, and grid power to eliminate downtime and reduce electricity expenses for home or business.',
                image: HybridBackupImg,
            },
            {
                title: 'Off-Grid Solar Solutions',
                description:
                    'Complete energy independence for remote locations. Standalone solar and battery setups engineered to keep power running 24/7 without a grid connection.',
                image: OffGridSolarImg,
            },
            {
                title: 'Solar Water Pumping',
                description:
                    'Cost-effective, reliable water pumping powered directly by the sun. Perfect for agricultural irrigation, livestock, and domestic water supply.',
                image: SolarWaterPumpingImg,
            },
            // {
            //     title: 'Solar Water Heaters',
            //     description:
            //         'High-efficiency thermal water heating for residential and commercial properties. Cut monthly water heating bills significantly.',
            //     image: SolarWaterImg,
            // },
        ],
    },
    {
        slug: 'ups',
        title: 'UPS',
        image: HybridBackupImg,
        brands: [
            { name: 'ABB', logo: ABBLogo },
            { name: 'APC', logo: ApcLogo },
            { name: 'IBM', logo: IbmLogo },
            { name: 'Mecer', logo: MecerLogo },
            { name: 'Delta', logo: DeltaLogo },
        ],
        description:
            'Uninterruptible power for offices, data rooms and sensitive equipment — no flicker, no lost work, no damaged hardware.',
        subcategories: [
            {
                title: 'Online (Double-Conversion) UPS',
                description:
                    'Zero transfer time and fully conditioned power for servers, medical equipment and other critical loads.',
            },
            {
                title: 'Line-Interactive UPS',
                description:
                    'Affordable protection for workstations, POS systems and networking gear, with automatic voltage regulation.',
            },
            {
                title: 'Inverter & Battery Banks',
                description:
                    'Inverter and deep-cycle battery setups that keep homes and small businesses running through grid outages.',
            },
            {
                title: 'UPS Maintenance & Battery Replacement',
                description:
                    'Scheduled servicing, load testing and battery replacement to keep existing UPS systems dependable.',
            },
        ],
    },
    {
        slug: 'generators',
        title: 'Generators',
        image: BackupGeneratorImg,
        brands: [
            { name: 'Cummins', logo: CumminsLogo },
            { name: 'Mantrac/Caterpillar', logo: MantracCaterpillarLogo },
            { name: 'Volvo Penta', logo: VolvoPentaLogo },
        ],
        description:
            'Heavy-duty backup generation so essential machinery and critical systems stay powered during outages.',
        subcategories: [
            {
                title: 'Automatic Standby Generators',
                description:
                    'Generators with automatic transfer switches that take over within seconds of a grid failure.',
                image: BackupGeneratorImg,
            },
            {
                title: 'Manual & Portable Generators',
                description:
                    'Flexible manual-start and portable units for homes, sites and events.',
            },
            {
                title: 'Changeover & ATS Installation',
                description:
                    'Safe manual changeover switches and automatic transfer switch (ATS) panels wired to your distribution board.',
            },
            {
                title: 'Generator Servicing & Repair',
                description:
                    'Routine servicing, overhauls and emergency repairs to keep your generator ready when you need it.',
            },
        ],
    },
    {
        slug: 'electrical',
        title: 'Electrical Design & Contracting',
        image: ElectricalDesignImg,
        description:
            'Certified electrical designs and turn-key installations complying with EPRA and national safety standards.',
        subcategories: [
            {
                title: 'Commercial',
                description:
                    'Electrical design and installation for offices, retail, hotels, schools and hospitals, from lighting and power layouts to distribution boards and backup integration.',
            },
            {
                title: 'Industrial',
                description:
                    'Heavy-duty power distribution, motor control, three-phase systems and load analysis for factories, warehouses and processing plants.',
            },
            {
                title: 'Residential',
                description:
                    'Safe, certified wiring for new homes, renovations and estates, including consumer units, earthing, lighting and EV- and solar-ready circuits.',
            },
        ],
    },
];

export const getCategoryBySlug = (slug) => categories.find((c) => c.slug === slug);