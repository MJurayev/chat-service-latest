import { BelongsToMany, DataTypes, HasMany, Model, Sequelize } from 'sequelize';
import { UserModel } from '..';

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
                allowNull: true,
                primaryKey:true
            },
            to: {
                type: DataTypes.INTEGER,
                allowNull: true,
                primaryKey:true
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
        },
    );
    // Message.hasOne(UserModel, {
    //     foreignKey:"from"
    // })
    // Message.hasOne(UserModel, {
    //     foreignKey:"to"
    // })
    // UserModel.belongsTo(Message, {
    //     foreignKey:"id"
    // })
    return Message
}
export default buildMessageModel