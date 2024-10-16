module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-prettier"
    ],
    plugins: [
        "stylelint-stylistic",
        "stylelint-order"
    ],
    rules: {
        // Use the 'stylistic/' prefix for stylistic rules
        "stylistic/string-quotes": "single",
        "stylistic/indentation": 2,
        "stylistic/max-empty-lines": 1,
        "stylistic/no-eol-whitespace": true,
        // Property order
        "order/properties-alphabetical-order": true,
        // Other custom rules as needed
    },
    ignoreFiles: [
        "**/node_modules/**",
        "**/build/**",
        "**/.next/**"
    ]
};
