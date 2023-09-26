import express from 'express'
import taskController from '../controllers/task.js'

const taskRouter = express.Router()

taskRouter.get('/task', taskController.getAllTasks)
taskRouter.post('/task', taskController.createTask)
taskRouter.put('/task/:id', taskController.putTask)
taskRouter.delete('/task/:id', taskController.deleteTask)

export default taskRouter
