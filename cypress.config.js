const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reportDir: 'cypress/results',
    overwrite: false,
    json: true,
    html: true,
    timestamp: 'mmddyyyy_HHMMss'
  },
});
