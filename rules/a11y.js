module.exports = {
    extends: ['plugin:jsx-a11y/recommended'],
    plugins: ['jsx-a11y'],
    rules: {
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
    },
};
