const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
    confirmPassword: String
});

module.exports = mongoose.model('User', user);