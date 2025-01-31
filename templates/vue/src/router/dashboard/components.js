export default {
    path: '/components/',
    children: [
        {
            path: 'buttons',
            name: 'Buttons',
            component: () => import('@/views/components/Buttons'),
        },
    ],
}
