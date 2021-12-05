
import { Sequelize } from "sequelize";
import { buildUsersModel } from "./models/Users";

class Database {
  sequelize:Sequelize;
  constructor(url?:string){  
    this.sequelize = new Sequelize('postgres://postgres:21admin06@localhost:5432', {
      host:'localhost',
      port:5432,
      password:"21admin06",
      username:"postgres",
      database:"test"
    })
  }
  async up():Promise<Database>{
    await this.sequelize.sync()
    await this.sequelize.authenticate();
    return this
  }

  async down():Promise<unknown[]>{
    return this.sequelize.drop()
  }
}

const database = new Database()
database.up()
// database.sequelize.model('Users').findAll
const UserModel = buildUsersModel(database.sequelize)

export { Database, UserModel }