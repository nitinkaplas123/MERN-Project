require("dotenv").config({path:'./.env'})
const express=require('express')
const app=express()
require('./DB/conn')

const cors=require('cors')

const users=require("./models/userSchema")
const router=require("./routes/router")


app.use(cors()) // communication 
app.use(express.json()) // body parser to get body from postman 
app.use(router) // app.use pure app se use krna router ko


app.listen(process.env.PORT,()=>{
    console.log("running")
})

