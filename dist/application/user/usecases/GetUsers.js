"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsers = void 0;
class GetUsers {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        const users = await this.userRepository.getUsers();
        return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email
        }));
    }
}
exports.GetUsers = GetUsers;
