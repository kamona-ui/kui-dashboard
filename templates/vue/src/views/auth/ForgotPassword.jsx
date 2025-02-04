import { defineComponent, reactive, withModifiers } from 'vue'
import { KuiInput, KuiButton } from '@kui-dashboard/vue-plugin'

export default defineComponent({
    setup() {
        const forgotPasswordForm = reactive({
            email: '',
            processing: false,
        })

        const submit = () => {
            //
        }

        return () => (
            <>
                <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                <form onSubmit={withModifiers(submit, ['prevent'])}>
                    <div class="grid gap-6">
                        {/* Email input */}
                        <KuiInput
                            label="Email"
                            icon="tabler--mail"
                            id="email"
                            type="email"
                            class="block w-full"
                            placeholder="Email"
                            v-model={forgotPasswordForm.email}
                            required
                            autofocus
                            autocomplete="username"
                        />

                        {/* Submit button */}
                        <KuiButton
                            type="submit"
                            class="w-full justify-center gap-2"
                            disabled={forgotPasswordForm.processing}
                            text="Email Password Reset Link"
                        />
                    </div>
                </form>
            </>
        )
    },
})
