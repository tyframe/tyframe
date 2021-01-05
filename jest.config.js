module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@tyframe/(.*)$': '<rootDir>/packages/$1/src/',
    },
    verbose: true,
    collectCoverage: true,
    coverageReporters: ['lcov', 'json'],
    collectCoverageFrom: ['packages/**/src/**', '!packages/example/src/**', '!packages/**/*.d.ts', '!packages/**/src/index.ts'],
    // coverageThreshold: {
    //     global: {
    //         branches: 90,
    //         functions: 90,
    //         lines: 90,
    //         statements: 90,
    //     },
    // },
    testRegex: '(/test/.*|(\\.|/)spec)\\.ts$',
};
