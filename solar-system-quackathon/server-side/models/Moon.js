const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moonSchema = new Schema({
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
  history: {
    type: String,
  },
});

module.exports = mongoose.model("Moon", moonSchema);