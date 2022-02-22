const mongoose = require("mongoose")

const User_taskSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    task:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    }
})

const User_taskModel = mongoose.model("User_task",User_taskSchema)//project_teams
module.exports = User_taskModel