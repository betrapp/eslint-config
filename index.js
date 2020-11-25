module.exports = {
    env: {
        node: true,
        es6: true,
    },
    parserOptions: { ecmaVersion: 8 },
    extends: ['./rules/a11y', './rules/base', './rules/import', './rules/prettier', './rules/react', './rules/typescript'].map(
        require.resolve
    ),
    rules: {},
};
