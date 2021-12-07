import { BelongsToMany, DataTypes, HasMany, Model, Sequelize } from 'sequelize';
import { MessageModel, UserModel } from '..';

const buildMessageModel = (sequelize: Sequelize) => {
    class Message extends Model { }
    Message.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            from: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            to: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            message: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            sequelize,
            timestamps: true,
            tableName: 'message',
            modelName: "Message"
        }
    );

    return Message
}
export default buildMessageModel