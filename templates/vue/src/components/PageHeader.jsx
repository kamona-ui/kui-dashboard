import { defineComponent } from 'vue'
import { KuiButton } from '@kui-dashboard/vue-plugin'

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
                    <KuiButton
                        external
                        href="https://github.com/kamona-ui/kui-dashboard/tree/main/templates/vue#readme"
                        variant="black"
                        class="max-w-sm"
                        startIcon="tabler--brand-github"
                        text="Star on github"
                    />
                )}
            </>
        )
    },
})
