import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { sidebarState } from '@/composables'
import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/Navbar'
import PageFooter from '@/components/PageFooter'

export default defineComponent({
    setup() {
        return () => (
            <div class="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-dark-0 dark:text-gray-100">
                <Sidebar />

                <div
                    class={[
                        'flex min-h-screen flex-1 flex-col transition-[margin] duration-150 md:ms-16',
                        {
                            'lg:ms-64': sidebarState.isOpen,
                        },
                    ]}
                >
                    <Navbar />

                    <div class="container mx-auto flex flex-1 flex-col items-center gap-4 p-4 sm:gap-6 sm:p-6">
                        <RouterView />

                        <PageFooter />
                    </div>
                </div>
            </div>
        )
    },
})
