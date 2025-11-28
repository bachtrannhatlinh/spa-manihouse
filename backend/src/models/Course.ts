import mongoose, { Document, Schema } from 'mongoose';
import { ISEOMetadata } from './Category';

export interface ICourseModule {
  title: string;
  description: string;
  duration?: string;
  order: number;
}

export interface ICourse extends Document {
  name: string;
  slug: string;
  categoryId: mongoose.Types.ObjectId;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  description: string;
  price?: number;
  originalPrice?: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  modules: ICourseModule[];
  benefits: string[];
  requirements: string[];
  instructor: string;
  maxStudents?: number;
  schedule?: string;
  location?: string;
  isOnline: boolean;
  isFeatured: boolean;
  isActive: boolean;
  seo: ISEOMetadata;
  createdAt: Date;
  updatedAt: Date;
}

const CourseModuleSchema = new Schema<ICourseModule>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String },
  order: { type: Number, default: 0 },
});

const SEOMetadataSchema = new Schema({
  title: { type: String, required: true, maxlength: 60 },
  description: { type: String, required: true, maxlength: 160 },
  keywords: [{ type: String }],
  image: { type: String },
  canonical: { type: String },
});

const CourseSchema = new Schema<ICourse>(
  {
    name: {
      type: String,
      required: [true, 'Course name is required'],
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
      min: [0, 'Price cannot be negative'],
    },
    originalPrice: {
      type: Number,
      min: [0, 'Original price cannot be negative'],
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    modules: [CourseModuleSchema],
    benefits: [{ type: String }],
    requirements: [{ type: String }],
    instructor: {
      type: String,
      required: [true, 'Instructor name is required'],
    },
    maxStudents: {
      type: Number,
      min: [1, 'Max students must be at least 1'],
    },
    schedule: { type: String },
    location: { type: String },
    isOnline: {
      type: Boolean,
      default: false,
    },
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

CourseSchema.index({ slug: 1 });
CourseSchema.index({ categoryId: 1 });
CourseSchema.index({ isActive: 1, isFeatured: 1 });
CourseSchema.index({ price: 1 });
CourseSchema.index({ level: 1 });

CourseSchema.virtual('category', {
  ref: 'Category',
  localField: 'categoryId',
  foreignField: '_id',
  justOne: true,
});

export default mongoose.model<ICourse>('Course', CourseSchema);
