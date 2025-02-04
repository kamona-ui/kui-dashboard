import { defineComponent, reactive, withModifiers } from 'vue'
import { KuiInput, KuiButton } from '@kui-dashboard/vue-plugin'

export default defineComponent({
    props: {
        email: String,
        token: String,
    },

    setup(props) {
        const resetPasswordForm = reactive({
            token: props.token,
            email: props.email,
            password: '',
            password_confirmation: '',
            processing: false,
        })

        const submit = () => {
            //
        }

        return () => (
            <form onSubmit={withModifiers(submit, ['prevent'])}>
                <div class="grid gap-4">
                    {/* Email input */}
                    <KuiInput
                        label="Email"
                        icon="tabler--mail"
                        id="email"
                        type="email"
                        class="block w-full"
                        placeholder="Email"
                        v-model={resetPasswordForm.email}
                        required
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
                        v-model={resetPasswordForm.password}
                        required
                        autocomplete="new-password"
                    />

                    {/* Password confirmation input */}
                    <KuiInput
                        label="Confirm Password"
                        icon="tabler--lock"
                        id="password_confirmation"
                        type="password"
                        class="block w-full"
                        placeholder="Confirm Password"
                        v-model={resetPasswordForm.password_confirmation}
                        required
                        autocomplete="new-password"
                    />

                    {/* Submit button */}
                    <KuiButton
                        type="submit"
                        class="w-full justify-center gap-2"
                        disabled={resetPasswordForm.processing}
                        text="Reset Password"
                    />
                </div>
            </form>
        )
    },
})
