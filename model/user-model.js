const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }
})

const Usermodel = mongoose.model("user",UserSchema)
module.exports = Usermodel