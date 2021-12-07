import { BadRequestError, NotFoundError } from "../domain/Exceptions/Errors";
import { MessageRepository } from "@repository/MessageRepository";

export class MessageService {
    constructor(private readonly _repo: MessageRepository) { }
    async getMessages() {
        return this._repo.getAll()
    }

    async getMessageById(id: number) {
        if (!id) throw new Error("Id is not provided");
        const result = await this._repo.getById(id)
        if (!result)
            throw new Error("not found user")
        return result
    }
    async postMessage(message: any) {

        return this._repo.addMessage(message)
    }
    async getAllMessagesByUserId(userId:number){
            return this._repo.getMessageByUserId(userId)
    }
}