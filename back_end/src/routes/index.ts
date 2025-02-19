import { Router } from 'express';
import songRoutes from './songRoutes';
import storyRoutes from './storyRoutes';

const router = Router();

router.use('/songs', songRoutes);
router.use('/stories', storyRoutes);

export { router };