import { Request, Response, NextFunction } from 'express';
import { Category } from '../models';
import { slugify, formatPaginationResponse, paginateQuery } from '../utils/helpers';

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const { parent, active } = req.query;

    const query: Record<string, unknown> = {};
    if (parent === 'null') {
      query.parent = null;
    } else if (parent) {
      query.parent = parent;
    }
    if (active !== undefined) {
      query.isActive = active === 'true';
    }

    const { skip } = paginateQuery(page, limit);
    const [categories, total] = await Promise.all([
      Category.find(query)
        .populate('children')
        .sort({ order: 1, createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Category.countDocuments(query),
    ]);

    res.json(formatPaginationResponse(categories, total, page, limit));
  } catch (error) {
    next(error);
  }
};

export const getCategoryBySlug = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug })
      .populate('children')
      .populate('parent');

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, ...rest } = req.body;
    const slug = slugify(name);

    const category = new Category({
      name,
      slug,
      ...rest,
    });

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (
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

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    await Category.updateMany({ parent: req.params.id }, { parent: null });

    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    next(error);
  }
};
