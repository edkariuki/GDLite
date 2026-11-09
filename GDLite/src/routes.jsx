import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/home/homepage'
import Layout from './components/layout'
import PowerSystems from './pages/solutions/power_systems/power_systems'
import Solar from './pages/solutions/power_systems/subcategories/solar'
import Ups from './pages/solutions/power_systems/subcategories/ups'
import Generators from './pages/solutions/power_systems/subcategories/generators'
import Electrical from './pages/solutions/power_systems/subcategories/electrical'
import PowerSystemCategory from './pages/solutions/power_systems/power_systems_categories'
import SecuritySystems from './pages/solutions/security_systems'
import NetworkSystems from './pages/solutions/network_systems'

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
                element: <SecuritySystems />,
            },
            {
                path: 'network-systems',
                element: <NetworkSystems />,
            },
        ],
    },
])