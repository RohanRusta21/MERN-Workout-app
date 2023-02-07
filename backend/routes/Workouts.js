const express = require('express')

const router = express.Router()

const {getWorkouts,
       getWorkout,
       createWorkout,
       deleteWorkout,
       updateWorkout} = require('../controllers/workoutController')



//GET all workouts
router.get('/',getWorkouts)

//GET a single workout 
router.get('/:id',getWorkout)

//Post a new workout
router.post('/',createWorkout)

//DELETE a new workout
router.delete('/:id',deleteWorkout)

//Update a workout
router.patch('/:id',updateWorkout)

module.exports = router


