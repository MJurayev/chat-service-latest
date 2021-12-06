import { MessageController } from '../../../../controllers/MessageController'
import { MessageRepository } from '../../../../repository/MessageRepository'
import { MessageService } from '../../../../useCase/MessageService'
import express from 'express'

const router = express.Router()

const repo = new MessageRepository()
const service = new MessageService(repo)
const controller = new MessageController(service, router)
export default controller.makeRouter()