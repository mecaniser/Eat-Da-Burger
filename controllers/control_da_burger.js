//Activate the required NPM's
var express = require('express');
var router = express.Router();

//To use da_burgers data base functions we have to import its model
var da_burger = require('../models/da_burger.js');



//Next we will create the routes
//``````````````````````````````

//Render all new oject to DOM
router.get('/', function (req, res) {
    da_burger.all(function (info) {
        var nhdlbrsObj = {
            burgers: info
        };
        // console.log(nhdlbrsObj);
        res.render("index", nhdlbrsObj);
    });
});
//New Fresh Burger
//Creates new entity
router.post('/burgers', function (req, res) {
    da_burger.createOne([
        'brgr_name'
    ], [
        req.body.brgr_name
    ], function (info) {
        res.redirect('/');
    });
});

router.put('/burgers/:id', function (req, res) {
    var newBurger = 'id = ' + req.params.id;
    console.log(" Just Created ", newBurger);

    da_burger.updateOne({
        devoured: true
    }, newBurger, function (info) {
        res.redirect('/');
    });
});

router.delete('/burgers', function (req, res) {
    var deleteBurger = 'id = ' + req.params.id;
    console.log("Just Deleted", deleteBurger);

    da_burger.deleteOne({
        devoured: false
    }, deleteBurger, function (info) {
        res.redirect('/');
    });
});

module.exports = router;