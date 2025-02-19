import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes';
import { errorHandler } from './middlewares/error';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('MusicStory API is running!');
});

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;