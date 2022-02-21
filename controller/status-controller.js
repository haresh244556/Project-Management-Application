const StatusModel = require("../model/status-model")

module.exports.addStatus = function(req,res){
    //db insert status
    let StatusName = req.body.StatusName

    let status = new StatusModel({
        StatusName:StatusName
    })

    status.save(function(err,data){
        if(err){
            res.json({msg:"SMW",status:-1,data:err})
        }else{
            res.json({msg:"Status added",status:200,data:data})
        }
    })
}

module.exports.getAllStatus = function(req,res){
    
    //model

    //REST
    StatusModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Today Status....",status:200,data:roles})
        }
    })
}

//delete
module.exports.deleteStatus = function(req,res){
    let statusId = req.params.statusId

    //delete from status where statusId = 1
    StatusModel.deleteOne({_id:statusId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Status removed...",status:200,data:data})
        }
    })
}

//roleName

module.exports.updateStatus = function(req,res){

    //update role set statusName = admin where statusId = 12121
    let statusId = req.body.statusId
    let StatusName = req.body.StatusName
    
    StatusModel.updateOne({_id:statusId},{StatusName:StatusName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Status updated...",status:200,data:data})
        }
    })
}