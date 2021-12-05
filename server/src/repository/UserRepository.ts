import { UserModel } from "../infrastructure/sequalize";
export interface createUserDTO{
    firstname:string,
    lastname?:string,
    age?:number
}

export class UserRepository {
    async getAll(){
        const users = await UserModel.findAll()
        return users
    }

    async addUser(user:createUserDTO){
        const result = new UserModel(user)
        return await result.save()
    }
}