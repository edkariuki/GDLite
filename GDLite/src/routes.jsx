import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/home/homepage'
import Layout from './components/layout'
import PowerSystems from './pages/solutions/power_systems/power_systems'
import Solar from './pages/solutions/power_systems/subcategories/solar'
import Ups from './pages/solutions/power_systems/subcategories/ups'
import Generators from './pages/solutions/power_systems/subcategories/generators'
import Electrical from './pages/solutions/power_systems/subcategories/electrical'
import PowerSystemCategory from './pages/solutions/power_systems/power_systems_categories'
import SecuritySystems from './pages/solutions/security_systems/security_systems'
import AccessControl from './pages/solutions/security_systems/subcategories/access_control'
import Cctv from './pages/solutions/security_systems/subcategories/cctv'
import Alarms from './pages/solutions/security_systems/subcategories/alarms'
import ElectricFence from './pages/solutions/security_systems/subcategories/electric_fence'
import GateAutomation from './pages/solutions/security_systems/subcategories/gate_automation'
import NetworkSystems from './pages/solutions/network_systems/network_systems'
import InternetProvisioning from './pages/solutions/network_systems/subcategories/internet_provisioning'
import CableStructures from './pages/solutions/network_systems/subcategories/cable_structures'
import FibreOpticDeployment from './pages/solutions/network_systems/subcategories/fibre_optic_deployment'
import Networking from './pages/solutions/network_systems/subcategories/networking'
import Intercomms from './pages/solutions/network_systems/subcategories/intercomms'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: 'power-systems',
                children: [
                    {
                        index: true,
                        element: <PowerSystems />,
                    },
                    {
                        path: 'solar',
                        element: <Solar />,
                    },
                    {
                        path: 'ups',
                        element: <Ups />,
                    },
                    {
                        path: 'generators',
                        element: <Generators />,
                    },
                    {
                        path: 'electrical',
                        element: <Electrical />,
                    },
                    {
                        path: ':categorySlug',
                        element: <PowerSystemCategory />,
                    },
                ],
            },
            {
                path: 'security-systems',
                children: [
                    {
                        index: true,
                        element: <SecuritySystems />,
                    },
                    {
                        path: 'access-control',
                        element: <AccessControl />,
                    },
                    {
                        path: 'cctv',
                        element: <Cctv />,
                    },
                    {
                        path: 'alarms',
                        element: <Alarms />,
                    },
                    {
                        path: 'electric-fence',
                        element: <ElectricFence />,
                    },
                    {
                        path: 'gate-automation',
                        element: <GateAutomation />,
                    }

                ],
            },
            {
                path: 'network-systems',
                children: [
                    {
                        index: true,
                        element: <NetworkSystems />,
                    },
                    {
                        path: 'internet-provisioning',
                        element: <InternetProvisioning />,
                    },
                    {
                        path: 'cable-structures',
                        element: <CableStructures />,
                    },
                    {
                        path: 'fibre-optic-deployment',
                        element: <FibreOpticDeployment />,
                    },
                    {
                        path: 'networking',
                        element: <Networking />,
                    },
                    {
                        path: 'intercomms',
                        element: <Intercomms />,
                    }
                ],
            },
        ],
    },
])