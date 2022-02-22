const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({

    taskName:{
        type:String
          
    },
    description:{
        type:String
        
    },
    estimatedHours:{
        type:String
        
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    project_module:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project_module"
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }
})

const TaskModel = mongoose.model("task",TaskSchema)
module.exports = TaskModel