/**
 * Browser-sync configuration for development
 * https://browsersync.io/docs/options
 */
module.exports = {
    // Serve files from the root directory
    server: {
        baseDir: './',
        index: 'public/index.html',
        // Serve static assets with correct MIME types
        serveStaticOptions: {
            extensions: [
                'html',
                'css',
                'js',
                'json',
                'woff',
                'woff2',
                'ttf',
                'eot',
                'otf',
                'svg',
                'jpg',
                'jpeg',
                'png',
                'gif',
                'webp',
                'ico',
            ],
        },
    },

    // Files to watch for changes
    files: [
        'src/**/*.css',
        'src/**/*.js',
        'public/**/*.html',
        'src/charts/**/*.js',
        // Images
        'public/**/*.{jpg,jpeg,png,gif,svg,webp,ico}',
        'src/**/*.{jpg,jpeg,png,gif,svg,webp,ico}',
        // Fonts
        'public/**/*.{woff,woff2,ttf,eot,otf}',
        'src/**/*.{woff,woff2,ttf,eot,otf}',
    ],

    // Browser to open automatically
    browser: 'default',

    // Port to run the server on
    port: 3000,

    // Enable/disable the browser-sync UI
    ui: {
        port: 3001,
    },

    // Disable notifications in browser
    notify: false,

    // Reload delay (ms) - useful for slow file changes
    reloadDelay: 100,

    // Reload debounce (ms) - prevents multiple reloads
    reloadDebounce: 500,

    // Enable HTTPS
    https: false,

    // Open browser automatically
    open: true,

    // Log level: "info", "debug", "warn", "silent"
    logLevel: 'info',

    // Enable ghostMode (sync actions across browsers)
    ghostMode: {
        clicks: true,
        forms: true,
        scroll: true,
    },
}
