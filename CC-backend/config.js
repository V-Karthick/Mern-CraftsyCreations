const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to Database")
})
.catch((error)=>{
    console.log(error)
})

module.exports =  mongoose