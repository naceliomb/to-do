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
};

exports.getById = async (req,res) => {
    if(database.entries().next().done){
        return res.status(200).json({"message":"Não há tarefas cadastradas"});
    }
    const {id} = req.query;

    const query = database.get(id);

    if(!query){
        return res.status(404).json({"message":"Tarefa não encontrada!"});
    }

    return res.status(200).json(query);
};

exports.deleteTodo = async (req,res) => {
    if(database.entries().next().done){
        return res.status(204).json({"message":"Não há tarefas cadastradas"});
    }
    const {id} = req.query;
    const task = database.get(id);
    const query = database.delete(id);
    if(!query){
        return res.status(404).json({"message":"Tarefa não encontrada"});
    }
    console.log(task);
    return res.status(204);
};

exports.updateTodo = async (req,res) => {

    if(database.entries().next().done){
        return res.status(204).json({"message":"Não há tarefas cadastradas"});
    }
    
    const {id} = req.query;

    const {title, description, dueDate } = req.body;

    

    const task = database.get(id);

    if(!task){
        return res.status(204).json({"message":"Tarefa não encontrada"});
    }
    
    const query = database.set(id, {"id": task.id, "title": title ? title : task.title, "description": description ? description : task.description, "dueDate": dueDate ? dueDate : task.dueDate});

    if(!query){
        return res.status(504).json({"message":"Não foi possível modificar a tarefa"});
    }

    const result = database.get(id);

    return res.status(200).json(result);
    
};