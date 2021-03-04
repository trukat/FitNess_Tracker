const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
            },
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter amount of time"
            },
            weight: {
                type: Number,
                trim: true
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            distance: {
                type: Number,
                trim: true,
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;