import { Op } from "sequelize/dist";
import { NotFoundError } from "../domain/Exceptions/Errors";
import { MessageModel, UserModel } from "../infrastructure/sequelize";
export interface ICreateMessageDTO {
    from: number,
    to: number,
    message: string
}

export interface ICreatedMessageDTO extends ICreateMessageDTO {
    id: number,
}

export class MessageRepository {
    async getAll() {
        const messages = await MessageModel.findAll()
        if (!messages)
            throw new Error("Something went wrong!!!");
        return messages
    }

    // Xabar haqida to'liq ma'lumot olish
    async getByIdFullInfo(id: number) {
        const message = await MessageModel.findByPk(id, {
            include: [
                { model: UserModel, foreignKey: 'from', as: "fromUser" },
                { model: UserModel, foreignKey: 'to', as: "toUser" }
            ]
        })
        if (!message) throw new NotFoundError("Message is not found!!!")
        const jsonMessage = message.toJSON()
        delete jsonMessage.from
        delete jsonMessage.to
        return jsonMessage
    }

    // Bu metod Id raqamiga ko'ra Xabarni qaytaradi
    async getById(id: number) {
        const message = await MessageModel.findByPk(id)
        if (!message) throw new NotFoundError("Message is not found!!!")
        return message
    }

    // Bu metod userId ga ko'ra xabarni chiqaradi 
    async getMessageByUserId(userId: number) {
        const message = await MessageModel.findAll({
            where: {
                [Op.or]: [
                    { from: userId },
                    { to: userId }
                ] 
            }
        })
        if (!message) throw new NotFoundError("Message is not found!!!")
        return message
    }

    // Bu metod bazaga Message jadvaliga ma'lumot qo'shadi
    async addMessage(message: ICreateMessageDTO) {
        const result = MessageModel.build(message)
        const saved = await result.save()
        if (!saved)
            throw new Error("Database Error")
        return saved
    }
}