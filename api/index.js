const express = require('express') 
const app =express()
require("dotenv").config() 
const userRoute =require("./routes/userRoute")
const mongoose = require('mongoose')
app.use('/api/user',userRoute )
mongoose.connect(process.env.MONGODBURL).then(() =>{
  console.log("connected to database") 
  app.listen(3000 ,() =>{
    console.log("app run at http://localhost:3000")
  })
}).catch(e => console.log(e))
  


