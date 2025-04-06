"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
class DeleteUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const userExists = await this.userRepository.getUsersId(id);
        if (!userExists) {
            throw new Error("Error finding user");
        }
        await this.userRepository.deleteUser(id);
    }
}
exports.DeleteUser = DeleteUser;
