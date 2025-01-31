export default {
    path: '/dashboards/',
    children: [
        {
            path: 'ecommerce',
            name: 'Ecommerce',
            component: () => import('@/views/dashboards/Ecommerce'),
        },
        {
            path: 'analytics',
            name: 'Analytics',
            component: () => import('@/views/dashboards/Analytics'),
        },
        {
            path: 'projects',
            name: 'Projects',
            component: () => import('@/views/dashboards/Projects'),
        },
    ],
}
