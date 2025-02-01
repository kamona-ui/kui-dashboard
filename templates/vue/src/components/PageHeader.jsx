import { defineComponent } from 'vue'
import Button from '@/components/Button'

export default defineComponent({
    props: {
        title: String,
    },
    setup(props, { slots }) {
        return () => (
            <>
                <h2 class="text-xl font-semibold leading-tight">
                    {props.title}
                </h2>

                {slots.default ? (
                    slots.default()
                ) : (
                    <Button
                        target="_blank"
                        href="https://github.com/kamona-ui/kui-dashboard/tree/main/templates/vue#readme"
                        variant="black"
                        class="max-w-sm justify-center gap-2"
                        startIcon="tabler--brand-github"
                        text="Star on github"
                    />
                )}
            </>
        )
    },
})
