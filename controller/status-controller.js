const StatusModel = require("../model/status-model")

module.exports.addStatus = function(req,res){
    //db insert status
    let statusName = req.body.statusName

    let status = new StatusModel({
        statusName:statusName
    })

    status.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Status added...",status:200,data:data})
        }
    })
}

module.exports.getAllStatus = function(req,res){

    //REST
    StatusModel.find(function(err,status){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:" Status are....",status:200,data:status})
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
    let paramstatusId = req.body.statusId
    let paramstatusName = req.body.statusName
    
    StatusModel.updateOne({_id:paramstatusId},{statusName:paramstatusName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Status updated...",status:200,data:data})
        }
    })
}