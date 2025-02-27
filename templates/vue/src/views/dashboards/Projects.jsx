import { defineComponent } from 'vue'
import PageWrapper from '@/components/PageWrapper'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter()

        return () => (
            <PageWrapper
                title="Dashboard"
                breadcrumb={router.currentRoute.value.meta.breadcrumb}
            ></PageWrapper>
        )
    },
})
