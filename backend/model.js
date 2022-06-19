const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  turbidity: {
    type: Number,
    required: true,
  },
  solid: {
    type: Number,
    required: false,
  },
  distance: {
    type: Number,
    required: false,
  },
  terrain: {
    type: Number,
    required: false,
  },
  debit: {
    type: Number,
    required: false,
  },
});

const Obj = mongoose.model("Obj", Schema);

module.exports = { Obj };