const express = require("express")
const router=express.Router()
const mongoose = require("mongoose")

const User=require("../models/userModel")

router.post("/register",async(req, res)=>{
    try {
        const {name, email, password} = req.body
        // const admin=false
        const check = await User.findOne({email:email})
        if(check)
        {
             res.json({
                message:"the user already exist"
            })
        }
        else
        {
            const user = await User.create({
                name:name,
                email:email,
                password:password,
                admin:false
            })
             res.json({
                message:"User have been added successfully"
            })
        }
       
    } catch (error) {
        console.log(error)
    }
})

router.post("/login", async(req, res)=>{
    try {
        const {email, password} = req.body
        const user= await User.findOne({email:email})
        if(user)
        {
            if(user.password === password)
            {
                res.json({
                    message:"successful"
                })
            }
            else
            {
                res.json({
                    message:"failed"
                })
            }
        }
        else
        {
            res.json({
                error:"no user exist"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

