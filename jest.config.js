module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: ['<rootDir>/__test__/*.spec.ts'],
  testPathIgnorePatterns: ['/playground/', '/node_modules/'],
  watchPathIgnorePatterns: ['<rootDir>/temp'],
}
