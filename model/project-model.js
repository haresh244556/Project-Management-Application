const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({

    title:{
        type:String  
    },
    description:{
        type:String
    },
    technology:{
        type:String
    },
    estimatedHours:{
        type:String
    },
    startDate:{
        type:String
    },
    completionDate:{
        type:String
    }
})

const ProjectModel = mongoose.model("project",ProjectSchema)
module.exports = ProjectModel