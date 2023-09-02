const mongoose=require('mongoose')
const DB=process.env.DB

mongoose.connect(DB,{
    useNewUrlParser:false,
    useUnifiedTopology:true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message))