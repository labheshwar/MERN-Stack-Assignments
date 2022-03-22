const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', (err) => {
    if (err) {
        console.log("Error connecting to Database");
    } else {
        console.log("Connected to Database");
    }
});
