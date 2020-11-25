module.exports = {
    extends: ['./rules/a11y', './rules/import', './rules/react', './rules/typescript'].map(
        require.resolve
    ),
    rules: {},
};
