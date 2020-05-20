const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  routine: [
    {
    workoutype: {
    type: String,
    trim:true
  },
  
    workoutname: {
    type: String,
    trim:true
  },
    workoutDuration: {
    type: Number,
  },
    weight: {
    type: String,
    trim:true
  },
    reps: {
    type: Number,
  },
    sets: {
    type: String,
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