import { Router } from 'express';
const router = new Router();

import { saveCard } from '../controllers/cardControllers.js';

router.post('/', saveCard);

export default router;