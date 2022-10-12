module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    overrides: [
        {
            files: ['*.astro', '*.tsx'],
            options: {
                parser: 'astro',
            },
        },
    ],
}
