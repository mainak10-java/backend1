const express = require('express')
const router = express.Router();

const {createTodo} = require('../controllers/createTodo')
const {getTodos, getTodoById} = require('../controllers/getTodos')
const {updateTodos} = require('../controllers/updateTodos')
const {deleteTodo} = require('../controllers/deleteTodo')


// Define api routes

router.post('/createTodo', createTodo);
router.get('/getTodos', getTodos)
router.get('/getTodos/:id', getTodoById)
router.put('/updateTodos/:id', updateTodos)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router;