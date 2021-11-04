var express = require('express');
var router = express.Router();
var TodoContollrer = require('../controllers/todo');

// Get all todos
router.get('/', TodoContollrer.getAllTodo);

// get todo by id
router.get('/:id', TodoContollrer.getTodoById);

// Post todo
router.post('/', TodoContollrer.postTodo);

// Update todo by id
router.patch('/:id', TodoContollrer.updateTodo);

// Delete todo by id
router.delete('/:id', TodoContollrer.deleteTodo);

module.exports = router;