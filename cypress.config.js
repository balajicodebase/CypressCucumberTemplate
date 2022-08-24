const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: "u3eumm",
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
  env: {
      url: 'https://rahulshettyacademy.com/'
   },
   retries: {
    runMode: 0,
    openMode: 0
   }
});