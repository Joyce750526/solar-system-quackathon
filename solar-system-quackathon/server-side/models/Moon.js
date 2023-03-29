import mongoose from 'mongoose';
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

const Moon = mongoose.model("Moon", moonSchema);

export default Moon;