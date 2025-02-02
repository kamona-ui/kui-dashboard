import { defineComponent } from 'vue'
import PageWrapper from '@/components/PageWrapper'

export default defineComponent({
    setup() {
        console.log(KuiButton)

        return () => <PageWrapper title="Blank"></PageWrapper>
    },
})
