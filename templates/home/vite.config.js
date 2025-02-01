import { resolve } from 'path'
import { defineConfig } from 'vite'
import vueJSX from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vueJSX()],

    base: '/kui-dashboard/',

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
