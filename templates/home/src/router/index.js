import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import routes from '@/router/routes'

const router = createRouter({
    history: createWebHistory('kui-dashboard'),
    routes,
})

router.beforeEach(() => {
    NProgress.start()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
