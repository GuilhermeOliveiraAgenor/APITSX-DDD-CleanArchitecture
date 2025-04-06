"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/interfaces/http/routes/userRoutes.ts
const express_1 = require("express");
const userController_1 = require("../../http/controllers/userController");
const router = (0, express_1.Router)();
const userController = new userController_1.UserController();
// Aqui usamos o handler diretamente
router.post('/users', userController.create);
router.get('/get', userController.getUsers);
router.get('/getuser/:id', userController.getUsersId);
router.put('/updateuser', userController.updateUser);
router.delete('/deleteuser', userController.deleteUser);
exports.default = router;
