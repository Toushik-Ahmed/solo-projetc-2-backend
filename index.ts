import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import connectMongoose from './db';
import router from './routers/router';

const app: Express = express();
app.use(express.json());
app.use(router);

async function bootstrap() {
  try {
    await connectMongoose();
    app.listen(3000, () => {
      console.log('server is running on port 3000');
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
