import Folder from '../models/folder.js'
import Task from '../models/task.js'

const folderController = {
	getAllFolders: async (req, res) => {
		const folder = await Folder.find()
		res.status(200).json(folder)
	},
	createFolder: (req, res) => {
		if (!req.body.name && !req.body.color) {
			return res.status(400).json({ error: 'Error' })
		}
		const folder = new Folder({
			name: req.body.name,
			color: req.body.color
		})
		folder.save()
		res.status(200).json(folder)
	},
	deleteFolder: async (req, res) => {
		const id = req.params.id
		if (!id) {
			return res.status(400).json({ error: 'Error' })
		}
		const folder = await Folder.findByIdAndDelete(id)
		await Task.deleteMany({ folderID: id })

		res.status(200).json(folder)
	},
	putFolder: async (req, res) => {
		const id = req.params.id
		if (!id && !req.body.name && !req.body.color) {
			return res.status(400).json({ error: 'Error' })
		}
		const folder = await Folder.findByIdAndUpdate(id, {
			name: req.body.name,
			color: req.body.color
		})

		folder.save()
		res.status(200).json(folder)
	}
}

export default folderController
