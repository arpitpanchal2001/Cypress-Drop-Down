const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url:"https://www.lambdatest.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    
    blockHosts:['www.google-analytics.com',
      'js.zohocdn.com',
      'salesiq.zoho.com',
      'salesiq.zohopublic.com',
      'ws.zoominfo.com',
      'script.crazyegg.com',
      'js.zi-scripts.com'
    ],
    specPattern : 'cypress/e2e/configration/*.js'
    
  },
});
