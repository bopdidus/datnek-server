module.exports = app => {
    const languageController = require("../controllers/LanguageController");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", languageController.create);
  
    // Retrieve all Tutorials
    router.get("/", languageController.findAll);

    app.use('/api/languages', router);
  };