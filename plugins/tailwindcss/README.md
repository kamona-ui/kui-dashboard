## K UI Dashboard Template's tailwindcss plugin

##### To get started:

```bash
yarn add @kui-dashboard/tailwindcss-plugin --dev
```

```js
// tailwind.config.js
import forms from '@tailwindcss/forms'
import twPlugin from '@kui-dashboard/tailwindcss-plugin'

export default {
    ...

    plugins: [
        forms,
        twPlugin
    ],
}

```
