import components from './components'
import dashboards from './dashboards'
import pages from './pages'

export default {
    path: '/',
    component: () => import('@/layouts/DashboardLayout'),
    children: [
        {
            path: '/',
            name: 'Dashboard',
            component: () => import('@/views/dashboards/Analytics'),
        },
        dashboards,
        components,
        pages,
    ],
}
