import { defineComponent, reactive, withModifiers } from 'vue'
import { KuiInput, KuiButton } from '@kui-dashboard/vue-plugin'

export default defineComponent({
    setup() {
        const confirmPasswordForm = reactive({
            password: '',
            processing: false,
        })

        const submit = () => {
            //
        }

        return () => (
            <form onSubmit={withModifiers(submit, ['prevent'])}>
                <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    This is a secure area of the application. Please confirm
                    your password before continuing.
                </div>

                {/* Password input */}
                <div class="grid gap-4">
                    <KuiInput
                        label="Password"
                        icon="tabler--lock"
                        id="password"
                        type="password"
                        class="block w-full"
                        placeholder="Password"
                        v-model={confirmPasswordForm.password}
                        required
                        autocomplete="current-password"
                        autofocus
                    />

                    {/* Submit button */}
                    <KuiButton
                        type="submit"
                        class="w-full justify-center"
                        disabled={confirmPasswordForm.processing}
                        text="Confirm"
                    />
                </div>
            </form>
        )
    },
})
