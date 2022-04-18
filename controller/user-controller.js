const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")

//add [post]
module.exports.addUser = function(req,res){
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let encPassword = bcrypt.hashSync(password,10)
    let role = req.body.role

    let user = new UserModel({
        firstName:firstName,
        email:email,
        password:encPassword,
        role:role
    })

    user.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1}) //-1
        }else{
            res.json({msg:"signup done",data:data,status:200})//http status code
        }
    })

}

//list

module.exports.getAllUsers = function(req,res){

    UserModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1}) //-1 [303 404 500]
        }else{
            res.json({msg:"Users are...",data:data,status:200})//http status code
        }
    })
}

//delete
module.exports.deleteUser = function(req,res){
    //params userid
    let userId = req.params.userId //postman-> userId

    UserModel.deleteOne({_id:userId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1}) //-1 [303 404 500]
        }else{
            res.json({msg:"User removed...",data:data,status:200})//http status code
        }
    })
}

//update
module.exports.updateUser = function(req,res){

    //update User set firstName = admin where UserId = 12121
    let paramuserId = req.body.userId
    let paramfirstName = req.body.firstName
    let paramemail = req.body.email
    let parampassword = req.body.password
    let paramrole = req.body.role
    
    UserModel.updateOne({_id:paramuserId},{firstName:paramfirstName,email:paramemail,password:parampassword,role:paramrole},function(err, data) {
            if (err) {
                res.json({ msg: "Something went wrong!!!", status: -1, data: err })
            } else {
                res.json({ msg: "User updated...", status: 200, data: data })
            }
        })
}

//login
module.exports.login = function(req,res){
    let param_email = req.body.email
    let param_password = req.body.password

    let isCorrect = false;

    UserModel.findOne({email:param_email}).populate("role").exec(function(err,data){
        if(data){
            let ans = bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                isCorrect = true
            }
        }

        if(isCorrect == false){
            res.json({msg:"Invalid Credentials...",data:req.body,status:-1})
        }else{
            res.json({msg:"Login...",data:data,status:200})
        }
    })
}