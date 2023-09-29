import express from 'express'
import folderController from '../controllers/folder.js'

const folderRouter = express.Router()

folderRouter.get('/', folderController.getAllFolders)
folderRouter.post('/', folderController.createFolder)
folderRouter.put('/:id', folderController.putFolder)
folderRouter.delete('/:id', folderController.deleteFolder)

export default folderRouter
