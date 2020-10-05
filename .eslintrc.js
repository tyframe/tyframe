module.exports = {
    root: true,
    ignorePatterns: ['webpack.config.js'],
    overrides: [
        {
            files: ['*.ts'],
            excludedFiles: "*.d.ts",
            parser: '@typescript-eslint/parser',
            plugins: [
              '@typescript-eslint',
            ],
            extends: [
              'eslint:recommended',
              'plugin:@typescript-eslint/eslint-recommended',
              'plugin:@typescript-eslint/recommended',
              'plugin:@typescript-eslint/recommended-requiring-type-checking',
              'plugin:prettier/recommended',
              'prettier/@typescript-eslint',
              'plugin:import/recommended',
              'plugin:import/stage-0',
              'plugin:import/errors',
              'plugin:import/warnings',
              'plugin:import/typescript'
            ],
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
            rules: {
                'import/no-cycle': 'error',
            },
        }
    ],
  };
