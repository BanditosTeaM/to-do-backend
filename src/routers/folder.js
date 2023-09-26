import express from 'express'
import folderController from '../controllers/folder.js'

const folderRouter = express.Router()

folderRouter.get('/folder', folderController.getAllFolders)
folderRouter.post('/folder', folderController.createFolder)
folderRouter.put('/folder/:id', folderController.putFolder)
folderRouter.delete('/folder/:id', folderController.deleteFolder)

export default folderRouter
