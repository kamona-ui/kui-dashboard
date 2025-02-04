import home from '@/support/data/pages/home';

export default {
    path: '/dashboards/',
    children: [
        {
            path: 'ecommerce',
            name: 'Ecommerce',
            component: () => import('@/views/dashboards/Ecommerce'),
            meta: {
                breadcrumb: home.breadcrumb
            }
        },
        {
            path: 'analytics',
            name: 'Analytics',
            component: () => import('@/views/dashboards/Analytics'),
             meta: {
                breadcrumb: home.breadcrumb
            }
        },
        {
            path: 'projects',
            name: 'Projects',
            component: () => import('@/views/dashboards/Projects'),
             meta: {
                breadcrumb: home.breadcrumb
            }
        },
    ],
}
