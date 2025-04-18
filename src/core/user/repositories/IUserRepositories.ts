import { User } from '../entities/User';//interface that reply functions

export interface IUSerRepository{
    create(user: Omit<User, 'id'>): Promise<void>
    findEmail(email: string): Promise<User | null>
    getUsers(): Promise<User[]>
    getUsersId(id: number): Promise<User | null>
    updateUser(user: User): Promise<void>
    deleteUser(id: number): Promise<void>
}