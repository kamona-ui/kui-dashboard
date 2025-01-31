export default {
    path: '/auth/',
    name: 'Auth',
    component: () => import('@/layouts/AuthenticationLayout'),
    children: [
        {
            path: 'login',
            name: 'Login',
            component: () => import('@/views/auth/Login'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/views/auth/Register'),
        },
        {
            path: '/forgot-password',
            name: 'ForgotPassword',
            component: () => import('@/views/auth/ForgotPassword'),
        },
        {
            path: '/reset-password',
            name: 'ResetPassword',
            component: () => import('@/views/auth/ResetPassword'),
        },
        {
            path: '/confirm-password',
            name: 'ConfirmPassword',
            component: () => import('@/views/auth/ConfirmPassword'),
        },
        {
            path: '/verify-email',
            name: 'VerifyEmail',
            component: () => import('@/views/auth/VerifyEmail'),
        },
    ],
}
