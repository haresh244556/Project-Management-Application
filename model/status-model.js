const mongoose = require("mongoose")

//schema
let StatusSchema = new mongoose.Schema({
    StatusName:{
        type:String
    }
})

//model
let StatusModel = mongoose.model("status",StatusSchema) //roles
module.exports = StatusModel