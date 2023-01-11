const Todo = require("../models/todo");


let database = new Map();

exports.createTodo = async (req,res) =>{
    const {title, description, dueDate } = req.body;

    if(!title || !description || !dueDate){
        return res.status(504).json({"message":"Dados não encontrados!"});
    };

    const todo = new Todo(title,description,dueDate);
    if(!todo){
        return res.status(500).json({"message":"Ocorreu um erro ao tentar salvar sua tarefa"});
    }

    database.set(todo.id, todo);

    return res.status(200).json({"message":"Tarefa criada com sucesso", "todo":todo.id});
};


exports.getAllTodos = async (req,res) => {
    if(database.entries().next().done){
        return res.status(200).json({"message":"Não há tarefas cadastradas"});
    }

    return res.status(200).json(Object.fromEntries(database));
}