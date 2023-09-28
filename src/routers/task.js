import express from 'express'
import taskController from '../controllers/task.js'

const taskRouter = express.Router()

taskRouter.get('/', taskController.getAllTasks)
taskRouter.post('/', taskController.createTask)
taskRouter.put('/:id', taskController.putTask)
taskRouter.delete('/:id', taskController.deleteTask)

export default taskRouter
