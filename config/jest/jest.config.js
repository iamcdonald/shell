module.exports = {
  rootDir: process.cwd(),
  moduleNameMapper: {
    '\\.css$': '<rootDir>/config/jest/identity-obj-proxy-esm.js'
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.spec.{js,jsx}'
  ],
  coverageThreshold: {
    global: {
      lines: 100,
      statements: 100,
      functions: 100,
      branches: 100
    }
  },
  coverageReporters: [
    'json',
    'html',
    'lcov',
    'text'
  ],
  testMatch: [
    '<rootDir>/src/**/*.spec.{js,jsx}'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ]
}
