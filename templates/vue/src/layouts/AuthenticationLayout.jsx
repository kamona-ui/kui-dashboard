import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/components/Logo'
import PageFooter from '@/components/PageFooter'
import { KuiButton } from '@kui-dashboard/vue-plugin'
import { isDark, toggleDarkMode } from '@/composables'

export default defineComponent({
    props: {
        contentTitle: String,
    },

    setup(props) {
        return () => (
            <div class="bg-gray-100 dark:bg-dark-0">
                <div class="container mx-auto flex min-h-screen flex-col items-center justify-center gap-4 p-6">
                    <div class="flex w-full flex-1 flex-col items-center justify-center gap-24 sm:max-w-md">
                        <div class="flex-shrink-0">
                            <RouterLink to={{ name: 'Dashboard' }}>
                                <Logo class="h-20 w-20" />
                                <span class="sr-only">Home</span>
                            </RouterLink>
                        </div>

                        <main class="mb-10 w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:bg-dark-1 sm:rounded-lg">
                            <h1 class="sr-only">{props.contentTitle}</h1>

                            <RouterView />
                        </main>
                    </div>

                    <PageFooter />

                    <div class="fixed right-10 top-10">
                        <KuiButton
                            variant="transparent"
                            onClick={() => {
                                toggleDarkMode()
                            }}
                            sr-text="Toggle dark mode"
                            icon={
                                !isDark.value ? 'tabler--moon' : 'tabler--sun'
                            }
                        />
                    </div>
                </div>
            </div>
        )
    },
})
