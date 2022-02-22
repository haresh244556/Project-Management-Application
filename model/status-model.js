const mongoose = require("mongoose")

//schema
let StatusSchema = new mongoose.Schema({
    statusName:{
        type:String
        
    }
})

//model
let StatusModel = mongoose.model("status",StatusSchema) //status
module.exports = StatusModel