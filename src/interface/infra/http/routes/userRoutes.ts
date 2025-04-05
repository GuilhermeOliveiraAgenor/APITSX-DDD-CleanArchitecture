// src/interfaces/http/routes/userRoutes.ts
import { Router } from 'express';
import { UserController } from '../../http/controllers/userController';

const router = Router();
const userController = new UserController();

// Aqui usamos o handler diretamente
router.post('/users', userController.create);

export default router;
