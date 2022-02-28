import { BadRequestError, NotFoundError } from "../domain/Exceptions/Errors";
import { MessageRepository } from "@repository/MessageRepository";
export interface IUserCredentials{
    login:string,
    password:string
}
export class AuthService {
    constructor(private readonly _repo: MessageRepository) { }
    async login(credentials:IUserCredentials) {
        
        // User validate password
        // generate JWT token

    }

}