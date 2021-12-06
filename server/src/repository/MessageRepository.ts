import { MessageModel } from "../infrastructure/sequelize";
export interface ICreateMessageDTO {
    from:number,
    to:number,
    message:string
}

export interface ICreatedMessageDTO extends ICreateMessageDTO {
    id: number,
}

export class MessageRepository {
    async getAll(){
        const messages = await MessageModel.findAll()
        return messages
    }

    async getById(id: number) {
        const message = await MessageModel.findByPk(id)
        return message
    }

    async addMessage(message:ICreateMessageDTO){
        console.log(message)
        const result = MessageModel.build(message)
        return await result.save()
    }
}