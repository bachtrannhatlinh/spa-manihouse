import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Category, Course, Product, Blog } from './models';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/spa-manihouse'
    );
    console.log('Connected to MongoDB');

    await Category.deleteMany({});
    await Course.deleteMany({});
    await Product.deleteMany({});
    await Blog.deleteMany({});
    console.log('Cleared existing data');

    const categories = await Category.insertMany([
      {
        name: 'Khóa Học',
        slug: 'khoa-hoc',
        description: 'Các khóa học chuông xoay từ cơ bản đến nâng cao',
        order: 1,
        seo: {
          title: 'Khóa Học Chuông Xoay - Mani House',
          description: 'Khám phá các khóa học chuông xoay chuyên nghiệp',
          keywords: ['khóa học chuông xoay', 'sound healing course'],
        },
      },
      {
        name: 'Workshop',
        slug: 'workshop',
        description: 'Các buổi workshop trải nghiệm chuông xoay',
        order: 2,
        seo: {
          title: 'Workshop Chuông Xoay - Mani House',
          description: 'Tham gia các buổi workshop trải nghiệm sound healing',
          keywords: ['workshop chuông xoay', 'trải nghiệm sound healing'],
        },
      },
      {
        name: 'Trị Liệu',
        slug: 'tri-lieu',
        description: 'Dịch vụ trị liệu cá nhân với chuông xoay',
        order: 3,
        seo: {
          title: 'Trị Liệu Chuông Xoay - Mani House',
          description: 'Dịch vụ trị liệu âm thanh cá nhân với chuông xoay Himalaya',
          keywords: ['trị liệu chuông xoay', 'sound healing therapy'],
        },
      },
      {
        name: 'Chuông Xoay',
        slug: 'chuong-xoay',
        description: 'Chuông xoay Himalaya chính hãng từ Nepal',
        order: 4,
        seo: {
          title: 'Mua Chuông Xoay Himalaya - Mani House',
          description: 'Chuông xoay Himalaya chính hãng từ Nepal',
          keywords: ['chuông xoay', 'singing bowl', 'chuông nepal'],
        },
      },
      {
        name: 'Chia Sẻ',
        slug: 'chia-se',
        description: 'Góc chia sẻ kiến thức và trải nghiệm',
        order: 5,
        seo: {
          title: 'Góc Chia Sẻ - Mani House Blog',
          description: 'Kiến thức và chia sẻ về Sound Healing',
          keywords: ['sound healing blog', 'chia sẻ chuông xoay'],
        },
      },
    ]);
    console.log('Created categories');

    const khoaHocCategory = categories.find((c) => c.slug === 'khoa-hoc');

    await Course.insertMany([
      {
        name: 'Khóa Cơ Bản',
        slug: 'khoa-co-ban',
        categoryId: khoaHocCategory?._id,
        thumbnail: '/images/courses/basic.jpg',
        shortDescription: 'Giới thiệu về chuông xoay và các kỹ thuật cơ bản',
        description:
          'Khóa học Cơ Bản tại Mani House được thiết kế dành cho những ai mới bắt đầu tìm hiểu về chuông xoay và Sound Healing.',
        duration: '2 ngày (16 giờ)',
        level: 'beginner',
        instructor: 'Sound Healer Tâm Ngọc & Long Kama',
        isFeatured: true,
        benefits: [
          'Hiểu được bản chất và cách hoạt động của chuông xoay',
          'Tự tin sử dụng chuông để thiền định và thư giãn',
          'Nhận chứng chỉ hoàn thành khóa học',
        ],
        seo: {
          title: 'Khóa Học Chuông Xoay Cơ Bản - Mani House',
          description:
            'Khóa học chuông xoay cơ bản dành cho người mới bắt đầu',
          keywords: ['khóa học cơ bản', 'học chuông xoay'],
        },
      },
      {
        name: 'Khóa Nâng Cao Chuyên Sâu',
        slug: 'khoa-nang-cao-chuyen-sau',
        categoryId: khoaHocCategory?._id,
        thumbnail: '/images/courses/advanced.jpg',
        shortDescription: 'Đào sâu kỹ năng với 10+ bài chuông chuyên sâu',
        description:
          'Khóa Nâng Cao Chuyên Sâu là bước tiếp theo cho những học viên đã hoàn thành khóa Cơ Bản.',
        duration: '3 ngày (24 giờ)',
        level: 'intermediate',
        instructor: 'Sound Healer Tâm Ngọc & Long Kama',
        isFeatured: true,
        seo: {
          title: 'Khóa Nâng Cao Chuyên Sâu - Mani House',
          description: 'Khóa học nâng cao cho những ai muốn trở thành Sound Healer',
          keywords: ['khóa nâng cao', 'sound healer'],
        },
      },
    ]);
    console.log('Created courses');

    const chuongCategory = categories.find((c) => c.slug === 'chuong-xoay');

    await Product.insertMany([
      {
        name: 'Chuông Xoay Nepal - 7 Kim Loại',
        slug: 'chuong-xoay-nepal-7-kim-loai',
        categoryId: chuongCategory?._id,
        thumbnail: '/images/products/bowl-1.jpg',
        images: ['/images/products/bowl-1-1.jpg', '/images/products/bowl-1-2.jpg'],
        shortDescription: 'Chuông xoay thủ công từ Nepal với 7 kim loại truyền thống',
        description:
          'Chuông xoay được làm thủ công bởi các nghệ nhân Nepal với 7 kim loại theo truyền thống cổ xưa.',
        price: 2500000,
        quantity: 10,
        attributes: [
          { name: 'Đường kính', value: '18cm' },
          { name: 'Trọng lượng', value: '800g' },
          { name: 'Xuất xứ', value: 'Nepal' },
        ],
        isFeatured: true,
        seo: {
          title: 'Chuông Xoay Nepal 7 Kim Loại - Mani House',
          description: 'Chuông xoay Himalaya thủ công chính hãng từ Nepal',
          keywords: ['chuông xoay nepal', 'singing bowl'],
        },
      },
    ]);
    console.log('Created products');

    const chiaSeCategory = categories.find((c) => c.slug === 'chia-se');

    await Blog.insertMany([
      {
        title: 'Healer có cần được chữa lành?',
        slug: 'healer-co-can-duoc-chua-lanh',
        categoryId: chiaSeCategory?._id,
        thumbnail: '/images/blog/healer.jpg',
        excerpt:
          'Câu hỏi này, mình đã từng mang theo mình suốt một chặng đường dài.',
        content:
          'Câu hỏi này, mình đã từng mang theo mình suốt một chặng đường dài. Khi mình là người chữa lành cho người khác, liệu có ai chữa lành cho mình?',
        author: 'Tâm Ngọc',
        tags: ['healer', 'chữa lành', 'chia sẻ'],
        isFeatured: true,
        isPublished: true,
        publishedAt: new Date(),
        seo: {
          title: 'Healer có cần được chữa lành? - Mani House',
          description:
            'Chia sẻ về hành trình chữa lành của một Sound Healer',
          keywords: ['healer', 'chữa lành', 'sound healing'],
        },
      },
      {
        title: '3 Phương Pháp Trị Liệu Chuông Xoay Phổ Biến',
        slug: '3-phuong-phap-tri-lieu-chuong-xoay',
        categoryId: chiaSeCategory?._id,
        thumbnail: '/images/blog/methods.jpg',
        excerpt:
          'Hiện nay phương pháp trị liệu bằng chuông xoay ngày càng được nhiều người quan tâm.',
        content:
          'Hiện nay phương pháp trị liệu bằng chuông xoay ngày càng được nhiều người quan tâm. Hãy cùng tìm hiểu 3 phương pháp phổ biến nhất.',
        author: 'Long Kama',
        tags: ['trị liệu', 'phương pháp', 'kiến thức'],
        isFeatured: true,
        isPublished: true,
        publishedAt: new Date(),
        seo: {
          title: '3 Phương Pháp Trị Liệu Chuông Xoay - Mani House',
          description:
            'Tìm hiểu 3 phương pháp trị liệu chuông xoay phổ biến và hiệu quả',
          keywords: ['trị liệu chuông xoay', 'phương pháp'],
        },
      },
    ]);
    console.log('Created blogs');

    console.log('✅ Seed data completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
};

seedData();
