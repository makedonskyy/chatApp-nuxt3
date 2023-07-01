// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        // ...
        '@nuxtjs/tailwindcss'
    ],
    // @ts-ignore
    components: true,
    typescript: {
        tsConfig: {
            compilerOptions: {
                strict: true
            }
        }
    },
    plugins: [],
    srcDir: 'src',
    app: {
        head: {
            title: 'chat app',
            htmlAttrs: {
                lang: 'ru'
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'format-detection', content: 'telephone=no'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ]
        }
    },
    nitro: {
        plugins: []
    }
})
