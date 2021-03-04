const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((res) => {
      console.log(res);
      res.json(res);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
