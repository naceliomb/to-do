const express = require("express");

const controllerTodo = require("../controllers/todo");

const todoRouter = express.Router();


todoRouter.post("/create", async(req, res, next)=>{
    try{
        controllerTodo.createTodo(req,res);
    }catch(err){
        next(err);
    }
});

todoRouter.get("/getAll", async(req, res, next)=>{
    try{
        controllerTodo.getAllTodos(req,res);
    }catch(err){
        next(err);
    }
});


todoRouter.get("/getById", async(req, res, next)=>{
    try{
        controllerTodo.getById(req,res);
    }catch(err){
        next(err);
    }
});



todoRouter.delete("/deleteTodo", async(req, res, next)=>{
    try{
        controllerTodo.deleteTodo(req,res);
    }catch(err){
        next(err);
    }
});

todoRouter.put("/updateTodo", async(req, res, next)=>{
    try{
        controllerTodo.updateTodo(req,res);
    }catch(err){
        next(err);
    }
});




module.exports = todoRouter;