const fs = require("fs")

function login(req,res){
    res.write("Login")
    res.end()
}

function signup(req,res){
    let signupHTML = fs.readFileSync("./views/Signup.html")
    res.write(signupHTML)
    res.end()
}

module.exports.login = login
module.exports.signup = signup