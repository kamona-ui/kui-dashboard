import { context, build as esBuild } from 'esbuild'

const srcDir = 'src'
const outDir = 'dist'

bundle()

async function bundle() {
    await build({
        entryPoints: [`${srcDir}/index.cjs`],
        outfile: `${outDir}/index.cjs`,
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
                external: ['tailwindcss'],
                ...options,
            })

            await ctx.watch()
        } else {
            await esBuild({
                external: ['tailwindcss'],
                minify: true,
                ...options,
            })
        }
    } catch (error) {
        process.exit(1)
    }
}
