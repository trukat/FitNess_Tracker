const router = require("express").Router();
const Workout = require("../models/workouts.js");

// finds most recent workout
router.get("/api/workouts", (req, res) => {
  Workout.find({}),
    Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ])
      .sort({ date: -1 })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

  // adds new workout to db
  router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercises: req.body } },
        { new: true }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

// creates a workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
