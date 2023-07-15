const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')


require('dotenv').config()



const workoutRoutes = require('./routes/Workouts')



mongoose.set('strictQuery', false);
//express app
const app = express()
app.use(cors());

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

//Connect to Database(it is async call)
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen to request
        app.listen(process.env.PORT,()=>{
            console.log('Connected to DB and listening to port',process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })



