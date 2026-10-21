// src/server.js
import 'dotenv/config';
import express from 'express';
import articlesRouter from './routes/articles.route.js';
import { logger } from './middlewares/logger.middleware.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello dari Express!');
});

app.use('/articles', articlesRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server jalan di http://localhost:${PORT}`);
});