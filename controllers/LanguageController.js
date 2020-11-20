const db = require('../models/index');
const Language = db.Language;


// Create and Save a new Language
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Language
  const tutorial = {
    name: req.body.name,
    speak: req.body.speak,
    write: req.body.write,
    comp: req.body.comp
  };

  // Save Language in the database
  Language.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Language."
      });
    });
};

// Retrieve all Language from the database.
exports.findAll = (req, res) => {
    
    Language.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Languages."
        });
      });
};

// Find a single Language with an id
exports.findOne = (req, res) => {
  
};

// Update a Language by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Language with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Language from the database.
exports.deleteAll = (req, res) => {
  
};

