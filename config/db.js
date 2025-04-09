const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI || 5000)
    .then(()=>{
        console.log(`mongoDB connected on port ${process.env.PORT || 5000}`);
    }).catch((err)=>{
        console.log("error",err);
        
    })
}

module.exports=connectDB;