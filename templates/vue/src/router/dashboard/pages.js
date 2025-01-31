export default {
    path: '/pages/',
    children: [
        {
            path: 'blank',
            name: 'Blank',
            component: () => import('@/views/pages/Blank'),
        },
    ],
}
