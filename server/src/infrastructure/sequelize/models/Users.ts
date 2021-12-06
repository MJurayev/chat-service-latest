import { DataTypes, Model, Sequelize } from 'sequelize';
export interface IBookModelAttributes {
    name: string;
}

const buildUserModel = (sequelize: Sequelize) => {
    class Users extends Model { }
    Users.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: true
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            sequelize,
            timestamps: true,
            tableName: 'users'
        },
    );
    return Users
}
export default buildUserModel