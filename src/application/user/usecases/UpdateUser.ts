import { IUSerRepository } from "src/core/user/repositories/IUserRepositories";
import { UserResponseDTO } from "../dto/UserResponseDTO";
import { User } from "../../../core/user/entities/User";


export class UpdateUser{

    constructor(private readonly userRepository: IUSerRepository){}

    async execute (data: UserResponseDTO): Promise<void>{

        const userExists = await this.userRepository.getUsersId(data.id)

        if(!userExists){
            throw new Error('Erro finding user')
        }

        const users = new User({
            id: data.id,
            name: data.name,
            email: data.email
        })

        await this.userRepository.updateUser(users);

    }

}