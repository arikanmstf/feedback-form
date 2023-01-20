const modulesToTransform = [];

module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest/setupFiles.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupFilesAfterEnv.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  testMatch: ['<rootDir>/!(cypress)/**/*.(spec|test).+(js|jsx|ts|tsx)'],
  globals: {
    window: {},
  },
  globalSetup: '<rootDir>/global-setup.js',
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!(${modulesToTransform.join('|')})).+\\.js$`],
};
