const express = require('express')
const router = express.Router()
const users = require("../models/userSchema")

// router.get('/',(req,res)=>{

// })


// Register the user
router.post("/registeruser", async (req, res) => {
    // console.log(req.body);
    const { name, email, age, mobile, work, address, description } = req.body
    if (!name || !email || !age || !mobile || !work || !address || !description) {
        res.status(422).json("pls fill the whole data")
    }

    try {
        const preUser = await users.findOne({ email: email })
        //    console.log(preUser)

        if (preUser) {
            res.status(422).json("This user is already present")
        }
        else {
            const addUser = new users({
                name, email, age, mobile, work, address, description
            })

            await addUser.save()
            res.status(201).json(addUser)
            console.log(addUser)
        }
    } catch (error) {
        res.status(422).json(error)
    }
})

//get userData (to add the user data on home page) 
router.get('/getdata', async (req, res) => {
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata)
    } catch (error) {
        res.status(422).json("there is no data")
    }
})


//get individuals details

router.get("/getuser/:id",async(req,res)=>{
    try{
    //    console.log(req.params)
       const {id}=req.params
       const userIndividual=await users.findById({_id:id})
       console.log(userIndividual)
       res.status(201).json(userIndividual)

    }catch(error){
       res.status(422).json(error)
    }
})


// update user data
router.patch("/updateUser/:id",async(req,res)=>{
    try{
       const {id}=req.params

       const updatedUser=await users.findByIdAndUpdate(id,req.body,{
             new:true
       })

       console.log(updatedUser)
       res.status(201).json(updatedUser)

    }catch(error){
        res.status(422).json(error)
    }
})


// delete individual user
router.delete('/deleteUser/:id',async(req,res)=>{
    try{
        const {id}=req.params
 
        const deleteUser=await users.findByIdAndDelete({_id:id})
        
        console.log(deleteUser)
        res.status(201).json(deleteUser)
 
     }catch(error){
         res.status(422).json(error)
     }
})

module.exports = router
