module.exports = {
  globalSetup: './src/jest-cf/setupTests.js',
  globalTeardown: './src/jest-cf/teardownTests.js',
  setupFilesAfterEnv: ['./src/jest-cf/setupFilesAfterEnv.js'],
};
