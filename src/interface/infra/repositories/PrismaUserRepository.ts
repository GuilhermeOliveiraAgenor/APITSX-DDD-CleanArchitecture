import { IUSerRepository } from "../../../core/user/repositories/IUserRepositories";
import { User } from "../../../core/user/entities/User";
import { prisma } from "../../../config/prisma";

export class PrismaUserRepository implements IUSerRepository{

    async create(user: Omit<User, 'id'>): Promise<void>{
        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
            },
        });
    }

    async findEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({where: {email}});

        if(!user) return null;

        return new User(user);

    }

    async getUsers(): Promise<User[]> {
        const user = await prisma.user.findMany();
        return user.map((data) => new User(data))
    }

    async getUsersId(id: number): Promise<User | null> {
        const user = await prisma.user.findUnique({where: {id}});
        if(!user) return null;
        return new User(user);
    }

    async updateUser(user: User): Promise<void> {
        await prisma.user.update({where: {id: user.id},
        data:{
            name: user.name,
            email: user.email
        }
    })
    
    }

    async deleteUser(id: number): Promise<void> {
        await prisma.user.delete({where: {id: id}})
    }

}
