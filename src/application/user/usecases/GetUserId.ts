
import { IUSerRepository } from "src/core/user/repositories/IUserRepositories";
import { UserResponseDTO } from "../dto/UserResponseDTO";

export class GetUsersId{

    constructor(private readonly userRepository: IUSerRepository) {}

    async execute(id: number): Promise<UserResponseDTO>{
        const user = await this.userRepository.getUsersId(id);
        if(!user){
            throw new Error("Error finding user");
        }

        return{id: user.id, name: user.name, email: user.email}

    }

}