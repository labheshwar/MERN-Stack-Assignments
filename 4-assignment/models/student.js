const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const student = new Schema({
    name: String,
    class: String,
    age: Number,
    teacher: String
});

module.exports = mongoose.model('Student', student);