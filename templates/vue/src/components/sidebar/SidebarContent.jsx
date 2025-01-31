import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import PerfrectScrollbar from '@/components/perfect-scrollbar'
import SidebarCollapsible from '@/components/sidebar/SidebarCollapsible'
import SidebarCollapsibleItem from '@/components/sidebar/SidebarCollapsibleItem'

export default defineComponent({
    setup() {
        const isCurrentRoute = (routeName) => {
            return useRouter().currentRoute.value.name == routeName
        }

        const isCurrentPath = (path) => {
            return useRouter().currentRoute.value.path.startsWith(path)
        }

        return () => (
            <PerfrectScrollbar
                tagname="nav"
                aria-label="main"
                class="relative flex max-h-full flex-1 flex-col gap-4 px-3"
            >
                <SidebarCollapsible
                    title="Dashboards"
                    icon="tabler--home"
                    active={
                        isCurrentPath('/dashboards') ||
                        isCurrentRoute('Dashboard')
                    }
                >
                    <SidebarCollapsibleItem
                        to={{ name: 'Ecommerce' }}
                        title="Ecommerce"
                        active={
                            isCurrentRoute('Ecommerce') ||
                            isCurrentRoute('Dashboard')
                        }
                    />
                    <SidebarCollapsibleItem
                        to={{ name: 'Analytics' }}
                        title="Analytics"
                        active={isCurrentRoute('Analytics')}
                    />
                    <SidebarCollapsibleItem
                        to={{ name: 'Projects' }}
                        title="Projects"
                        active={isCurrentRoute('Projects')}
                    />
                </SidebarCollapsible>

                <SidebarCollapsible
                    title="Components"
                    icon="tabler--grid"
                    active={isCurrentPath('/components')}
                >
                    <SidebarCollapsibleItem
                        to={{ name: 'Buttons' }}
                        title="Buttons"
                        active={isCurrentRoute('Buttons')}
                    />
                </SidebarCollapsible>

                <SidebarCollapsible
                    title="Pages"
                    icon="tabler--file"
                    active={isCurrentPath('/pages')}
                >
                    <SidebarCollapsibleItem
                        to={{ name: 'Blank' }}
                        title="Blank"
                        active={isCurrentRoute('Blank')}
                    />
                </SidebarCollapsible>

                <SidebarCollapsible
                    title="Authentication"
                    icon="tabler--shield"
                >
                    <SidebarCollapsibleItem
                        to={{ name: 'Login' }}
                        title="Login"
                    />
                    <SidebarCollapsibleItem
                        to={{ name: 'Register' }}
                        title="Register"
                    />
                    <SidebarCollapsibleItem
                        to={{ name: 'VerifyEmail' }}
                        title="Verify Email"
                    />
                    <SidebarCollapsibleItem
                        to={{ name: 'ForgotPassword' }}
                        title="Forgot Password"
                    />
                    <SidebarCollapsibleItem
                        to={{ name: 'ResetPassword' }}
                        title="Reset Password"
                    />
                    <SidebarCollapsibleItem
                        to={{ name: 'ConfirmPassword' }}
                        title="Confirm Password"
                    />
                </SidebarCollapsible>
            </PerfrectScrollbar>
        )
    },
})
