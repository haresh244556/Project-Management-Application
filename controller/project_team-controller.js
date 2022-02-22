const Project_teamModel = require("../model/project_team-model")

module.exports.addProject_team = function(req,res){
    //db insert project
    let project = req.body.project
    let user = req.body.user

    let project_team = new Project_teamModel({
        project:project,
        user:user  
    })

    project_team.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Project_team added...",status:200,data:data})
        }
    })
}

//list
module.exports.getAllProject_teams = function(req,res){
    
    //REST
    Project_teamModel.find().populate("project").populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Project_teams are...",status:200,data:data})
        }
    })
}

//delete
module.exports.deleteProject_team = function(req,res){
    //params project_teamId
    let project_teamId = req.params.project_teamId

    Project_teamModel.deleteOne({_id:project_teamId}, function(err,data){
        if(err){
            res.json({msg:"something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Project_team removed...",status:200,data:data})
        }
    })
}

//update

module.exports.updateProject_team = function(req,res){

    //update where Id = 12121
    let paramproject_teamId = req.body.project_teamId
    let paramproject = req.body.project
    let paramuser = req.body.user
    
    Project_teamModel.updateOne({_id:paramproject_teamId},{project:paramproject,user:paramuser},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"project_team updated...",status:200,data:data})
        }
    })
}