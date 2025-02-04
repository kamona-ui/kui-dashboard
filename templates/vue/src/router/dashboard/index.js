import home from '@/support/data/pages/home'
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
            meta: {
                breadcrumb: home.breadcrumb
            }
        },
        dashboards,
        components,
        pages,
    ],
}
