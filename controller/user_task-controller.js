const User_taskModel = require("../model/user_task-model")

module.exports.addUser_task = function(req,res){
    //db insert user
    let user = req.body.user
    let task = req.body.task

    let user_task = new User_taskModel({
        user:user,
        task:task  
    })

    user_task.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"User_task added...",status:200,data:data})
        }
    })
}

//list
module.exports.getAllUser_tasks = function(req,res){
    
    //REST
    User_taskModel.find().populate("user").populate("task").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"User_tasks are...",status:200,data:data})
        }
    })
}

//delete
module.exports.deleteUser_task = function(req,res){
    //params project_teamId
    let user_taskId = req.params.user_taskId

    User_taskModel.deleteOne({_id:user_taskId}, function(err,data){
        if(err){
            res.json({msg:"something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"User_task removed...",status:200,data:data})
        }
    })
}

//update

module.exports.updateUser_task = function(req,res){

    //update where Id = 12121
    let paramuser_taskId = req.body.user_taskId
    let paramuser = req.body.user
    let paramtask = req.body.task
    
    User_taskModel.updateOne({_id:paramuser_taskId},{user:paramuser,task:paramtask},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"project_team updated...",status:200,data:data})
        }
    })
}