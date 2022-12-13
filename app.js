const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const userRoutes = require('./ROUTES/userRoutes')

 app.use(bodyParser.json())
 app.use("/get",userRoutes)

mongoose.set('strictQuery', true);
mongoose.connect( 'mongodb://127.0.0.1:27017/',(err)=>{
    if(!err){
        console.log ("database are succesfully connected...!")
    } else if (err){
        console.log(err)
    }
})
app.listen(3000,(err)=>{
    if(!err){
        console.log('app is listening...!')
    }else{
        console.log(err)
    }
})