const express = require('express') 
const app =express()
require("dotenv").config() 
app.use(express.json()) 
const cors = require('cors');
const userRoute =require("./routes/userRoute")
const authRoute =require("./routes/authRoute")
const mongoose = require('mongoose') 
app.use(cors())
// app.use('/api/auth',(req,res) =>{
//   res.status(200).json({ message: 'Data received successfully.' });
// } )
app.use('/api/auth',authRoute ) 
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
  


