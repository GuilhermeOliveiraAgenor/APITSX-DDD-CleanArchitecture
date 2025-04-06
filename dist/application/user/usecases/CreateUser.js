"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const User_1 = require("../../../core/user/entities/User");
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const userExits = await this.userRepository.findEmail(data.email);
        if (userExits) {
            throw new Error('User already exists');
        }
        const user = new User_1.User({ id: 0, name: data.name, email: data.email });
        await this.userRepository.create(user);
    }
}
exports.CreateUser = CreateUser;
