"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersId = void 0;
class GetUsersId {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const user = await this.userRepository.getUsersId(id);
        if (!user) {
            throw new Error("Error finding user");
        }
        return { id: user.id, name: user.name, email: user.email };
    }
}
exports.GetUsersId = GetUsersId;
