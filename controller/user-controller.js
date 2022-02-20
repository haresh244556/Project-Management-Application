const Usermodel = require("../model/user-model")

//add [post]
module.exports.addUser = function(req,res){
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let user = new Usermodel({
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
    Usermodel.find().populate("role").exec(function(err,data){
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

    Usermodel.deleteOne({_id:userId},function(err,data){
        if(err){
            res.json({msg:"SMW",data:err,status:-1}) //-1 [303 404 500]
        }else{
            res.json({msg:"users removed...",data:data,status:200})//http status code
        }
    })
}

//update