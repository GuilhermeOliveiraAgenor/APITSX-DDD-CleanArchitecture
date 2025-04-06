import { IUSerRepository } from "src/core/user/repositories/IUserRepositories";
import { UserResponseDTO } from "../dto/UserResponseDTO";
import { PrismaUserRepository } from "src/interface/infra/repositories/PrismaUserRepository";

export class DeleteUser{

    constructor(private readonly userRepository: IUSerRepository){}

    async execute(id: number): Promise<void>{

        const userExists = await this.userRepository.getUsersId(id);
        
        if(!userExists){
            throw new Error("Error finding user");
        }

        await this.userRepository.deleteUser(id);

    }

}