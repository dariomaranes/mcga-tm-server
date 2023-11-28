import dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

import app from './app';
// const port = process.env.PORT || 8080;
const port = 3000 || 8080;

// const MONGODB_URL = process.env.MONGO_URL || '';
const MONGODB_URL =
  'mongodb+srv://radiumrocketpasantiasa:user123@cluster0.edl2ymd.mongodb.net/example?retryWrites=true&w=majority' ||
  '';

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log({ level: 'info', message: '✅ Database connected', label: 'mongo' });
    app.listen(port, () => {
      console.log({
        level: 'info',
        message: `Server listening on port ${port}`,
        label: 'server',
      });
    });
  })
  .catch((error) =>
    console.log({
      level: 'error',
      message: '🔴 Database error: ',
      errorData: error,
      label: 'mongo',
    }),
  );
