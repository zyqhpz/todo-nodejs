var Model = require('../models')

const todo = {
    getAllTodo: async (req, res) => {
        let todo = []

        try {
            todo = await Model.Todo.findAll()
        } catch (error) {
            console.log(error)
        }
        res.json(todo)
    },
    getTodoById: async (req, res) => {
        let todo = []

        try {
            todo = await Model.Todo.findOne({
                where: {
                    id: req.params.id
                }
            })
        } catch (error) {
            console.log(error)
        }
        res.json(todo)
    },
    postTodo: async (req, res) => {
        let todo = {}
        try {
            todo = await Model.Todo.create({
                title: req.body.title,
                description: req.body.description,
            })
        } catch (error) {
            console.log(error)
        }
        res.json(todo)
    },
    updateTodo: async (req, res) => {
        let todo = {}
        try {
            todo = await Model.Todo.update(req.body, { 
                where: {
                    id: req.params.id
                },
            })
            } catch (error) {
                console.log(error)
            }
        res.json(todo)
    },
    deleteTodo: async (req, res) => {
        await Model.Todo.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Todo deleted'
        })
    }
}

module.exports = todo