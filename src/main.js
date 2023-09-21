import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

mongoose.connect(process.env.MONGODB_URL).catch(error => console.log(error))

app.get('/', (req, res) => {
	res.send('Hello Express JS')
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`)
})
