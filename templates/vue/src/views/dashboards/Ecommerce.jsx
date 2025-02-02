import { defineComponent } from 'vue'
import PageWrapper from '@/components/PageWrapper'
import { KuiButton } from '@kui-dashboard/vue-plugin'

const Header = defineComponent({
    setup() {
        return () => (
            <>
                <h2 class="text-xl font-semibold leading-tight">Dashboard</h2>

                <KuiButton
                    external
                    href="https://github.com/kamona-ui/kui-dashboard/tree/main/templates/vue#readme"
                    variant="black"
                    class="max-w-sm"
                    startIcon="tabler--brand-github"
                    text="Star on github"
                />
            </>
        )
    },
})

export default defineComponent({
    setup() {
        return () => (
            <PageWrapper
                v-slots={{ header: () => <Header /> }}
                mainTitle="Dashboard Home"
            >
                <div class="grid gap-4"></div>
            </PageWrapper>
        )
    },
})
