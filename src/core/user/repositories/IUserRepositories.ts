import { User } from '../entities/User';//interface that reply functions

export interface IUSerRepository{
    create(user: Omit<User, 'id'>): Promise<void>
    findEmail(email: string): Promise<User | null>
}