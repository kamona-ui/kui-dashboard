import buttons from '@/support/data/components/buttons';

export default {
    path: '/components/',
    children: [
        {
            path: 'buttons',
            name: 'Buttons',
            component: () => import('@/views/components/Buttons'),
            meta: {
                breadcrumb: buttons.breadcrumb
            }
        },
    ],
}
