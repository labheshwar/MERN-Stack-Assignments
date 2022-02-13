const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/facebook_auth', (err) => {
    if (err){
        console.log("Error connecting to Database");
    } else {
        console.log("Connected to Database");
    }
});