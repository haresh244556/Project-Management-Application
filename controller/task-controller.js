const TaskModel = require("../model/task-model")

module.exports.addTask = function(req,res){
    //db insert project_module
    let taskName = req.body.taskName
    let description = req.body.description
    let estimatedHours = req.body.estimatedHours
    let project = req.body.project
    let project_module = req.body.project_module
    let status = req.body.status

    let task = new TaskModel({
        taskName:taskName,
        description:description,
        estimatedHours:estimatedHours,
        project:project,
        project_module:project_module,
        status:status
        
    })

    task.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Task added...",status:200,data:data})
        }
    })
}

//list
module.exports.getAllTasks = function(req,res){
    
    //REST
    TaskModel.find().populate("project").populate("project_module").populate("status").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Tasks  are....",status:200,data:data})
        }
    })
}

//delete
module.exports.deleteTask = function(req,res){
    let taskId = req.params.taskId

    
    TaskModel.deleteOne({_id:taskId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Task removed...",status:200,data:data})
        }
    })
}

//update

module.exports.updateTask = function(req,res){

    //update where Id = 12121
    let paramtaskId = req.body.taskId
    let paramtaskName = req.body.taskName
    let paramdescription = req.body.description
    let paramestimatedHours = req.body.estimatedHours
    let paramstatus = req.body.status
    
    TaskModel.updateOne({_id:paramtaskId},{taskName:paramtaskName,
        description:paramdescription,
        estimatedHours:paramestimatedHours,
        status:paramstatus}, function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Task updated...",status:200,data:data})
        }
    })
}