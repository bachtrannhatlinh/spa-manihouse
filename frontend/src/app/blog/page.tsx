import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Góc Chia Sẻ - Blog Về Sound Healing & Chuông Xoay',
  description:
    'Khám phá kiến thức về chuông xoay, sound healing, thiền định và hành trình chữa lành. Chia sẻ từ Sound Healer và học viên Mani House.',
  openGraph: {
    title: 'Góc Chia Sẻ - Mani House Blog',
    description:
      'Kiến thức và chia sẻ về Sound Healing, chuông xoay Himalaya',
    images: ['/images/blog/og-blog.jpg'],
  },
};

const categories = [
  { name: 'Tất cả', slug: 'all', count: 24 },
  { name: 'Kiến thức', slug: 'kien-thuc', count: 10 },
  { name: 'Chia sẻ', slug: 'chia-se', count: 8 },
  { name: 'Workshop', slug: 'workshop', count: 4 },
  { name: 'Xu hướng', slug: 'xu-huong', count: 2 },
];

const featuredPost = {
  title: 'Healer có cần được chữa lành?',
  excerpt:
    'Câu hỏi này, mình đã từng mang theo mình suốt một chặng đường dài. Khi mình là người chữa lành cho người khác, liệu có ai chữa lành cho mình? Và mình đã tìm ra câu trả lời...',
  image: '/images/blog/healer-featured.jpg',
  date: '2025-01-15',
  category: 'Chia sẻ',
  author: 'Tâm Ngọc',
  href: '/blog/healer-co-can-duoc-chua-lanh',
};

const posts = [
  {
    title: 'Workshop Thang Âm Nuôi Dưỡng Tâm Hồn',
    excerpt:
      'Workshop của chúng mình đã khép lại với thật nhiều cảm xúc. Từ tươi mới, hồn nhiên cho đến sự thư giãn sâu...',
    image: '/images/blog/workshop-1.jpg',
    date: '2025-01-12',
    category: 'Workshop',
    href: '/blog/workshop-thang-am-nuoi-duong-tam-hon',
  },
  {
    title: '3 Phương Pháp Trị Liệu Chuông Xoay Phổ Biến',
    excerpt:
      'Hiện nay phương pháp trị liệu bằng chuông xoay ngày càng được nhiều người quan tâm...',
    image: '/images/blog/methods.jpg',
    date: '2025-01-10',
    category: 'Kiến thức',
    href: '/blog/3-phuong-phap-tri-lieu-chuong-xoay',
  },
  {
    title: 'Ai Có Thể Học Chuông?',
    excerpt:
      '4 năm trước, mình hoàn toàn là một người vô minh, mãi mê lao vào đời sống thường nhật...',
    image: '/images/blog/who-can-learn.jpg',
    date: '2025-01-08',
    category: 'Chia sẻ',
    href: '/blog/ai-co-the-hoc-chuong',
  },
  {
    title: 'Vì Sao Chúng Mình Chọn Chuông Xoay Từ Nepal?',
    excerpt:
      'Chuông xoay Nepal được làm thủ công bởi các nghệ nhân với truyền thống hàng trăm năm...',
    image: '/images/blog/nepal-bowls.jpg',
    date: '2025-01-05',
    category: 'Kiến thức',
    href: '/blog/vi-sao-chon-chuong-xoay-nepal',
  },
  {
    title: 'Chăm Sóc Sức Khỏe Tinh Thần Trong Doanh Nghiệp',
    excerpt:
      'Ngày càng nhiều doanh nghiệp bắt đầu chú trọng đến yếu tố sức khỏe tinh thần cho nhân viên...',
    image: '/images/blog/corporate.jpg',
    date: '2025-01-01',
    category: 'Xu hướng',
    href: '/blog/cham-soc-suc-khoe-tinh-than-doanh-nghiep',
  },
  {
    title: 'Mani House - An Lạc Khởi Từ Tâm',
    excerpt:
      'Tháng 6 trôi qua thật dịu dàng tại Mani House – nơi mỗi khoá Gieo Duyên, những trái tim xa lạ lặng lẽ tìm về nhau...',
    image: '/images/blog/manihouse-peace.jpg',
    date: '2024-12-28',
    category: 'Chia sẻ',
    href: '/blog/mani-house-an-lac-khoi-tu-tam',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary-100 to-white">
        <div className="container-custom text-center">
          <p className="text-primary-600 font-medium mb-3">Góc Chia Sẻ</p>
          <h1 className="heading-1 text-secondary-800 mb-6">
            Kiến Thức & Trải Nghiệm
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Nếu bạn tin điều bạn đang nghĩ là tốt đẹp, đừng ngần ngại chia sẻ nó
            đến với những người hữu duyên
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat.slug === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600'
                  }`}
                >
                  {cat.name}
                  <span className="ml-1 opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                className="pl-10 pr-4 py-2 border border-secondary-200 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none w-full md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <Link href={featuredPost.href} className="block group">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Nổi bật
                </span>
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="heading-3 text-secondary-800 mb-4 group-hover:text-primary-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-secondary-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium text-sm">
                        {featuredPost.author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-800">
                        {featuredPost.author}
                      </p>
                      <p className="text-xs text-secondary-500">
                        {new Date(featuredPost.date).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-2 text-primary-600 font-medium">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={index} href={post.href} className="group card">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-secondary-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-secondary-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                    Xem ngay
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="w-10 h-10 bg-primary-600 text-white rounded-lg font-medium">
              1
            </button>
            <button className="w-10 h-10 bg-secondary-100 text-secondary-600 rounded-lg font-medium hover:bg-primary-100">
              2
            </button>
            <button className="w-10 h-10 bg-secondary-100 text-secondary-600 rounded-lg font-medium hover:bg-primary-100">
              3
            </button>
            <span className="w-10 h-10 flex items-center justify-center text-secondary-400">
              ...
            </span>
            <button className="w-10 h-10 bg-secondary-100 text-secondary-600 rounded-lg font-medium hover:bg-primary-100">
              8
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center text-white">
          <h2 className="heading-3 mb-4">
            Nhận Bài Viết Mới Qua Email
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Đăng ký để nhận thông tin về các bài viết mới, khóa học và hoạt động
            sắp tới của Mani House.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-secondary-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="btn-secondary">
              Đăng Ký
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
