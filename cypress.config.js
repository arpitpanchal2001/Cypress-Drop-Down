const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url:"https://www.lambdatest.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : 'cypress/e2e/configration/*.js'
    
  },
});
