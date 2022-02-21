const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({

    Title:{
        type:String  
    },
    Description:{
        type:String
    },
    Technology:{
        type:String
    },
    EstimatedHours:{
        type:String
    },
    StartDate:{
        type:String
    },
    CompletionDate:{
        type:String
    }
})

const ProjectModel = mongoose.model("project",ProjectSchema)
module.exports = ProjectModel