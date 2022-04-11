const mongoose = require("mongoose")

const Project_moduleSchema = new mongoose.Schema({

    moduleName:{
        type:String
          
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    description:{
        type:String
        
    },
    estimatedHours:{
        type:String
        
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }
})

const Project_moduleModel = mongoose.model("project_module",Project_moduleSchema)
module.exports = Project_moduleModel