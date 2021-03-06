import { UserService } from "../useCase/UserService";
import express, { Router } from "express";

class UsersController {
    constructor(private readonly _service: UserService, private readonly _router: Router) {

    }

    makeRouter(): Router {
        this._router.get('/', async (req, res) => {
            const users = await this._service.getUsers()
            res.json({
                status:200,
                data:users
            })
        })

        this._router.post('/', async (req, res) => {
            const created = await this._service.postUser(req.body)
            res.json({
                data:created,
                status:200
            })
        })

        this._router.get('/:id', async (req, res) => {
            const userById = await this._service.getUserById(Number(req.params.id))
            res.json({
                status:200,
                data:userById
            })
        })
        
        

        return this._router
    }
}

export { UsersController }