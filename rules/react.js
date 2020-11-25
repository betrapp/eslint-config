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
        'react/react-in-jsx-scope': 'off',
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
