import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Routes
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);

const port = 5100 || process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to db');
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
