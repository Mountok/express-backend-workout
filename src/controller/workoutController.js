
const workoutServices = require('../services/workoutServices')


const getAllWorkouts = (req,res) => {
    const allWorkouts = workoutServices.getAllWorkouts();
    res.send({status: 'OK', date: allWorkouts})
}

const getOneWorkout = (req,res) => {
    const {
        params: {workoutId}
    } = req;
    if (!workoutId){
        return;
    }
    const workout = workoutServices.getOneWorkout(workoutId);
    res.send({status: 'OK', data: workout});
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
        res.status(400).send({
            status: 'FAILED',
            data: {
                error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
            },
        });
        return
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    }
    try {
        const createWorkout = workoutServices.createNewWorkout(
            newWorkout
        );
        res.status(201).send({
            status: 'OK',
            data: createWorkout
        });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: {error: error?.message || error},
        })
    }
    
}

const updateOneWorkout = (req,res) => {
    const {
        body,
        params: {workoutId},
    } = req;
    if(!workoutId){
        return;
    }
    const updatedWorkout = workoutServices.updateOneWorkout(workoutId,body);
    res.send({
        status: 'OK',
        data: updatedWorkout,
    })
}

const deleteOneWorkout = (req,res) => {
    const {
        params: {workoutId}
    } = req;
    if(!workoutId){
        return
    }
    workoutServices.deleteOneWorkout(workoutId);
    res.status(204).send({status: 'OK'})
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}