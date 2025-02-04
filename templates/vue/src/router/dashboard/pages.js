import blank from '@/support/data/pages/blank';

export default {
    path: '/pages/',
    children: [
        {
            path: 'blank',
            name: 'Blank',
            component: () => import('@/views/pages/Blank'),
            meta: {
                breadcrumb: blank.breadcrumb
            }
        },
    ],
}
