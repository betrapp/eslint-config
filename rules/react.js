module.exports = {
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.tsx', '.js'],
            },
        ],
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-curly-newline': 'off',
        'react/forbid-prop-types': 'off',
        'react/no-access-state-in-setstate': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-fragments': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': [0],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
