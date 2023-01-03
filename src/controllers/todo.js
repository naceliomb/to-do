const Todo = require("../models/todo");


let data = [];

exports.createTodo = async (req,res) =>{
    const title = await req.body.todo.title;
    const description = await req.body.todo.description;
    const dueDate = await req.body.todo.dueDate;

    if(!title || !description || !dueDate){
        return res.status(504).json({"message":"Dados não encontrados!"});
    };

    const todo = new Todo(title,description,dueDate);
    if(!todo){
        return res.status(500).json({"message":"Ocorreu um erro ao tentar salvar sua tarefa"});
    }

    data.push(todo);

    return res.status(200).json({"message":"Tarefa criada com sucesso", "todo":todo.id});
};


exports.getAllTodos = async (req,res) => {
    if(!data.length){
        return res.status(200).json({"message":"Não há tarefas cadastradas"});
    }

    return res.status(200).json({"todos":data});
}