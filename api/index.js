const express = require('express') 
const app =express()
require("dotenv").config() 
app.use(express.json())
const userRoute =require("./routes/userRoute")
const authRoute =require("./routes/authRoute")
const mongoose = require('mongoose')
app.use('/api/user',userRoute )
app.use('/api/user',authRoute ) 
// handle error 
app.use((error ,req,res,next)=>{
  let statusCode = error.statusCode || 500 
  let message   = error.message || " Intervall error " 
  res.status(statusCode).json({
    success:false ,
    message,
    statusCode
  })
})
mongoose.connect(process.env.MONGODBURL).then(() =>{
  console.log("connected to database") 
  app.listen(3000 ,() =>{
    console.log("app run at http://localhost:3000")
  })
}).catch(e => console.log(e))
  


