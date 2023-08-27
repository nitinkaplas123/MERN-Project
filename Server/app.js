require('dotenv').config();
const express =require('express')
const app=express()
const PORT=8003

const mongoose=require('mongoose')


const DB="mongodb+srv://nitinkaplas90643:RFe8gGBzdzXtNRRC@nitingoogle.jtccuvy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB).then((res)=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log(`error is : ${err}`)
})

app.listen(PORT,()=>{
    console.log("running")
})