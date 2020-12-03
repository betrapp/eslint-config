module.exports = {
    extends: ['plugin:import/errors'],
    plugins: ['import'],
    rules: {
        'import/no-unresolved': 'error',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            },
        }
    },
};
