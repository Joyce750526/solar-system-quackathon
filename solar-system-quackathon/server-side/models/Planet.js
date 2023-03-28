const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planetSchema = new Schema({
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
  distanceFromSun: {
    type: Number,
  },
  facts: {
    type: [String],
  },
  state: {
    type: String,
  },
  moons: [{type: Schema.Types.ObjectId, ref: "Moon"}]
});

module.exports = mongoose.model("Planet", planetSchema);
