// src/interfaces/http/routes/userRoutes.ts
import { Router } from 'express';
import { UserController } from '../../http/controllers/userController';

const router = Router();
const userController = new UserController();

// Aqui usamos o handler diretamente
router.post('/users', userController.create);

router.get('/get', userController.getUsers);

router.get('/getuser/:id', userController.getUsersId);

router.put('/updateuser', userController.updateUser);
        
router.delete('/deleteuser/:id', userController.deleteUser);

export default router;
