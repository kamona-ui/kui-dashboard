import { defineComponent, ref, Transition } from 'vue'
import SidebarLink from '@/components/sidebar/SidebarLink'
import { sidebarState } from '@/composables'

export default defineComponent({
    props: {
        title: {
            type: String,
        },
        icon: {
            required: false,
        },
        active: {
            type: Boolean,
        },
    },

    setup(props, { slots }) {
        const isOpen = ref(props.active)

        const beforeEnter = (el) => {
            el.style.maxHeight = `0px`
        }

        const enter = (el) => {
            el.style.maxHeight = `${el.scrollHeight}px`
        }

        const beforeLeave = (el) => {
            el.style.maxHeight = `${el.scrollHeight}px`
        }

        const leave = (el) => {
            el.style.maxHeight = `0px`
        }

        return () => (
            <div class="relative">
                <SidebarLink
                    onClick={() => {
                        isOpen.value = !isOpen.value
                    }}
                    active={props.active}
                    title={props.title}
                    icon={props.icon}
                >
                    {{
                        arrow: () => (
                            <span
                                v-show={
                                    sidebarState.isOpen ||
                                    sidebarState.isHovered
                                }
                                aria-hidden="true"
                                class="relative ml-auto block h-6 w-6"
                            >
                                <span
                                    class={[
                                        'absolute right-[9px] top-1/2 mt-[-5px] h-2 w-[2px] transition-all duration-200',
                                        {
                                            '-rotate-45': isOpen.value,
                                            'rotate-45': !isOpen.value,
                                            'bg-white': props.active,
                                            'bg-gray-400': !props.active,
                                        },
                                    ]}
                                ></span>
                                <span
                                    class={[
                                        'absolute left-[9px] top-1/2 mt-[-5px] h-2 w-[2px] transition-all duration-200',
                                        {
                                            'rotate-45': isOpen.value,
                                            '-rotate-45': !isOpen.value,
                                            'bg-white': props.active,
                                            'bg-gray-400': !props.active,
                                        },
                                    ]}
                                ></span>
                            </span>
                        ),
                    }}
                </SidebarLink>

                <Transition
                    onBeforeEnter={beforeEnter}
                    onEnter={enter}
                    onBeforeLeave={beforeLeave}
                    onLeave={leave}
                    appear
                >
                    <div
                        v-show={
                            isOpen.value &&
                            (sidebarState.isOpen || sidebarState.isHovered)
                        }
                        class="max-h-0 overflow-hidden transition-all duration-200"
                    >
                        <ul class="relative ml-5 px-0 pb-0 pt-2 before:absolute before:inset-y-0 before:left-0 before:block before:w-0 before:border-l-2 before:border-l-gray-200 dark:before:border-l-gray-600">
                            {slots.default?.()}
                        </ul>
                    </div>
                </Transition>
            </div>
        )
    },
})
