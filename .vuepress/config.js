module.exports = {
    title: "Multipass",
    base: '/docs/',

    markdown: {
        externalLinks: { target: '_self', rel: false }
    },

    plugins: [
        ['sitemap', {
            hostname: 'https://beta.multipass.rocks',
        }]
    ],

    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Multipass',
            description: ''
        },
        '/nl/': {
            lang: 'nl-BE',
            title: 'Multipass',
            description: ''
        }
    },

    head: [
        ['link', {
            rel: 'home',
            href: 'https://beta.multipass.rocks',
        }],
        ['link', {
            rel: 'app',
            href: 'https://beta.multipass.rocks/app',
        }],
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: 'https://beta.multipass.rocks/apple-touch-icon.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: 'https://beta.multipass.rocks/favicon-16x16.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: 'https://beta.multipass.rocks/favicon-32x32.png',
        }],
        ['link', {
            rel: 'manifest',
            href: 'https://beta.multipass.rocks/site.webmanifest',
        }],
        ['link', {
            rel: 'mask-icon',
            href: 'https://beta.multipass.rocks/safari-pinned-tab.svg',
        }],
        ['link', {
            rel: 'shortcut icon',
            href: 'https://beta.multipass.rocks/favicon.ico'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#A01829',
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: 'beta.multipass.rocks/mstile-144x144.png',
        }],
        ['meta', {
            name: 'theme-color',
            content: '#A01829',
        }],
        ['link', {
            rel: 'preconnect',
            crossorigin: true,
            href: 'https://fonts.gstatic.com',
        }],
        ['link', {
            href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;800;900&display=swap',
            rel: 'stylesheet',
        }],
        ['meta', {
            property: 'og:image',
            content: 'https://cdn.multipass.rocks/multipass/card.png',
        }],
        ['meta', {
            property: 'twitter:card',
            content: 'summary_large_image',
        }],
        ['meta', {
            property: 'twitter:image',
            content: 'https://cdn.multipass.rocks/multipass/card.png',
        }],
    ],

    themeConfig: {
        repo: 'daktadeo/multipass-docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',

        logo: '/assets/img/logo.svg',
        displayAllHeaders: false,
        activeHeaderLinks: false,
        //for some reason these are not translated
        searchPlaceholder: 'Press / to search',
        lastUpdated: 'Last Updated', // string | boolean

        sidebarDepth: 0,

        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Languages',
                // text for the edit-on-github link
                editLinkText: 'Edit this page on GitHub',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },

                // algolia docsearch options for current locale
                algolia: {},
                nav: [
                    { text: 'Home', link: 'https://beta.multipass.rocks', target: '_blank', rel: false },
                    { text: 'App', link: 'https://beta.multipass.rocks/app', target: '_blank', rel: false }
                ],
                sidebar: {
                    '/': require('./nav'),
                }
            },
            '/nl/': {
                selectText: 'Taal',
                label: 'Nederlands',
                editLinkText: 'Bewerk deze pagina op Github',
                serviceWorker: {
                    updatePopup: {
                        message: "Nieuwe inhoud beschikbaar.",
                        buttonText: "Refresh"
                    }
                },
                searchPlaceholder: 'Druk / om te zoeken',
                lastUpdated: 'Laatst aangepast op', // string | boolean
                nav: [
                    { text: 'Home', link: 'https://beta.multipass.rocks', target: '_blank', rel: false },
                    { text: 'App', link: 'https://beta.multipass.rocks/app', target: '_blank', rel: false }
                ],
                algolia: {},
                sidebar: {
                    '/nl/':  require('./nav-nl'),
                }
            }
        }
    },
}
