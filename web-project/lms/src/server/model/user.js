const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'This field is required.'
    },
    pass: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }, 
    fullName: {
        type: String
    }, 
    dob: {
        type: String
    }, 
    profile:{
        type: String
    },
    registered: {
        type: Boolean
    }


});

mongoose.model('User', userSchema);