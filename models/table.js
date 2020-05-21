const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  routine: [
    {
    workouttype: {
    type: String,
    trim:true
  },
  
    workoutname: {
    type: String,
    trim:true
  },
    workoutDuration: {
    type: Number
  },
    weight: {
    type: Number,
    trim:true
  },
    reps: {
    type: Number,
  },
    sets: {
    type: Number,
    trim:true
  },
    distance: {
    type: Number,
    trim:true
  }
}
]
});  

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;