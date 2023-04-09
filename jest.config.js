module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/mocks/**'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(svg)$': 'jest-transform-stub',
  },
  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!@babel).+\\.js$'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@vue/test-utils$': require.resolve('@vue/test-utils'),
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
}
