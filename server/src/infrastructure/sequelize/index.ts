
import config from "config";
import { BelongsTo, Sequelize } from "sequelize";
import buildMessageModel from "./models/Message";
import Message from "./models/Message";
import buildUserModel from "./models/Users";
import Users from "./models/Users";
class Database {
  sequelize:Sequelize;
  constructor(){ 
    this.sequelize = new Sequelize(config.get("pgUrl"))
    const gb = <any>global
    gb.sequalize = this.sequelize

  }
  up():void{
    this.sequelize.sync()
    this.sequelize.authenticate();
  }

  async down():Promise<unknown[]>{
    return this.sequelize.drop()
  }
}


const database = new Database()

database.sequelize.sync()
database.sequelize.authenticate()

const UserModel = buildUserModel(database.sequelize)
const MessageModel = buildMessageModel(database.sequelize)

UserModel.hasMany(MessageModel, {
  foreignKey:"from"
})
UserModel.hasMany(MessageModel, {
  foreignKey:"to"
})
MessageModel.belongsTo(UserModel, {
  foreignKey:"from",
  as:'fromUser'
}) 
MessageModel.belongsTo(UserModel, {
  foreignKey:"to",
  as:"toUser"
})

export { UserModel, MessageModel }