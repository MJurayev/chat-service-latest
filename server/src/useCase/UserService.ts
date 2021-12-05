import { createUserDTO, UserRepository } from "@repository/UserRepository";

export class UserService {
    constructor(private readonly _repo:UserRepository){}
    async getUsers(){
        return this._repo.getAll()
    }
    
    async postUser(user:createUserDTO){
        return this._repo.addUser(user)
    }
}