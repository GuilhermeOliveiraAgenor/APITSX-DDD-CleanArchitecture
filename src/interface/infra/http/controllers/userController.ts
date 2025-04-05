import { Request, Response } from 'express';
import { PrismaUserRepository } from '../../repositories/PrismaUserRepository';
import { CreateUser } from '../../../../application/user/usecases/CreateUser';


export class UserController {
  public create = async (req: Request, res: Response): Promise<void> => {
    const { name, email } = req.body;

    const userRepo = new PrismaUserRepository();//import function prisma
    const createUser = new CreateUser(userRepo);//pass the function to use case

    try {
      await createUser.execute({ name, email });
      res.status(201).json({ message: 'User created successfully!' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}