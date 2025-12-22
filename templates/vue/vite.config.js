import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJSX(), tailwindcss()],

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },

    base: '/kui-dashboard/vue/',
})
