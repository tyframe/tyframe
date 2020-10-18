module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@tyframe/(.*)$': '<rootDir>/$1/src/',
    },
    verbose: true,
    collectCoverage: true,
    coverageReporters: ['lcov', 'json'],
    collectCoverageFrom: ['packages/**/src/**'],
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