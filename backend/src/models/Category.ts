import mongoose, { Document, Schema } from 'mongoose';

export interface ISEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  canonical?: string;
}

export interface ICategory extends Document {
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  thumbnail?: string;
  icon?: string;
  parent?: mongoose.Types.ObjectId;
  order: number;
  isActive: boolean;
  seo: ISEOMetadata;
  createdAt: Date;
  updatedAt: Date;
}

const SEOMetadataSchema = new Schema<ISEOMetadata>({
  title: { type: String, required: true, maxlength: 60 },
  description: { type: String, required: true, maxlength: 160 },
  keywords: [{ type: String }],
  image: { type: String },
  canonical: { type: String },
});

const CategorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    shortDescription: {
      type: String,
      maxlength: [300, 'Short description cannot exceed 300 characters'],
    },
    thumbnail: {
      type: String,
    },
    icon: {
      type: String,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    order: {
      type: Number,
      default: 0,
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

CategorySchema.index({ slug: 1 });
CategorySchema.index({ parent: 1 });
CategorySchema.index({ isActive: 1, order: 1 });

CategorySchema.virtual('children', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'parent',
});

export default mongoose.model<ICategory>('Category', CategorySchema);
