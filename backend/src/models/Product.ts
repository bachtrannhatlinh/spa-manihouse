import mongoose, { Document, Schema } from 'mongoose';
import { ISEOMetadata } from './Category';

export interface IProductAttribute {
  name: string;
  value: string;
}

export interface IProduct extends Document {
  name: string;
  slug: string;
  categoryId: mongoose.Types.ObjectId;
  sku?: string;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  attributes: IProductAttribute[];
  tags: string[];
  isFeatured: boolean;
  isActive: boolean;
  seo: ISEOMetadata;
  createdAt: Date;
  updatedAt: Date;
}

const ProductAttributeSchema = new Schema<IProductAttribute>({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

const SEOMetadataSchema = new Schema({
  title: { type: String, required: true, maxlength: 60 },
  description: { type: String, required: true, maxlength: 160 },
  keywords: [{ type: String }],
  image: { type: String },
  canonical: { type: String },
});

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [200, 'Name cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required'],
    },
    sku: {
      type: String,
      unique: true,
      sparse: true,
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail is required'],
    },
    images: [{ type: String }],
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
      maxlength: [500, 'Short description cannot exceed 500 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    originalPrice: {
      type: Number,
      min: [0, 'Original price cannot be negative'],
    },
    quantity: {
      type: Number,
      default: 0,
      min: [0, 'Quantity cannot be negative'],
    },
    attributes: [ProductAttributeSchema],
    tags: [{ type: String }],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    seo: {
      type: SEOMetadataSchema,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ProductSchema.index({ slug: 1 });
ProductSchema.index({ categoryId: 1 });
ProductSchema.index({ isActive: 1, isFeatured: 1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ tags: 1 });
ProductSchema.index({ name: 'text', description: 'text' });

ProductSchema.virtual('category', {
  ref: 'Category',
  localField: 'categoryId',
  foreignField: '_id',
  justOne: true,
});

export default mongoose.model<IProduct>('Product', ProductSchema);
