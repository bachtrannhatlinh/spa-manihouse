import { Request, Response, NextFunction } from 'express';
import { Product } from '../models';
import { slugify, formatPaginationResponse, paginateQuery } from '../utils/helpers';

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 12;
    const { category, minPrice, maxPrice, featured, active, search, sort } = req.query;

    const query: Record<string, unknown> = {};
    if (category) query.categoryId = category;
    if (featured !== undefined) query.isFeatured = featured === 'true';
    if (active !== undefined) query.isActive = active === 'true';

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) (query.price as Record<string, number>).$gte = parseInt(minPrice as string);
      if (maxPrice) (query.price as Record<string, number>).$lte = parseInt(maxPrice as string);
    }

    if (search) {
      query.$text = { $search: search as string };
    }

    let sortOption: Record<string, 1 | -1> = { createdAt: -1 };
    if (sort === 'price-asc') sortOption = { price: 1 };
    if (sort === 'price-desc') sortOption = { price: -1 };
    if (sort === 'name') sortOption = { name: 1 };

    const { skip } = paginateQuery(page, limit);
    const [products, total] = await Promise.all([
      Product.find(query)
        .populate('category', 'name slug')
        .sort(sortOption)
        .skip(skip)
        .limit(limit),
      Product.countDocuments(query),
    ]);

    res.json(formatPaginationResponse(products, total, page, limit));
  } catch (error) {
    next(error);
  }
};

export const getFeaturedProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const limit = parseInt(req.query.limit as string) || 8;

    const products = await Product.find({ isFeatured: true, isActive: true })
      .populate('category', 'name slug')
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductBySlug = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .populate('category', 'name slug');

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, ...rest } = req.body;
    const slug = slugify(name);

    const product = new Product({
      name,
      slug,
      ...rest,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
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

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};
