const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())
app.use(cors())

const db = require("./config")
const userRoutes = require("./routes/userRoutes")

app.use("/user",userRoutes)


app.use("/test",(req, res)=>{
    return res.json({
        message:"testing"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on the port: ${process.env.PORT} `)
})