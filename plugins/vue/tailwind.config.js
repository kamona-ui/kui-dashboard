import forms from '@tailwindcss/forms'
import { addIconSelectors } from '@iconify/tailwind'
import twPlugin from '@kui-dashboard/tailwindcss-plugin'

export default {
    darkMode: 'class',

    content: ['./index.html', './src/**/*.{js,jsx,vue}'],

    theme: {
        extend: {},
    },

    plugins: [forms, addIconSelectors(['tabler']), twPlugin],
}
