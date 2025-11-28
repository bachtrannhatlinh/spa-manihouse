import { Router } from 'express';
import {
  getBlogs,
  getBlogBySlug,
  getFeaturedBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController';

const router = Router();

router.get('/', getBlogs);
router.get('/featured', getFeaturedBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;
