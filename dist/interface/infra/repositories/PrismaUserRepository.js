"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const User_1 = require("../../../core/user/entities/User");
const prisma_1 = require("../../../config/prisma");
class PrismaUserRepository {
    async create(user) {
        await prisma_1.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
            },
        });
    }
    async findEmail(email) {
        const user = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (!user)
            return null;
        return new User_1.User(user);
    }
    async getUsers() {
        const user = await prisma_1.prisma.user.findMany();
        return user.map((data) => new User_1.User(data));
    }
    async getUsersId(id) {
        const user = await prisma_1.prisma.user.findUnique({ where: { id } });
        if (!user)
            return null;
        return new User_1.User(user);
    }
    async updateUser(user) {
        await prisma_1.prisma.user.update({ where: { id: user.id },
            data: {
                name: user.name,
                email: user.email
            }
        });
    }
    async deleteUser(id) {
        await prisma_1.prisma.user.delete({ where: { id: id } });
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
