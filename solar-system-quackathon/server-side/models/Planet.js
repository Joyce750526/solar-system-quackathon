import mongoose from 'mongoose';
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
    enum: {
      values: ['Solid', 'Gas'],
      // This message can be shown if an unsupported value is entered
      message: '{VALUE} is not supported',
    },
  },
  moons: [{type: Schema.Types.ObjectId, ref: "Moon"}]
});

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;
