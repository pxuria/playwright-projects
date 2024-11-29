// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  // maximum time for test
  timeout: 30 * 1000,
  expect: {
    // maximum time for expect
    timeout: 5000
  },
  use: {
    browserName: "chromium",
    headless: false
  },
});

