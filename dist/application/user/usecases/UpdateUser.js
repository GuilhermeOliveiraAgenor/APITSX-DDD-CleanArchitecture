"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
const User_1 = require("../../../core/user/entities/User");
class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const userExists = await this.userRepository.getUsersId(data.id);
        if (!userExists) {
            throw new Error('Erro finding user');
        }
        const users = new User_1.User({
            id: data.id,
            name: data.name,
            email: data.email
        });
        await this.userRepository.updateUser(users);
    }
}
exports.UpdateUser = UpdateUser;
