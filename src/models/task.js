import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
	folderID: { type: String, required: true },
	text: { type: String },
	done: { type: Boolean }
})

const Task = mongoose.model('Task', TaskSchema)

export default Task
