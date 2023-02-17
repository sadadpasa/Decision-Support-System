const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  attendance: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: false,
  },
  distance: {
    type: Number,
    required: false,
  },
  gpa: {
    type: Number,
    required: false,
  },
  psychotest: {
    type: Number,
    required: false,
  },
});

const Obj = mongoose.model("Obj", Schema);

module.exports = { Obj };