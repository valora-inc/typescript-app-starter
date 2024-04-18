/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */

module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  // Allow absolute imports from the tsconfig baseUrl
  moduleDirectories: ['node_modules', '<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
  testPathIgnorePatterns: ['dist'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['./src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
}
