import express from 'express';
import userRoutes from './interface/infra/http/routes/userRoutes';
import { errorHandler } from './interface/infra/http/middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
