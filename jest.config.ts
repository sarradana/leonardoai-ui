// jest.config.js
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle CSS modules and static assets
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/components/(.*)$': '<rootDir>/app/components/$1', // if you use path aliases
  },
};

module.exports = createJestConfig(customJestConfig);
