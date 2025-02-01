// Adapted from the oficial Alpine.js file:
// https://github.com/alpinejs/alpine/blob/main/scripts/build.js

import fs from 'fs'
import zlib from 'zlib'
import { context, build as esBuild } from 'esbuild'

const srcDir = 'src'
const outDir = 'dist'

bundle()

async function bundle() {
    await build({
        entryPoints: [`${srcDir}/cdn.js`],
        outfile: `${outDir}/index.cdn.js`,
        bundle: true,
        platform: 'browser',
        define: { CDN: 'true' },
    })

    await build({
        entryPoints: [`${srcDir}/cdn.js`],
        outfile: `${outDir}/index.cdn.min.js`,
        bundle: true,
        minify: true,
        platform: 'browser',
        define: { CDN: 'true' },
    })

    await build({
        entryPoints: [`${srcDir}/layout.cdn.js`],
        outfile: `${outDir}/layout.cdn.js`,
        bundle: true,
        platform: 'browser',
        define: { CDN: 'true' },
    })

    await build({
        entryPoints: [`${srcDir}/layout.cdn.js`],
        outfile: `${outDir}/layout.cdn.min.js`,
        bundle: true,
        minify: true,
        platform: 'browser',
        define: { CDN: 'true' },
    })

    outputSize(`${outDir}/layout.cdn.min.js`)
    outputSize(`${outDir}/index.cdn.min.js`)

    // Then output two files: an esm module and a cjs module.
    // The ESM one is meant for "import" statements (bundlers and new browsers)
    // and the cjs one is meant for "require" statements (node).
    await build({
        entryPoints: [`${srcDir}/module.js`],
        outfile: `${outDir}/index.esm.js`,
        bundle: true,
        platform: 'neutral',
        mainFields: ['module', 'main'],
    })

    await build({
        entryPoints: [`${srcDir}/module.js`],
        outfile: `${outDir}/index.cjs.js`,
        bundle: true,
        target: ['node10.4'],
        platform: 'node',
    })
}

async function build(options) {
    options.define || (options.define = {})
    options.define['process.env.NODE_ENV'] = process.argv.includes('--watch')
        ? `'production'`
        : `'development'`

    try {
        if (process.argv.includes('--watch')) {
            let ctx = await context({
                external: ['alpinejs'],
                ...options,
            })

            await ctx.watch()
        } else {
            await esBuild({
                external: ['alpinejs'],
                minify: true,
                ...options,
            })
        }
    } catch (error) {
        process.exit(1)
    }
}

function outputSize(file) {
    let size = bytesToSize(
        zlib.brotliCompressSync(fs.readFileSync(file)).length,
    )

    console.log('\x1b[32m', `${file}: ${size}`)
}

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]}`
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}
