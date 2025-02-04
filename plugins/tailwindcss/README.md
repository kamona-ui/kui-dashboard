## K UI Dashboard Template's tailwindcss plugin

##### To get started:

```bash
yarn add @kui-dashboard/tailwindcss-plugin @iconify/tailwind  --dev
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
            colorVars: {
                '--color-primary': 'var(--color-fuchsia)',
                '--color-primary-50': 'var(--color-fuchsia-50)',
                '--color-primary-100': 'var(--color-fuchsia-100)',
                '--color-primary-light': 'var(--color-fuchsia-light)',
                '--color-primary-lighter': 'var(--color-fuchsia-lighter)',
                '--color-primary-dark': 'var(--color-fuchsia-dark)',
                '--color-primary-darker': 'var(--color-fuchsia-darker)',

                '--color-fuchsia-50': '#fdf4ff',
                '--color-fuchsia-100': '#fae8ff',
                '--color-fuchsia-lighter': '#f0abfc',
                '--color-fuchsia-light': '#e879f9',
                '--color-fuchsia': '#d946ef',
                '--color-fuchsia-dark': '#c026d3',
                '--color-fuchsia-darker': '#a21caf',

                '--dark-eval-0': '#151823',
                '--dark-eval-1': '#222738',
                '--dark-eval-2': '#2A2F42',
                '--dark-eval-3': '#2C3142',
            },
            darkColor: {
                0: 'var(--dark-eval-0)',
                1: 'var(--dark-eval-1)',
                2: 'var(--dark-eval-2)',
                3: 'var(--dark-eval-3)',
            },
            primaryColors: {
                50: 'var(--color-primary-50)',
                100: 'var(--color-primary-100)',
                lighter: 'var(--color-primary-lighter)',
                light: 'var(--color-primary-light)',
                DEFAULT: 'var(--color-primary)',
                dark: 'var(--color-primary-dark)',
                darker: 'var(--color-primary-darker)',
            },
            successColors: {
                // This plugin use tailwindcss green colors as success.
                // [50, 100, 400 as lighter, 500 as default, 600 as dark, 700 as darker]
            },
            warningColors: {
                // This plugin use tailwindcss orange colors as success.
                // [50, 100, 400 as lighter, 500 as default, 600 as dark, 700 as darker]
            },
            dangerColors: {
                // This plugin use tailwindcss red colors as success.
                // [50, 100, 400 as lighter, 500 as default, 600 as dark, 700 as darker]
            },
            infoColors: {
                // This plugin use tailwindcss cyan colors as success.
                // [50, 100, 400 as lighter, 500 as default, 600 as dark, 700 as darker]
            },
            fontFamily: {
                sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
            }
        }),
    ],
}

```
