import { Router } from 'express'
import auth from '../middleware/auth.js'
import uploadImageController from '../controllers/uploadImage.controller.js'
import upload from '../middleware/multer.js'
import express from 'express'

export const uploadRouter = express.Router()

uploadRouter.post("/upload",auth,upload.single("image"),uploadImageController)

