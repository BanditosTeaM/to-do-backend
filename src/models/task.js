import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
	folderID: { type: String, required: true },
	text: { type: String, default: '', require: true },
	done: { type: Boolean, default: false }
})

const Task = mongoose.model('Task', TaskSchema)

export default Task
