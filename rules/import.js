module.exports = {
    extends: ['plugin:import/errors'],
    plugins: ['import'],
    rules: {
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
            }
        },
    },
};
