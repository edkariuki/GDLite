import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/home/homepage'
import Layout from './components/layout'
import PowerSystems from './pages/solutions/power_systems'
import SecuritySystems from './pages/solutions/security_systems'

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
                element: <PowerSystems />,
            },
            {
                path: 'security-systems',
                element: <SecuritySystems />,
            },
        ],
    },
])