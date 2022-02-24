const fs = require("fs")

function login(req,res){
    let loginHTML = fs.readFileSync("./views/login.html")
    res.write(loginHTML)
    res.end()
}

function signup(req,res){
    let signupHTML = fs.readFileSync("./views/Signup.html")
    res.write(signupHTML)
    res.end()
}

function saveuser(req,res){

    console.log(req.body)
    res.json({
        msg:"done...",
        status:200,
        data:req.body
    })
}

module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveuser