const express = require("express")
const mongoose = require("mongoose")


const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const projectController = require("./controller/project-controller")
const project_teamController = require("./controller/project_team-controller")
const statusController = require("./controller/status-controller")
const project_moduleController = require("./controller/project_module-controller")
const taskController = require("./controller/task-controller")
const user_taskController = require("./controller/user_task-controller")



const app = express()
var cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


//database
mongoose.connect('mongodb://localhost:27017/ProjManApp',function(err){
    if(err){
        console.log("db connection fail....");
        console.log(err);
    }else{
        console.log("db Connected....");
    }
}
);

//urls

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)



//roles
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

//project
app.post("/projects",projectController.addProject)
app.get("/projects",projectController.getAllProjects)
app.delete("/projects/:projectId",projectController.deleteProject)
app.put("/projects",projectController.updateProject)

//project_team
app.post("/project_teams",project_teamController.addProject_team)
app.get("/project_teams",project_teamController.getAllProject_teams)
app.delete("/project_teams/:project_teamId",project_teamController.deleteProject_team)
app.put("/project_teams",project_teamController.updateProject_team)

//status
app.post("/status",statusController.addStatus)
app.get("/status",statusController.getAllStatus)
app.delete("/status/:statusId",statusController.deleteStatus)
app.put("/status",statusController.updateStatus)

//project_module
app.post("/project_modules",project_moduleController.addProject_module)
app.get("/project_modules",project_moduleController.getAllProject_modules)
app.delete("/project_modules/:project_moduleId",project_moduleController.deleteProject_module)
app.put("/project_modules",project_moduleController.updateProject_module)

//tasks
app.post("/tasks",taskController.addTask)
app.get("/tasks",taskController.getAllTasks)
app.delete("/tasks/:taskId",taskController.deleteTask)
app.put("/tasks",taskController.updateTask)

//user_task
app.post("/user_tasks",user_taskController.addUser_task)
app.get("/user_tasks",user_taskController.getAllUser_tasks)
app.delete("/user_tasks/:user_taskId",user_taskController.deleteUser_task)
app.put("/user_tasks",user_taskController.updateUser_task)

//server

app.listen(4000,function(){
    console.log("server started on 4000")
})