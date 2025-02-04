import { defineComponent } from 'vue'
import { KuiButton } from '@kui-dashboard/vue-plugin'
import Dropdown, { DropdownItem } from '@/components/Dropdown'

export default defineComponent({
    props: {
        noHeader: {
            type: Boolean,
            default: false,
        },

        bgClasses: {
            type: String,
            default: 'bg-white dark:bg-dark-1',
        },

        title: String,

        actions: {
            type: Array,
            default: [],
        },
    },

    setup(props, { slots }) {
        return () => (
            <div class={['rounded-md p-4 shadow-md', props.bgClasses]}>
                {/* Card header */}
                {!props.noHeader && (
                    <div class="flex items-center justify-between">
                        {slots.header ? (
                            slots.header()
                        ) : (
                            <h4 class="text-lg font-medium">{props.title}</h4>
                        )}

                        {/* Card action */}
                        {props.actions.length && (
                            <Dropdown
                                align="right"
                                width="48"
                                v-slots={{
                                    trigger: () => (
                                        <KuiButton
                                            size="sm"
                                            variant="transparent"
                                            sr-text="Card actions"
                                            icon="tabler--dots"
                                            class="z-10"
                                        />
                                    ),
                                }}
                            >
                                {props.actions.map(({ to, title }, i) => (
                                    <DropdownItem
                                        to={to}
                                        key={i}
                                        title={title}
                                    />
                                ))}
                            </Dropdown>
                        )}
                    </div>
                )}

                {/* Card body */}
                {slots.default?.()}
            </div>
        )
    },
})
