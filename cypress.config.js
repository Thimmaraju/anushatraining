const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

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
      // implement node event listeners here
    },
  },
});
