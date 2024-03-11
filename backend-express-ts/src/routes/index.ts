import { Router } from 'express';
import userRouter from './user.routes';
import favoritesRouter from './favorites.routes';
import doneRouter from './dones.routes';
import recipesRouter from './recipes.routes';

const router = Router();

router.use('/user', userRouter);

router.use('/favorites', favoritesRouter);
router.use('/dones', doneRouter);
router.use(recipesRouter);

export default router;
