import express from 'express'
import { UsersController } from '../../../../controllers/UsersController'
import { UserRepository } from '../../../../repository/UserRepository'
import { UserService } from '../../../../useCase/UserService'

const router = express.Router()

const repo = new UserRepository()
const service = new UserService(repo)
const controller = new UsersController(service, router)
export default controller.makeRouter()