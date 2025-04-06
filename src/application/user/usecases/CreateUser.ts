import { IUSerRepository } from "../../../core/user/repositories/IUserRepositories";
import { CreateUserDTO } from "../dto/CreateUserDTO";
import { User } from "../../../core/user/entities/User";
import { Email } from "../../../core/user/valueobjects/Email";

export class CreateUser{

    constructor(private readonly userRepository: IUSerRepository) {}

    async execute (data: CreateUserDTO): Promise<void>{

        const userExits = await this.userRepository.findEmail(data.email);
        if(userExits){
                throw new Error ('User already exists');
        }

        const user = new User({id: 0, name: data.name, email: data.email});
        await this.userRepository.create(user);

    }

}

