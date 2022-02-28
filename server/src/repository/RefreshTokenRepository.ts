import { values } from "sequelize/dist/lib/operators";
import { RefreshTokenModel } from "../infrastructure/sequelize";
export interface createRefreshTokenDTO {
    userId:number,
    token:string,
    expires:Date,
    expired:Date,
    createdByIp:string,
    replacedByToken:String
}

// export interface createdRefreshTokenDTO extends createRefreshTokenDTO {
//     id: number,
//     created_at: Date,
//     updated_at: Date
// }

export class RefreshTokenRepository {
    async getAll() {
        const tokens = await RefreshTokenModel.findAll()
        return tokens
    }

    async getByToken(token: string) {
        const refreshToken = await RefreshTokenModel.findOne({where:{token}})
        return refreshToken
    }

    async addRefreshToken(tokenObj: createRefreshTokenDTO) {
        const result = new RefreshTokenModel(tokenObj)
        return await result.save()
    }
    async revokeToken(token: string) {
        const result =await RefreshTokenModel.update({expires: new Date(Date.now() - 10)}, {
            where:{
                token
            }
        })
        return result
    }
}

const _repo = new RefreshTokenRepository()
// _repo.addRefreshToken({
//     userId:1,
//     createdByIp:"21212",
//     expired:new Date(),
//     expires:new Date(),
//     token:"Token",
//     replacedByToken:"new Token"
// }).then(() => {
//     console.log("INserted")
//     _repo.getAll().then((tokens) => {
//         console.log(tokens) 
//     })
// })

// _repo.getAll().then((tokens) => {
//             console.log(JSON.stringify(tokens)) 
//         })