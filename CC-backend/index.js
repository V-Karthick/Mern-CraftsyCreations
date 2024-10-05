const express = require("express")
const app = express()
const dotenv = require("dotenv")

app.use(express.json())
dotenv.config()

const db = require("./config")

app.use("/test",(req, res)=>{
    return res.json({
        message:"testing"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on the port: ${process.env.PORT} `)
})