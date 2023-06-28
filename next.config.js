/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio", 'lh3.googleusercontent.com', 'res.cloudinary.com', 'task.com']
    },
    experimental: {
        serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-US', 'fr', 'nl-NL'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en-US',
        localeDetection: false,
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        domains: [
            {
                domain: 'example.com',
                defaultLocale: 'en-US',
            },
            {
                domain: 'example.nl',
                defaultLocale: 'nl-NL',
            },
            {
                domain: 'example.fr',
                defaultLocale: 'fr',
                // an optional http field can also be used to test
                // locale domains locally with http instead of https
                http: true,
            },
        ],
    },
    trailingSlash: true,
}

module.exports = nextConfig
