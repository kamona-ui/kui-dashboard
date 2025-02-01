import forms from '@tailwindcss/forms'
import { addIconSelectors } from '@iconify/tailwind'
import twPlugin from '@kui-dashboard/tailwindcss-plugin'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',

    content: ['./src/**/*.{html,hbs,js}'],

    theme: {
        extend: {},
    },

    plugins: [forms, addIconSelectors(['tabler']), twPlugin],
}
