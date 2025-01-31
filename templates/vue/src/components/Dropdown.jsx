import { defineComponent, Transition, computed } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { RouterLink } from 'vue-router'

export const DropdownItem = defineComponent({
    props: {
        to: {
            type: [String, Object],
        },
        title: {
            type: String,
        },
        startIcon: {
            type: String || undefined,
            default: undefined,
        },
        endIcon: {
            type: String || undefined,
            default: undefined,
        },
    },

    inheritAttrs: false,

    setup(props, { attrs }) {
        return () => (
            <MenuItem>
                {({ active, disabled }) => (
                    <RouterLink
                        {...attrs}
                        class={[
                            'inline-flex w-full items-center gap-2 px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out focus:outline-none dark:text-gray-300',
                            {
                                'bg-primary text-white dark:text-white': active,
                                'pointer-events-none': disabled,
                            },
                        ]}
                        to={props.to}
                    >
                        {props.startIcon && (
                            <span
                                aria-hidden="true"
                                class={['iconify h-4 w-4', props.startIcon]}
                            ></span>
                        )}
                        <span>{props.title}</span>
                        {props.endIcon && (
                            <span
                                aria-hidden="true"
                                class={[
                                    'iconify ms-auto h-4 w-4',
                                    props.endIcon,
                                ]}
                            ></span>
                        )}
                    </RouterLink>
                )}
            </MenuItem>
        )
    },
})

export default defineComponent({
    props: {
        align: {
            default: 'right',
        },
        width: {
            default: '48',
        },
        contentClasses: {
            default: () => ['py-1', 'bg-white dark:bg-dark-1'],
        },
    },

    setup(props, { slots }) {
        const widthClass = computed(() => {
            return {
                48: 'w-48',
            }[props.width.toString()]
        })

        const alignmentClasses = computed(() => {
            if (props.align === 'left') {
                return 'origin-top-left left-0'
            } else if (props.align === 'right') {
                return 'origin-top-right right-0'
            } else {
                return 'origin-top'
            }
        })

        return () => (
            <Menu as="div" class="relative">
                <MenuButton as="div">{slots.trigger?.()}</MenuButton>

                <Transition
                    enterActiveClass="transition ease-out duration-200"
                    enterFromClass="transform opacity-0 scale-95"
                    enterToClass="transform opacity-100 scale-100"
                    leaveActiveClass="transition ease-in duration-75"
                    leaveFromClass="transform opacity-100 scale-100"
                    leaveToClass="transform opacity-0 scale-95"
                >
                    <MenuItems
                        class={[
                            'absolute z-50 mt-2 rounded-md shadow-lg focus:outline-none focus:ring-1 focus:ring-primary-darker focus:ring-offset-1 focus:ring-offset-white focus:dark:ring-offset-dark-1',
                            widthClass.value,
                            alignmentClasses.value,
                        ]}
                    >
                        <div
                            class={[
                                'rounded-md ring-1 ring-black ring-opacity-5',
                                props.contentClasses,
                            ]}
                        >
                            {slots.default?.()}
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        )
    },
})
