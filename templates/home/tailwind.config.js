import prespective from './tailwindcss-perspective'
import { addIconSelectors } from '@iconify/tailwind'
import twPlugin from '@kui-dashboard/tailwindcss-plugin'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',

    content: ['./index.html', './src/**/*.{js,jsx}'],

    theme: {
        extend: {},
    },

    plugins: [prespective, twPlugin, addIconSelectors(['tabler'])],
}
