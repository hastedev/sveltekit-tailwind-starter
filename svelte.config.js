import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        postcss: true,
        scss: {
            outputStyle: 'compressed'
        },
        preserve: ['ld+json']
    }),

    kit: {
        adapter: adapter(),
        prerender: {
            crawl: true,
            enabled: true,
            onError: 'fail',
            entries: ['*']
        },

        // hydrates the <div id="svelte"> element in src/app.html
        target: '#svelte',

        // edit vite config and aliases
        vite: {
            resolve: {
                alias: {
                    $lib: path.resolve('./src/lib'),
                    '$lib/*': path.resolve('./src/lib/*'),
                    $styles: path.resolve('./src/lib/styles'),
                    '$styles/*': path.resolve('./src/lib/styles/*'),
                    $components: path.resolve('./src/lib/components'),
                    '$components/*': path.resolve('./src/lib/components/*')
                }
            }
        }
    }
}

export default config
