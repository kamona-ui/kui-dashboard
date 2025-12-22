import { resolve } from 'path'
import { defineConfig } from 'vite'
import vueJSX from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vueJSX(), tailwindcss()],

    base: '/kui-dashboard/',

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
