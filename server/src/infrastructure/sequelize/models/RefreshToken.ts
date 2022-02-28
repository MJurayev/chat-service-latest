import { BelongsToMany, DataTypes, HasMany, Model, Sequelize } from 'sequelize';
import { MessageModel, UserModel } from '..';

const buildRefreshTokenModel = (sequelize: Sequelize) => {
    class RefreshToken extends Model { }
    RefreshToken.init(
        {
            userId:{
                type:DataTypes.INTEGER
            },
            token:{
                type:DataTypes.STRING,
                allowNull:false
            },
            expires:{
                type:DataTypes.DATE,
                allowNull:false
            },
            isExpired:{
                type:DataTypes.VIRTUAL,
                get(){
                    return (<any>this).expires < new Date() 
                }
            },
            createdByIp:{
                type:DataTypes.STRING,
                allowNull:true
            },
            replacedByToken:{
                type:DataTypes.STRING
            }
        },
        {
            sequelize,
            timestamps: true,
            tableName: 'refresh_token',
            modelName: "RefreshToken"
        }
    );

    return RefreshToken
}
export default buildRefreshTokenModel