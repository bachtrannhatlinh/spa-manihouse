# Mani House - Website Chuông Xoay & Sound Healing

Website cho Mani House - Ngôi Nhà Chuông Xoay, được xây dựng với Next.js, Node.js, Express và MongoDB.

## 🏗️ Kiến Trúc

```
spa-manihouse/
├── frontend/          # Next.js + TailwindCSS
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   └── components/ # React components
│   └── public/        # Static assets
│
└── backend/           # Node.js + Express + MongoDB
    └── src/
        ├── models/     # Mongoose models
        ├── routes/     # API routes
        ├── controllers/ # Route handlers
        └── middleware/ # Express middleware
```

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework với App Router
- **TailwindCSS** - Utility-first CSS
- **TypeScript** - Type safety
- **Lucide React** - Icon library

### Backend
- **Node.js + Express** - REST API
- **MongoDB + Mongoose** - Database
- **TypeScript** - Type safety

## 📦 Cài Đặt

### Prerequisites
- Node.js 18+
- MongoDB (local hoặc MongoDB Atlas)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend sẽ chạy tại http://localhost:3000

### Backend

```bash
cd backend
npm install

# Copy .env.example thành .env và cấu hình
cp .env.example .env

# Seed dữ liệu mẫu
npm run seed

# Chạy development server
npm run dev
```

Backend API sẽ chạy tại http://localhost:5000

## 🌐 API Endpoints

### Categories
- `GET /api/categories` - Lấy danh sách danh mục
- `GET /api/categories/:slug` - Lấy chi tiết danh mục
- `POST /api/categories` - Tạo danh mục
- `PUT /api/categories/:id` - Cập nhật danh mục
- `DELETE /api/categories/:id` - Xóa danh mục

### Courses
- `GET /api/courses` - Lấy danh sách khóa học
- `GET /api/courses/featured` - Lấy khóa học nổi bật
- `GET /api/courses/:slug` - Chi tiết khóa học

### Products
- `GET /api/products` - Lấy danh sách sản phẩm
- `GET /api/products/featured` - Sản phẩm nổi bật
- `GET /api/products/:slug` - Chi tiết sản phẩm

### Blogs
- `GET /api/blogs` - Lấy danh sách bài viết
- `GET /api/blogs/featured` - Bài viết nổi bật
- `GET /api/blogs/:slug` - Chi tiết bài viết

### SEO
- `GET /robots.txt` - Robots.txt
- `GET /sitemap.xml` - Sitemap chính
- `GET /sitemap-categories.xml` - Sitemap danh mục
- `GET /sitemap-products.xml` - Sitemap sản phẩm
- `GET /sitemap-courses.xml` - Sitemap khóa học
- `GET /sitemap-blogs.xml` - Sitemap bài viết

## 🎨 Các Trang

- `/` - Trang chủ
- `/ve-chung-toi` - Giới thiệu
- `/khoa-hoc` - Danh sách khóa học
- `/khoa-hoc/[slug]` - Chi tiết khóa học
- `/hoat-dong` - Hoạt động (Workshop, Sound Bath, ...)
- `/vat-pham` - Sản phẩm
- `/blog` - Blog/Góc chia sẻ
- `/lien-he` - Liên hệ

## 📱 Features

### SEO Optimized
- ✅ SSR/SSG với Next.js
- ✅ Meta tags động
- ✅ Open Graph & Twitter Cards
- ✅ Schema.org JSON-LD
- ✅ Dynamic Sitemap
- ✅ robots.txt

### Performance
- ✅ Next/Image optimization
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Gzip/Brotli compression

### UX/UI
- ✅ Responsive design
- ✅ Floating contact buttons
- ✅ Smooth animations
- ✅ Breadcrumbs

## 🔧 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=https://manihouse.vn
```

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/spa-manihouse
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-secret-key
```

## 📝 Scripts

### Frontend
```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Start production
npm run lint     # Lint code
```

### Backend
```bash
npm run dev      # Development với nodemon
npm run build    # Compile TypeScript
npm run start    # Start production
npm run seed     # Seed dữ liệu mẫu
```

## 🚀 Deploy

### Frontend (Vercel)
1. Push code lên GitHub
2. Import project vào Vercel
3. Set environment variables
4. Deploy

### Backend (Railway/Render)
1. Push code lên GitHub
2. Tạo MongoDB Atlas database
3. Deploy backend
4. Set environment variables

## 📄 License

Copyright © 2025 Mani House. All rights reserved.
