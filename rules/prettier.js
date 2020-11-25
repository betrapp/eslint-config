module.exports = {
    extends: [
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['eslint-plugin-prettier'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
};
