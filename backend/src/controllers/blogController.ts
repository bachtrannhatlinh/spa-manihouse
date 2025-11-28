import { Request, Response, NextFunction } from 'express';
import { Blog } from '../models';
import { slugify, formatPaginationResponse, paginateQuery } from '../utils/helpers';

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const { category, tag, featured, published, search } = req.query;

    const query: Record<string, unknown> = {};
    if (category) query.categoryId = category;
    if (tag) query.tags = tag;
    if (featured !== undefined) query.isFeatured = featured === 'true';
    if (published !== undefined) query.isPublished = published === 'true';

    if (search) {
      query.$text = { $search: search as string };
    }

    const { skip } = paginateQuery(page, limit);
    const [blogs, total] = await Promise.all([
      Blog.find(query)
        .populate('category', 'name slug')
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Blog.countDocuments(query),
    ]);

    res.json(formatPaginationResponse(blogs, total, page, limit));
  } catch (error) {
    next(error);
  }
};

export const getFeaturedBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const limit = parseInt(req.query.limit as string) || 6;

    const blogs = await Blog.find({ isFeatured: true, isPublished: true })
      .populate('category', 'name slug')
      .sort({ publishedAt: -1 })
      .limit(limit);

    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlogBySlug = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { views: 1 } },
      { new: true }
    ).populate('category', 'name slug');

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, ...rest } = req.body;
    const slug = slugify(title);

    const blog = new Blog({
      title,
      slug,
      ...rest,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, ...rest } = req.body;
    const updateData: Record<string, unknown> = { ...rest };

    if (title) {
      updateData.title = title;
      updateData.slug = slugify(title);
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    next(error);
  }
};
