module.exports = {
    root: true,
    override: [
        {
            files: ['*.ts'],
            excludeFiles: "*.d.ts",
            parser: '@typescript-eslint/parser',
            plugins: [
              '@typescript-eslint',
            ],
            extends: [
              'eslint:recommended',
              'plugin:@typescript-eslint/recommended',
              'plugin:import/recommended',
              'plugin:import/stage-0',
              'plugin:import/errors',
              'plugin:import/warnings',
              'plugin:import/typescript'
            ],
            rules: {
                'import/no-cycle': 'error',
            },
        }
    ],
  };
