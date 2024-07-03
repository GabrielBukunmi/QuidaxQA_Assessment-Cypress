const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  //this timeout will apply to all spec file i.e all .js test
  //if it is removed, the default timeout by cypress in project setting will be applied
  defaultCommandTimeout: 9000,
  env:{
    baseUrl: 'https://demo.seleniumeasy.com/',
  },
  //retries is used to try the failed test cases again
  retries:{
    runMode:1
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // implement node event listeners here
    },
    specPattern: ['cypress/integration/examples/**/*.js', 'cypress/integration/examples/**/*.feature'],

  },
});
