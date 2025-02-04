## K UI Dashboard Template's alpinejs plugin

##### To get started:

```bash
yarn add @kui-dashboard/vue-plugin @iconify/tailwind

yarn add @kui-dashboard/tailwindcss-plugin @iconify/tailwind --dev
# Note: don't forget to install the icons set, for example `@iconify-json/tabler`
```

```js
// tailwind.config.js
import forms from '@tailwindcss/forms'
import { addIconSelectors } from '@iconify/tailwind'
import twPlugin from '@kui-dashboard/tailwindcss-plugin'

export default {
    ...

    plugins: [
        forms,
        addIconSelectors(['tabler']),
        twPlugin,
    ],

    // With options example.
    // Override what you want to fit your needs.
    plugins: [
        forms,
        addIconSelectors(['tabler']),
        twPlugin({
            // Options: https://github.com/kamona-ui/kui-dashboard/blob/main/plugins/tailwindcss/README.md
        }),
    ],
}

```

```css
/* Your main css file */
@import 'tailwindcss/base';
@import '@kui-dashboard/vue-plugin/dist/kui-dashboard.css';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

### Example

```jsx
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
```
