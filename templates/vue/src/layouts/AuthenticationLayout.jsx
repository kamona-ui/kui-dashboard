import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/components/Logo'
import PageFooter from '@/components/PageFooter'

export default defineComponent({
    setup() {
        return () => (
            <div class="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 pt-6 dark:bg-dark-0">
                <div class="flex-shrink-0">
                    <RouterLink to={{ name: 'Dashboard' }}>
                        <Logo class="h-20 w-20" />
                        <span class="sr-only">Dashboard</span>
                    </RouterLink>
                </div>

                <main class="flex w-full flex-1 items-center sm:max-w-md">
                    <div class="w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:bg-dark-1 sm:rounded-lg">
                        <RouterView />
                    </div>
                </main>

                <PageFooter />
            </div>
        )
    },
})
