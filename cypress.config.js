const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    //"specPattern": "**/*.feature",
    "projectId": "hagkk9",
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "defaultCommandTimeout":20000,
    "pageLoadTimeout": 120000,
   // "retries": { "runMode": 1, "openMode": 3 },
    "videoCompression" :0,
    "video": true,
    "videosFolder": "cypress/Anusha",
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "env": {

        "username":"Admin",
        "password": "admin123"
    },
 

    
    setupNodeEvents(on, config) {

      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
      // allureWriter(on, config);
      // return config;
      // implement node event listeners here
    },
  },
});
