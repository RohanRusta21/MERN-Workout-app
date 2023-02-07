//MongoDB Schemas

const mongoose = require('mongoose')

// initialize a schema
const Schema = mongoose.Schema

//Create a new schema 
const workoutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
},{timestamps: true})


// make a model based on schema 
module.exports = mongoose.model('workout',workoutSchema)
