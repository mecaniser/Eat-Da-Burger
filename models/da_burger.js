var orm = require("../config/orm.js");

var da_burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createOne: function(cols, vals, cb) {
    orm.createOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  
  deleteOne: function(objColVals,condition, cb) {
    orm.deleteOne("burgers",objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = da_burger;
