const express = require('express');
const workoutController = require('../../controller/workoutController')
const router = express.Router();

router.get('/', workoutController.getAllWorkouts)

router.get('/:workoutID', workoutController.getOneWorkout)

router.post('/', workoutController.createNewWorkout)

router.patch('/:workoutID', workoutController.updateOneWorkout)

router.delete('/:workoutID', workoutController.deleteOneWorkout)

module.exports = router