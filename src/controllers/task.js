import Task from '../models/task.js'

const taskController = {
	getAllTasks: async (req, res) => {
		const task = await Task.find()
		res.status(200).json(task)
	},
	createTask: (req, res) => {
		if (!req.body.folderID && !req.body.text) {
			return res.status(400).json({ error: 'Error' })
		}
		const task = new Task({
			folderID: req.body.folderID,
			text: req.body.text,
			done: false
		})

		task.save()
		res.status(200).json(task)
	},
	deleteTask: async (req, res) => {
		const id = req.params.id
		if (!id) {
			return res.status(400).json({ error: 'Error' })
		}
		const task = await Task.findByIdAndDelete(id)

		res.status(200).json(task)
	},
	putTask: async (req, res) => {
		const id = req.params.id
		if (!id) {
			return res.status(400).json({ error: 'Error' })
		}
		const task = await Task.findByIdAndUpdate(id, {
			text: req.body.text,
			done: req.body.done
		})

		task.save()
		res.status(200).json(task)
	}
}

export default taskController
