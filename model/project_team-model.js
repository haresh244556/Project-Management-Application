const mongoose = require("mongoose")

const Project_teamSchema = new mongoose.Schema({

    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const Project_teamModel = mongoose.model("project_team",Project_teamSchema)//project_teams
module.exports = Project_teamModel