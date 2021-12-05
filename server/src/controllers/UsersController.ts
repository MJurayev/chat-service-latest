import { UserService } from "../useCase/UserService";
import express, { Router } from "express";

class UsersController {
    constructor(private readonly _service: UserService, private readonly _router: Router) {

    }

    makeRouter(): Router {
        this._router.get('/', async (req, res) => res.json(await this._service.getUsers()))
        this._router.post('/', async (req, res) => res.json(await this._service.postUser(req.body)))
        
        return this._router
    }
}

export { UsersController }