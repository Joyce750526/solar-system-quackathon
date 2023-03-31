import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const moonSchema = new Schema({
  name: {
    type: String,
  },
  diameter: {
    type: Number,
  },
  history: {
    type: String,
  },
  planetName: {
    type: String,
  }
});

const Moon = mongoose.model("Moon", moonSchema);

export default Moon;