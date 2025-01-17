module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    transformIgnorePatterns: [
        '/node_modules/(?!your-package-to-transform)/'
    ],
    testEnvironment: 'jest-environment-jsdom',
};
