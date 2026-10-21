import { Router } from 'express';
import { getAllArticles, createArticle } from '../controllers/articles.controller.js';
const router = Router();
router.get('/', getAllArticles);
router.post('/', createArticle);
export default router;
