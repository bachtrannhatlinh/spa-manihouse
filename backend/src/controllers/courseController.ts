import { Request, Response, NextFunction } from 'express';
import { Course } from '../models';
import { slugify, formatPaginationResponse, paginateQuery } from '../utils/helpers';

export const getCourses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const { category, level, featured, active } = req.query;

    const query: Record<string, unknown> = {};
    if (category) query.categoryId = category;
    if (level) query.level = level;
    if (featured !== undefined) query.isFeatured = featured === 'true';
    if (active !== undefined) query.isActive = active === 'true';

    const { skip } = paginateQuery(page, limit);
    const [courses, total] = await Promise.all([
      Course.find(query)
        .populate('category', 'name slug')
        .sort({ isFeatured: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Course.countDocuments(query),
    ]);

    res.json(formatPaginationResponse(courses, total, page, limit));
  } catch (error) {
    next(error);
  }
};

export const getFeaturedCourses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const limit = parseInt(req.query.limit as string) || 4;

    const courses = await Course.find({ isFeatured: true, isActive: true })
      .populate('category', 'name slug')
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(courses);
  } catch (error) {
    next(error);
  }
};

export const getCourseBySlug = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug })
      .populate('category', 'name slug');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    next(error);
  }
};

export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, ...rest } = req.body;
    const slug = slugify(name);

    const course = new Course({
      name,
      slug,
      ...rest,
    });

    await course.save();
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

export const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, ...rest } = req.body;
    const updateData: Record<string, unknown> = { ...rest };

    if (name) {
      updateData.name = name;
      updateData.slug = slugify(name);
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    next(error);
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    next(error);
  }
};
