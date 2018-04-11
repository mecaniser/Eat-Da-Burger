//Activate the required NPM's
var express = require('express');

var router = express.Router();

//To use da_burgers data base functions we have to import its model
var da_burger = require('../models/da_burger.js');
//Next we will create the router 
router.get('/', function (req, res) {
    da_burger.all(function (info) {
        var nhdlbrsObj = {
            burgers: info
        };
        console.log(nhdlbrsObj);
        res.render('index', nhdlbrsObj);
    });
});

router.post('/burgers', function (req, res) {
    da_burger.create([
        'brgr_name'
    ], [
        req.body.brgr_name
    ], function (info) {
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log("condition", condition);

    da_burger.update({
        devoured: true
    }, condition, function (info) {
        res.redirect('/');
    });
});
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    da_burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;