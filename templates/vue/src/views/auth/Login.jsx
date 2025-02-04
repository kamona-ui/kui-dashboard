import { defineComponent, reactive, withModifiers } from 'vue'
import { KuiButton, KuiInput, KuiCheckbox } from '@kui-dashboard/vue-plugin'
import { RouterLink } from 'vue-router'

export default defineComponent({
    setup() {
        const loginForm = reactive({
            email: '',
            password: '',
            remember: false,
            processing: false,
        })

        const login = () => {
            //
        }

        return () => (
            <form onSubmit={withModifiers(login, ['prevent'])}>
                <div class="grid gap-6">
                    {/* Email input */}
                    <KuiInput
                        label="Email"
                        icon="tabler--mail"
                        id="email"
                        type="email"
                        class="block w-full"
                        placeholder="Email"
                        v-model={loginForm.email}
                        required
                        autofocus
                        autocomplete="username"
                    />

                    {/* Password input */}
                    <KuiInput
                        label="Password"
                        icon="tabler--lock"
                        id="password"
                        type="password"
                        class="block w-full"
                        placeholder="Password"
                        v-model={loginForm.password}
                        required
                        autocomplete="current-password"
                    />

                    {/* Remember me */}
                    <div class="flex items-center justify-between">
                        <KuiCheckbox
                            label="Remember me"
                            name="remember"
                            v-model:checked={loginForm.remember}
                        />

                        <RouterLink
                            to={{ name: 'ForgotPassword' }}
                            class="text-sm text-blue-500 hover:underline"
                        >
                            Forgot your password?
                        </RouterLink>
                    </div>

                    {/* Login button */}
                    <KuiButton
                        type="submit"
                        disabled={loginForm.processing}
                        start-icon="tabler--login"
                        text="Login"
                    />

                    {/* Register link */}
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account?{' '}
                        <RouterLink
                            to={{ name: 'Register' }}
                            class="text-blue-500 hover:underline"
                        >
                            Register
                        </RouterLink>
                    </p>
                </div>
            </form>
        )
    },
})
