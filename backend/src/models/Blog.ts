import mongoose, { Document, Schema } from 'mongoose';
import { ISEOMetadata } from './Category';

export interface IBlog extends Document {
  title: string;
  slug: string;
  categoryId: mongoose.Types.ObjectId;
  thumbnail: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  isFeatured: boolean;
  isPublished: boolean;
  publishedAt?: Date;
  views: number;
  seo: ISEOMetadata;
  createdAt: Date;
  updatedAt: Date;
}

const SEOMetadataSchema = new Schema({
  title: { type: String, required: true, maxlength: 60 },
  description: { type: String, required: true, maxlength: 160 },
  keywords: [{ type: String }],
  image: { type: String },
  canonical: { type: String },
});

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
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
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail is required'],
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      maxlength: [500, 'Excerpt cannot exceed 500 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    tags: [{ type: String }],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    views: {
      type: Number,
      default: 0,
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

BlogSchema.index({ slug: 1 });
BlogSchema.index({ categoryId: 1 });
BlogSchema.index({ isPublished: 1, publishedAt: -1 });
BlogSchema.index({ tags: 1 });
BlogSchema.index({ isFeatured: 1 });
BlogSchema.index({ title: 'text', content: 'text' });

BlogSchema.virtual('category', {
  ref: 'Category',
  localField: 'categoryId',
  foreignField: '_id',
  justOne: true,
});

BlogSchema.pre('save', function (next) {
  if (this.isModified('isPublished') && this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

export default mongoose.model<IBlog>('Blog', BlogSchema);
