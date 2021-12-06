
import { Sequelize } from "sequelize";
import buildMessageModel from "./models/Message";
import Message from "./models/Message";
import buildUserModel from "./models/Users";
import Users from "./models/Users";
class Database {
  sequelize:Sequelize;
  constructor(){ 
    this.sequelize = new Sequelize('postgres://postgres:21admin06@localhost:5432', {
      host:'localhost', 
      port:5432,
      password:"21admin06",
      username:"postgres",
      database:"test",
      dialect:"postgres",
      logging:false
    })
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
// database.up()
// const sequelize = new Sequelize('postgres://postgres:21admin06@localhost:5432/test', {
//   host: 'localhost',
//   port: 5432,
//   password: "21admin06",
//   username: "postgres",
//   database: "test",
//   dialect: "postgres",
//   logging:console.log
// });

// ;(async () => {
//   await sequelize.sync()
//   await sequelize.authenticate();
//   await  sequelize.drop()
// })
database.sequelize.sync()
database.sequelize.authenticate()

const UserModel = buildUserModel(database.sequelize)
const MessageModel = buildMessageModel(database.sequelize)



// export default database.sequelize

export { UserModel, MessageModel }