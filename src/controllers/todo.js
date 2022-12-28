const Todo = require("../models/todo");

exports.createTodo = async (req,res) =>{
    const title = req.body.todo.title;
    const description = req.body.todo.description;
    const dueDate = req.body.todo.dueDate;

    const todo = new Todo(title,description,dueDate);
    res.status(200).json({"message":"Tarefa criada com sucesso", "todo":todo});




    // todo.save((err, result)=>{
    //     if(err){
    //         return res.status(400).json({error: err});
    //     }
    //     return res.status(200).json({
    //         message: 'Tarefa criada com sucesso',
    //         todo: result
    //     });
    // });

};