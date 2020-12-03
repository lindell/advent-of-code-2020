module.exports = {
    root: true,
    plugins: ['import'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    env: {
        node: true,
    },
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
    rules: {
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/extensions': [
            'error',
            {
                ts: 'never',
                js: 'never',
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
        'import/resolver': {
            // use <root>/tsconfig.json
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            },
        },
    },
};
