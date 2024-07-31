const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hob7fj",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      json: false,
      html: true,
      timestamp: 'mmddyyyy_HHMMss'
    }},
});
