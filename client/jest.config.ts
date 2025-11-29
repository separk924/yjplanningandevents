import nextJest from 'next/jest.js';

const createJestConfig = nextJest({dir: './'});

const customJestConfig = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['client/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': 'client/src/$1',
    },
}

export default createJestConfig(customJestConfig);