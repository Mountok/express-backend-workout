const express = require("express");
const bodyParser = require('body-parser');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 4040

app.use(bodyParser.json())
app.use('/api/v1/workouts',v1WorkoutRouter);

app.listen(PORT,(err)=>{
    err ? console.log(err) : console.log('Server has been started');
});

