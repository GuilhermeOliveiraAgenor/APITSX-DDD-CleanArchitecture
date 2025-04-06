"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const PrismaUserRepository_1 = require("../../repositories/PrismaUserRepository");
const CreateUser_1 = require("../../../../application/user/usecases/CreateUser");
const GetUsers_1 = require("../../../../application/user/usecases/GetUsers");
const GetUserId_1 = require("../../../../application/user/usecases/GetUserId");
const UpdateUser_1 = require("../../../../application/user/usecases/UpdateUser");
const DeleteUser_1 = require("../../../../application/user/usecases/DeleteUser");
class UserController {
    constructor() {
        this.create = async (req, res) => {
            const { name, email } = req.body;
            const userRepo = new PrismaUserRepository_1.PrismaUserRepository(); //import function prisma
            const createUser = new CreateUser_1.CreateUser(userRepo); //pass the function to use case
            try {
                await createUser.execute({ name, email });
                res.status(201).json({ message: 'User created successfully!' });
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        };
        this.getUsers = async (req, res) => {
            const userRepo = new PrismaUserRepository_1.PrismaUserRepository();
            const getUsers = new GetUsers_1.GetUsers(userRepo);
            try {
                const users = await getUsers.execute();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ error: "Error listening clients" });
            }
        };
        this.getUsersId = async (req, res) => {
            const id = parseInt(req.params.id);
            const userRepo = new PrismaUserRepository_1.PrismaUserRepository();
            const getUsersId = new GetUserId_1.GetUsersId(userRepo);
            try {
                const user = await getUsersId.execute(id);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(404).json({ error: error.message });
            }
        };
        this.updateUser = async (req, res) => {
            const { id, name, email } = req.body;
            const userRepo = new PrismaUserRepository_1.PrismaUserRepository();
            const updateUser = new UpdateUser_1.UpdateUser(userRepo);
            try {
                await updateUser.execute({ id: Number(id), name, email });
                res.status(200).json(updateUser);
            }
            catch (error) {
                res.status(400).json({ error: "Error updating user" });
            }
        };
        this.deleteUser = async (req, res) => {
            const id = Number(req.params.id);
            const userRepo = new PrismaUserRepository_1.PrismaUserRepository();
            const deleteUser = new DeleteUser_1.DeleteUser(userRepo);
            try {
                await deleteUser.execute(id);
                res.status(200).json(deleteUser);
            }
            catch (error) {
                res.status(500).json({ error: "Error deleting user" });
            }
        };
    }
}
exports.UserController = UserController;
