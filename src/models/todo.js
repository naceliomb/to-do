const crypto = require("crypto");


const id = crypto.randomBytes(16).toString('hex');

class Todo {
    constructor(title, description, dueDate){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }

};


module.exports = Todo;