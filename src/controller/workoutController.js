
const workoutServices = require('../services/workoutServices')


const getAllWorkouts = (req,res) => {
    const allWorkouts = workoutServices.getAllWorkouts();
    res.send({status: 'OK', date: allWorkouts})
}

const getOneWorkout = (req,res) => {
    const workout = workoutServices.getOneWorkout();
    res.send('Get an existung workout')
}

const createNewWorkout = (req,res) => {
    const {body} = req;

    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    }
    const createWorkout = workoutServices.createNewWorkout(
        newWorkout
    );
    res.status(201).send({
        status: 'OK',
        data: createWorkout
    });
}

const updateOneWorkout = (req,res) => {
    const updateWorkout = workoutServices.updateOneWorkout();
    res.send('Update an existing workout')
}

const deleteOneWorkout = (req,res) => {
    workoutServices.deleteOneWorkout();
    res.send('Delete an existing workout')
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}