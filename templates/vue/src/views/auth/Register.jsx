import { defineComponent, reactive, withModifiers } from 'vue'
import { KuiButton, KuiInput, KuiCheckbox } from '@kui-dashboard/vue-plugin'
import { RouterLink } from 'vue-router'

export default defineComponent({
    setup() {
        const registerForm = reactive({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            terms: false,
            processing: false,
        })

        const register = () => {
            //
        }

        return () => (
            <form onSubmit={withModifiers(register, ['prevent'])}>
                <div class="grid gap-6">
                    {/* Name input */}
                    <KuiInput
                        label="Name"
                        icon="tabler--user"
                        id="name"
                        type="text"
                        placeholder="Name"
                        v-model={registerForm.name}
                        required
                        autofocus
                        autocomplete="name"
                    />

                    {/* Email input */}
                    <KuiInput
                        label="Email"
                        icon="tabler--mail"
                        id="email"
                        type="email"
                        placeholder="Email"
                        v-model={registerForm.email}
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
                        placeholder="Password"
                        v-model={registerForm.password}
                        required
                        autocomplete="current-password"
                    />

                    {/* Password confirmation input */}
                    <KuiInput
                        label="Confirm Password"
                        icon="tabler--lock"
                        id="password_confirmation"
                        type="password"
                        placeholder="Confirm Password"
                        v-model={registerForm.password_confirmation}
                        required
                        autocomplete="new-password"
                    />

                    {/* Terms */}
                    <KuiCheckbox
                        name="terms"
                        id="terms"
                        v-model:checked={registerForm.terms}
                    >
                        <div class="ml-1">
                            I agree to the{' '}
                            <a
                                target="_blank"
                                href="#"
                                class="text-sm text-blue-600 underline hover:text-blue-900"
                            >
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a
                                target="_blank"
                                href="#"
                                class="text-sm text-blue-600 underline hover:text-blue-900"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </KuiCheckbox>

                    {/* Register button */}
                    <KuiButton
                        type="submit"
                        disabled={registerForm.processing}
                        start-icon="tabler--user-plus"
                        text="Register"
                    />

                    {/* Login link */}
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <RouterLink
                            to={{ name: 'Login' }}
                            class="text-blue-500 hover:underline"
                        >
                            Login
                        </RouterLink>
                    </p>
                </div>
            </form>
        )
    },
})
