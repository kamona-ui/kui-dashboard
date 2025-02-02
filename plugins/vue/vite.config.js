import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [vue(), vueJsx()],

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },

    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib.js'),
            name: 'KuiDashboard',
            // the proper extensions will be added
            fileName: 'kui-dashboard',
        },

        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue', 'vue-router'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
