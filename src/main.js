import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import folderRouter from './routers/folder.js'
import taskRouter from './routers/task.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(
	cors({
		origin: ['https://todo-app-topaz-gamma.vercel.app'],
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
	})
)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URL).catch(error => console.log(error))

app.use('/folder', folderRouter)
app.use('/task', taskRouter)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`)
})
