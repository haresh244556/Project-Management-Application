const express = require("express")
const sessionControler = require("./controller/session-controller")

const app = express()

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

app.get("/login",sessionControler.login)
app.get("/signup",sessionControler.signup)

app.listen(3000,function(){
    console.log("server started on 3000")
})