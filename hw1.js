var express = require('express');
var router = express.Router();

const request = require('request')

// router.get('/', function(req, res, next){
//     res.send('Homework 1 CS 591');
// });

router.get('/:input_string', function(req,res,next){
    let str = req.params.input_string;
    str_len = str.length;
    res.json({string: str, length: str_len});
});

router.post('/', function(req,res,next){
    let str = req.body.string;
    let str_len = str.length;
    res.json({string: str, length: str_len});
});

module.exports=router;

