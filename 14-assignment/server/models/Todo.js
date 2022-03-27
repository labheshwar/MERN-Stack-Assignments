const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todo = new Schema({
  email: String,
  list: Array,
});

module.exports = mongoose.model("Todo", todo);
