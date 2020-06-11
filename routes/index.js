var express = require('express');
var router = express.Router();
var model = require('../models/model.js')


/* GET home page. */
router.get('/', function (req, res, next) {
    model.getM(function (d, f) {
        console.log(d)
        console.log(f)
        res.render('index', {title: "Ui", d: d, f: f});
    })

});

module.exports = router;
