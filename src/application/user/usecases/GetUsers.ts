
import { IUSerRepository } from "src/core/user/repositories/IUserRepositories";
import { UserResponseDTO } from "../dto/UserResponseDTO";

export class GetUsers {

    constructor(private readonly userRepository: IUSerRepository){}

    async execute(): Promise<UserResponseDTO[]>{
        const users = await this.userRepository.getUsers();
        
        return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email
        }))

    }

}