import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/home/homepage'
import Layout from './components/layout'
import PowerSystems from './pages/solutions/power_systems/power_systems'
import Solar from './pages/solutions/power_systems/categories/solar'
import Ups from './pages/solutions/power_systems/categories/ups'
import Generators from './pages/solutions/power_systems/categories/generators'
import Electrical from './pages/solutions/power_systems/categories/electrical'
import PowerSystemCategory from './pages/solutions/power_systems/power_systems_categories'
import SecuritySystems from './pages/solutions/security_systems/security_systems'
import AccessControl from './pages/solutions/security_systems/categories/access_control'
import Cctv from './pages/solutions/security_systems/categories/cctv'
import Alarms from './pages/solutions/security_systems/categories/alarms'
import ElectricFence from './pages/solutions/security_systems/categories/electric_fence'
import GateAutomation from './pages/solutions/security_systems/categories/gate_automation'
import NetworkSystems from './pages/solutions/network_systems/network_systems'
import InternetProvisioning from './pages/solutions/network_systems/categories/internet_provisioning'
import CableStructures from './pages/solutions/network_systems/categories/cable_structures'
import FibreOpticDeployment from './pages/solutions/network_systems/categories/fibre_optic_deployment'
import Networking from './pages/solutions/network_systems/categories/networking'
import Intercomms from './pages/solutions/network_systems/categories/intercomms'
import AccessPoints from './pages/solutions/network_systems/categories/access_points'
import About from './pages/about/about'
// import Gallery from './components/gallery'
import SolarSolution from './pages/solutions/power_systems/subcategories/solar_solution'
import UpsSolution from './pages/solutions/power_systems/subcategories/ups_solution'
import GeneratorsSolution from './pages/solutions/power_systems/subcategories/generators_solution'
import ElectricalSolution from './pages/solutions/power_systems/subcategories/electrical_solution'
import AccessControlSolution from './pages/solutions/security_systems/subcategories/access_control'
import AlarmsSolution from './pages/solutions/security_systems/subcategories/alarms_solution'

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
                        children: [
                            {
                                index: true,
                                element: <Solar />,
                            },
                            {
                                path: ':slug',
                                element: <SolarSolution />,
                            },
                        ],
                    },
                    {
                        path: 'ups',
                        children: [
                            { index: true, element: <Ups /> },
                            { path: ':slug', element: <UpsSolution /> },
                        ],
                    },
                    {
                        path: 'generators',
                        children: [
                            { index: true, element: <Generators /> },
                            { path: ':slug', element: <GeneratorsSolution /> },
                        ],
                    },
                    {
                        path: 'electrical',
                        children: [
                            { index: true, element: <Electrical /> },
                            { path: ':slug', element: <ElectricalSolution /> },
                        ],
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
                        children: [
                            { index: true, element: <AccessControl /> },
                            { path: ':slug', element: <AccessControlSolution /> },
                        ],
                    },
                    {
                        path: 'cctv',
                        element: <Cctv />,
                    },
                    {
                        path: 'alarms',
                        children: [
                            { index: true, element: <Alarms /> },
                            { path: ':slug', element: <AlarmsSolution /> },
                        ],
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
                    },
                    {
                        path: 'access-points',
                        element: <AccessPoints />,
                    }
                ],
            },
            {
                path: 'about',
                element: <About />,
            },
            // {
            //     path: 'gallery/solar/:service',
            //     element: <Gallery />,
            // },
        ],
    },
])