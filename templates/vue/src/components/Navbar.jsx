import { defineComponent, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import {
    handleScroll,
    isDark,
    scrolling,
    toggleDarkMode,
    sidebarState,
} from '@/composables'
import { KuiButton } from '@kui-dashboard/vue-plugin'
import Logo from '@/components/Logo'
import Dropdown, { DropdownItem } from '@/components/Dropdown'

export const MobileBottomBar = defineComponent({
    setup() {
        return () => (
            <div
                class={[
                    'fixed inset-x-0 bottom-0 z-10 flex items-center justify-between bg-white px-4 py-4 transition-transform duration-500 dark:bg-dark-1 sm:px-6 md:hidden',
                    {
                        'translate-y-full': scrolling.down,
                        'translate-y-0': scrolling.up,
                    },
                ]}
            >
                <KuiButton
                    variant="transparent"
                    sr-text="Search"
                    icon="tabler--search"
                />

                <RouterLink to={{ name: 'Dashboard' }}>
                    <Logo class="h-10 w-10" />
                    <span class="sr-only">K UI</span>
                </RouterLink>

                <KuiButton
                    variant="transparent"
                    onClick={() => {
                        sidebarState.isOpen = !sidebarState.isOpen
                    }}
                    class="p-2"
                    sr-text="Open navigation menu"
                    icon="tabler--menu-3"
                />
            </div>
        )
    },
})

export default defineComponent({
    setup() {
        onMounted(() => {
            document.addEventListener('scroll', handleScroll)
        })

        onUnmounted(() => {
            document.removeEventListener('scroll', handleScroll)
        })

        return () => (
            <>
                <nav
                    aria-label="secondary"
                    class={[
                        'sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-2 transition-transform duration-500 dark:bg-dark-1',
                        {
                            '-translate-y-full': scrolling.down,
                            'translate-y-0': scrolling.up,
                        },
                    ]}
                >
                    <div class="flex items-center gap-2">
                        {/* Quick actions dropdown */}
                        <Dropdown
                            align="left"
                            width="48"
                            v-slots={{
                                trigger: () => (
                                    <KuiButton
                                        variant="transparent"
                                        icon="tabler--sparkles"
                                        sr-text="Quick actions"
                                    />
                                ),
                            }}
                        >
                            <DropdownItem
                                to="#"
                                title="Manage users"
                                startIcon="tabler--users"
                            />
                            <DropdownItem
                                to="#"
                                title="Site settings"
                                startIcon="tabler--settings"
                            />
                            <DropdownItem
                                to="#"
                                title="Action 3"
                                startIcon="tabler--circle"
                            />
                            <DropdownItem
                                to="#"
                                title="Action 4"
                                startIcon="tabler--circle"
                            />
                        </Dropdown>

                        <KuiButton
                            variant="transparent"
                            sr-text="Search"
                            icon="tabler--search"
                            class="hidden md:inline-flex"
                        />
                    </div>

                    <div class="flex items-center gap-2">
                        <KuiButton
                            variant="transparent"
                            onClick={toggleDarkMode}
                            class="hidden md:inline-flex"
                            sr-text="Toggle dark mode"
                            icon={isDark.value ? 'tabler--sun' : 'tabler--moon'}
                        />

                        {/* User dropdown */}
                        <Dropdown
                            align="right"
                            width="48"
                            v-slots={{
                                trigger: () => (
                                    <KuiButton
                                        variant="transparent"
                                        class="overflow-hidden p-0"
                                    >
                                        <img
                                            class="h-10 w-10 rounded-md object-cover"
                                            src="images/avatar.jpeg"
                                            alt="Ahmed Kamel"
                                        />
                                    </KuiButton>
                                ),
                            }}
                        >
                            <DropdownItem
                                to="#"
                                title="Profile"
                                startIcon="tabler--user"
                            />
                            <DropdownItem
                                to="#"
                                title="Logout"
                                startIcon="tabler--logout"
                            />
                        </Dropdown>
                    </div>
                </nav>

                <MobileBottomBar />
            </>
        )
    },
})
