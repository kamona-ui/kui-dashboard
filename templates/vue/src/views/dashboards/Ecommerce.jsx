import { defineComponent } from 'vue'
import PageWrapper from '@/components/PageWrapper'
import Button from '@/components/Button'

const Header = defineComponent({
    setup() {
        return () => (
            <>
                <h2 class="text-xl font-semibold leading-tight">Dashboard</h2>

                <Button
                    target="_blank"
                    href="https://github.com/kamona-ui/kui-dashboard"
                    variant="black"
                    class="max-w-sm justify-center gap-2"
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
