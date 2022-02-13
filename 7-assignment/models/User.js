const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
    userId: String,
    name: String,
    email: { type: String, unique: true }
});

module.exports = mongoose.model('User', user);