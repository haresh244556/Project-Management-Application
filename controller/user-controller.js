const UserModel = require("../model/user-model")

//add [post]
module.exports.addUser = function(req,res){
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let user = new UserModel({
        firstName:firstName,
        email:email,
        password:password,
        role:role
    })

    user.save(function(err,data){
        if(err){
            res.json({msg:"SMW",data:err,status:-1}) //-1
        }else{
            res.json({msg:"signup done",data:data,status:200})//http status code
        }
    })

}

//list

module.exports.getAllUsers = function(req,res){

    UserModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({msg:"SMW",data:err,status:-1}) //-1 [303 404 500]
        }else{
            res.json({msg:"users ret...",data:data,status:200})//http status code
        }
    })
}

//delete
module.exports.deleteUser = function(req,res){
    //params userid
    let userId = req.params.userId //postman-> userId

    UserModel.deleteOne({_id:userId},function(err,data){
        if(err){
            res.json({msg:"SMW",data:err,status:-1}) //-1 [303 404 500]
        }else{
            res.json({msg:"users removed...",data:data,status:200})//http status code
        }
    })
}

//update
module.exports.updateUser = function(req,res){

    //update User set firstName = admin where UserId = 12121
    let userId = req.body.userId
    let firstName = req.body.firstName
    
    UserModel.updateOne({_id:userId},{firstName:firstName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}