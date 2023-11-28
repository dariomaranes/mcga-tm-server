// import cors from 'cors';
import express, { Express, Response } from 'express';

import productRouter from './routes/products';

const app: Express = express();
// app.use(cors());

app.use(express.json());

// Rutas de la app
app.use('/products', productRouter);

app.get('/', (req, res: Response) => {
  res.status(200).send({
    message: 'Server is up ✅ - Environment: ' + process.env.ENV,
    data: undefined,
    error: false,
  });
});

export default app;
