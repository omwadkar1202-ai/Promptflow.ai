import express from 'express';
import cors from 'cors';
import promptRoutes from './routes/prompt.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/prompt', promptRoutes);

export default app;