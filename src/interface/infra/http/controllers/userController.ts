import { Request, Response } from 'express';
import { PrismaUserRepository } from '../../repositories/PrismaUserRepository';
import { CreateUser } from '../../../../application/user/usecases/CreateUser';
import { GetUsers } from '../../../../application/user/usecases/GetUsers';
import { GetUsersId } from '../../../../application/user/usecases/GetUserId';
import { UpdateUser } from '../../../../application/user/usecases/UpdateUser';
import { DeleteUser } from '../../../../application/user/usecases/DeleteUser';

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

  public getUsers = async (req: Request, res: Response): Promise<void> =>{
    
    const userRepo = new PrismaUserRepository();
    const getUsers = new GetUsers(userRepo);

    try {
      const users = await getUsers.execute();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({error: "Error listening clients"})
    }
  }

  public getUsersId = async (req: Request, res: Response): Promise<void> =>{
    
    const id = parseInt(req.params.id);

    const userRepo = new PrismaUserRepository();
    const getUsersId = new GetUsersId(userRepo);

    try {
    
      const user = await getUsersId.execute(id);
      res.status(200).json(user);

    } catch (error :any) {
      res.status(404).json({error: error.message})
    }
  }

  public updateUser = async(req: Request, res: Response): Promise<void> =>{

    const {id, name, email} = req.body;

    const userRepo = new PrismaUserRepository();
    const updateUser = new UpdateUser(userRepo);

    try {

      await updateUser.execute({id: Number(id), name, email})
      res.status(200).json(updateUser);

    } catch (error: any) {
      res.status(400).json({error : "Error updating user"});
    }

  }

  public deleteUser = async(req: Request, res: Response): Promise<void> =>{

    const id = req.params.id;

    const userRepo = new PrismaUserRepository();
    const deleteUser = new DeleteUser(userRepo);

    try {
      
      await deleteUser.execute(Number(id));
      res.status(200).json("User deleted");


    } catch (error: any) {
      res.status(500).json({error: "Error deleting user"})
    }
  }

}