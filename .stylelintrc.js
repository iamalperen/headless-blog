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
        "stylistic/string-quotes": "single",
        "stylistic/indentation": 2,
        "stylistic/max-empty-lines": 1,
        "stylistic/no-eol-whitespace": true,
        "order/properties-alphabetical-order": true,
    },
    ignoreFiles: [
        "**/node_modules/**",
        "**/build/**",
        "**/.next/**"
    ]
};
