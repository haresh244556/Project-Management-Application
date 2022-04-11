const Project_moduleModel = require("../model/project_module-model")

module.exports.addProject_module = function(req,res){
    //db insert project_module
    let moduleName = req.body.moduleName
    let project = req.body.project
    let description = req.body.description
    let estimatedHours = req.body.estimatedHours
    let status = req.body.status

    let project_module = new Project_moduleModel({
        moduleName:moduleName,
        project:project,
        description:description,
        estimatedHours:estimatedHours,
        status:status
        
    })

    project_module.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"project_module added...",status:200,data:data})
        }
    })
}

//list
module.exports.getAllProject_modules = function(req,res){
    
    //REST
    Project_moduleModel.find().populate("project").populate("status").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"project_modules are....",status:200,data:data})
        }
    })
}

//delete
module.exports.deleteProject_module = function(req,res){
    let project_moduleId = req.params.project_moduleId

    
    Project_moduleModel.deleteOne({_id:project_moduleId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Project_module removed...",status:200,data:data})
        }
    })
}

//update

module.exports.updateProject_module = function(req,res){

    //update where Id = 12121
    let paramproject_moduleId = req.body.project_moduleId
    let parammoduleName = req.body.moduleName
    let paramproject = req.body.project
    let paramdescription = req.body.Description
    let paramestimatedHours = req.body.estimatedHours
    let paramstatus = req.body.status
    
    Project_moduleModel.updateOne({_id:paramproject_moduleId},{moduleName:parammoduleName,
        project:paramproject,
        description:paramdescription,
        estimatedHours:paramestimatedHours,
        status:paramstatus}, function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Project_module updated...",status:200,data:data})
        }
    })
}