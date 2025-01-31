import { defineComponent, onMounted, Transition } from 'vue'
import { sidebarState } from '@/composables'
import SidebarHeader from '@/components/sidebar/SidebarHeader'
import SidebarContent from '@/components/sidebar/SidebarContent'
import SidebarFooter from '@/components/sidebar/SidebarFooter'

const SidebarOverlay = defineComponent({
    setup() {
        return () => (
            <Transition
                enterActiveClass="transition"
                enterFromClass="opacity-0"
                enterToClass="opacity-100"
                leaveActiveClass="transition"
                leaveFromClass="opacity-100"
                leaveToClass="opacity-0"
            >
                <div
                    v-show={sidebarState.isOpen}
                    onClick={() => {
                        sidebarState.isOpen = false
                    }}
                    class="fixed inset-0 z-20 bg-black/50 lg:hidden"
                ></div>
            </Transition>
        )
    },
})

export default defineComponent({
    setup() {
        onMounted(() => {
            window.addEventListener('resize', sidebarState.handleWindowResize)
        })

        return () => (
            <>
                <SidebarOverlay />

                <aside
                    class={[
                        'fixed inset-y-0 z-40 flex w-64 -translate-x-full flex-col gap-6 bg-white py-3 shadow-lg transition-all duration-200 dark:bg-dark-1 md:transition-[width] lg:translate-x-0',
                        {
                            'w-64 translate-x-0':
                                sidebarState.isOpen || sidebarState.isHovered,
                            'w-64 -translate-x-full md:w-16 md:translate-x-0':
                                !sidebarState.isOpen && !sidebarState.isHovered,
                        },
                    ]}
                    onmouseenter={() => {
                        sidebarState.handleHover(true)
                    }}
                    onmouseleave={() => {
                        sidebarState.handleHover(false)
                    }}
                >
                    <SidebarHeader />
                    <SidebarContent />
                    <SidebarFooter />
                </aside>
            </>
        )
    },
})
