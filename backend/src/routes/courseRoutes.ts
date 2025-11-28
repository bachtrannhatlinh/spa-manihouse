import { Router } from 'express';
import {
  getCourses,
  getCourseBySlug,
  getFeaturedCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController';

const router = Router();

router.get('/', getCourses);
router.get('/featured', getFeaturedCourses);
router.get('/:slug', getCourseBySlug);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
