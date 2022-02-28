import express, { Router } from "express";
import { MessageService } from "@useCase/MessageService";

class AuthController {
    constructor(private readonly _service: MessageService, private readonly _router: Router) {

    }
    makeRouter(): Router {
        this._router.get('/', async (req, res) => {
            const users = await this._service.getMessages()
            res.json({
                status:200,
                data:users
            })
        })

        this._router.post('/', async (req, res) => {
            const created = await this._service.postMessage(req.body)
            res.json({
                data:created,
                status:200
            })
        })
        this._router.get('/:userId/all',async (req, res) => {
            const allMessages = await this._service.getAllMessagesByUserId(Number(req.params.userId))
            res.json({
                status:200,
                data:allMessages
            })
        })
        this._router.get('/:id', async (req, res) => {
            const userById = await this._service.getMessageById(Number(req.params.id))
            res.json({
                status:200,
                data:userById
            })
        })
        
        

        return this._router
    }
}

export { AuthController }