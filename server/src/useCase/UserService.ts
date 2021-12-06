import { BadRequestError, NotFoundError } from "../domain/Exceptions/Errors";
import { createUserDTO, UserRepository } from "@repository/UserRepository";

export class UserService {
    constructor(private readonly _repo:UserRepository){}
    async getUsers(){
        return this._repo.getAll()
    }
    async getUserById(id:number){
        if(!id)throw new BadRequestError("Id is not provided");
        const result = await this._repo.getById(id)
        if(!result)
            throw new NotFoundError("not found user")
        return result
    } 
    async postUser(user:createUserDTO){

        return this._repo.addUser(user)
    }
}