module.exports = {
    verbose: true,
    moduleFileExtensions: ['js'],
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)(test).js'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    }
  }