const ProjectModel = require("../model/project-model")

module.exports.addProject = function(req,res){
    //db insert project
    let title = req.body.title
    let description = req.body.description
    let technology = req.body.technology
    let estimatedHours = req.body.estimatedHours
    let startDate = req.body.startDate
    let completionDate = req.body.completionDate

    let project = new ProjectModel({
        title:title,
        description:description,
        technology:technology,
        estimatedHours:estimatedHours,
        startDate:startDate,
        completionDate:completionDate
        
    })

    project.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"project added...",status:200,data:data})
        }
    })
}

//list
module.exports.getAllProjects = function(req,res){
    
    //REST
    ProjectModel.find(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Projects are....",status:200,data:data})
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
            res.json({msg:"Project removed...",status:200,data:data})
        }
    })
}

//update

module.exports.updateProject = function(req,res){

    //update where Id = 12121
    let paramprojectId = req.body.projectId
    let paramtitle = req.body.title
    let paramdescription = req.body.description
    let paramtechnology = req.body.technology
    let paramestimatedHours = req.body.estimatedHours
    let paramstartDate = req.body.startDate
    let paramcompletionDate = req.body.completionDate
    
    ProjectModel.updateOne({_id:paramprojectId},{title:paramtitle,
        description:paramdescription,
        technology:paramtechnology,
        estimatedHours:paramestimatedHours,
        startDate:paramstartDate,
        completionDate:paramcompletionDate},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Project updated...",status:200,data:data})
        }
    })
}