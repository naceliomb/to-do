const express = require("express");

const controllerTodo = require("../controllers/todo");

const todoRouter = express.Router();


todoRouter.post("/todos", async(req, res, next)=>{
    try{
        controllerTodo.createTodo(req,res);
    }catch(err){
        next(err);
    }
});




module.exports = todoRouter;