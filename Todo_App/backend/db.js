/*
 Todo {
    title: string;
    description: stringl
    completed: boolean
 } 
*/
const mongoose = require('mongoose');
//mongodb url
mongoose.connect(
  'mongodb+srv://sakshamtewari3:todo@todo.ep7tx.mongodb.net/todos',
);

// Schema
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// Model
const todo = mongoose.model('todos', todoSchema);

module.exports = { todo };
