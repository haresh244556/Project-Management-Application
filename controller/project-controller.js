const ProjectModel = require("../model/project-model")

module.exports.addProject = function(req,res){
    //db insert project
    let Title = req.body.Title
    let Description = req.body.Description
    let Technology = req.body.Technology
    let EstimatedHours = req.body.EstimatedHours
    let StartDate = req.body.StartDate
    let CompletionDate = req.body.CompletionDate

    let project = new ProjectModel({
        Title:Title,
        Description:Description,
        Technology:Technology,
        EstimatedHours:EstimatedHours,
        StartDate:StartDate,
        CompletionDate:CompletionDate
        
    })

    project.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"project added",status:200,data:data})
        }
    })
}

//list
module.exports.getAllProjects = function(req,res){
    
    //REST
    ProjectModel.find(function(err,projects){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"projects....",status:200,data:projects})
        }
    })
}

//delete
module.exports.deleteProject = function(req,res){
    let projectId = req.params.projectId

    
    ProjectModel.deleteOne({_id:projectId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}

//update

module.exports.updateProject = function(req,res){

    //update where Id = 12121
    let projectId = req.body.projectId
    let Title = req.body.Title
    let Description = req.body.Description
    let Technology = req.body.Technology
    let EstimatedHours = req.body.EstimatedHours
    let StartDate = req.body.StartDate
    let CompletionDate = req.body.CompletionDate
    
    ProjectModel.updateOne({_id:projectId},{Title:Title,
         Description:Description,
        Technology:Technology,
        EstimatedHours:EstimatedHours,
        StartDate:StartDate,
        CompletionDate:CompletionDate},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}