import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'Healer có cần được chữa lành?',
    excerpt:
      'Câu hỏi này, mình đã từng mang theo mình suốt một chặng đường dài. Khi mình là người chữa lành cho người khác...',
    image: '/images/blog/healer.jpg',
    date: '2025-01-15',
    category: 'Chia sẻ',
    href: '/blog/healer-co-can-duoc-chua-lanh',
  },
  {
    title: '3 Phương Pháp Trị Liệu Chuông Xoay Phổ Biến',
    excerpt:
      'Hiện nay phương pháp trị liệu bằng chuông xoay ngày càng được nhiều người quan tâm. Hãy cùng tìm hiểu 3 phương pháp phổ biến nhất...',
    image: '/images/blog/methods.jpg',
    date: '2025-01-10',
    category: 'Kiến thức',
    href: '/blog/3-phuong-phap-tri-lieu-chuong-xoay',
  },
  {
    title: 'Ai Có Thể Học Chuông?',
    excerpt:
      '4 năm trước, mình hoàn toàn là một người vô minh, mãi mê lao vào đời sống thường nhật và không có quá nhiều niềm tin...',
    image: '/images/blog/who-can-learn.jpg',
    date: '2025-01-05',
    category: 'Chia sẻ',
    href: '/blog/ai-co-the-hoc-chuong',
  },
  {
    title: 'Chăm sóc sức khỏe tinh thần trong doanh nghiệp',
    excerpt:
      'Ngày càng nhiều doanh nghiệp bắt đầu chú trọng đến yếu tố sức khỏe tinh thần cho nhân viên...',
    image: '/images/blog/corporate.jpg',
    date: '2025-01-01',
    category: 'Xu hướng',
    href: '/blog/cham-soc-suc-khoe-tinh-than-doanh-nghiep',
  },
];

export default function BlogSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary-600 font-medium mb-2">Góc Chia Sẻ</p>
            <h2 className="heading-2 text-secondary-800">
              Bài Viết Mới Nhất
            </h2>
            <p className="mt-4 text-secondary-600 max-w-xl">
              Nếu bạn tin điều bạn đang nghĩ là tốt đẹp, đừng ngần ngại chia sẻ
              nó đến với những người hữu duyên
            </p>
          </div>
          <Link
            href="/blog"
            className="btn-outline self-start md:self-auto"
          >
            Xem Tất Cả
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.href}
              className="group card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-secondary-500 text-xs mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <h3 className="font-heading font-semibold text-secondary-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm mt-4 group-hover:gap-2 transition-all">
                  Xem ngay
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
