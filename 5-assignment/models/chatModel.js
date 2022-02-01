const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chat = new Schema({
    name: String,
    message: Array
});

module.exports = mongoose.model ('Chat', chat);