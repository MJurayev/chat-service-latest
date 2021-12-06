import Users from "@infrastructure/sequelize/models/Users";
import { UserModel } from "../infrastructure/sequelize";
export interface createUserDTO {
    firstname: string,
    lastname?: string,
    age?: number
}

export interface createdUserDTO extends createUserDTO {
    id: number,
    created_at: Date,
    updated_at: Date
}

export class UserRepository {
    async getAll() {
        const users = await UserModel.findAll()
        return users

    }

    async getById(id: number) {
        const user = await UserModel.findByPk(id)
        return user
    }

    async addUser(user: createUserDTO) {
        const result = new UserModel(user)
        return await result.save()
    }
}