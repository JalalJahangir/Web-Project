const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('user');

router.post('/register', (req, res) => {

    insertRecord(req, res);

});

function insertRecord(req, res) {
    var user = new User();
    user.userName = req.body.userName ;
    user.password = req.body.password ; 

    user.email = req.body.email ;
    user.phone = req.body.phone ;
    
    user.address = req.body.address ;
    user.fullName = req.body.fullName ;
    
    user.dob = req.body.dob ;
    user.registered = req.body.registered ;  
   
    user.save((err, doc) => {
        if (!err)
            res.redirect('/login');
    });
}
