import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Khóa Học Chuông Xoay - Trở Thành Sound Healer',
  description:
    'Khám phá các khóa học chuông xoay từ cơ bản đến nâng cao tại Mani House. Học cách sử dụng chuông xoay Himalaya để chữa lành bản thân và người khác.',
  openGraph: {
    title: 'Khóa Học Chuông Xoay - Mani House',
    description:
      'Các khóa học chuông xoay chuyên nghiệp, từ cơ bản đến nâng cao',
    images: ['/images/courses/og-courses.jpg'],
  },
};

const courses = [
  {
    title: 'Khóa Cơ Bản',
    subtitle: 'Bước đầu tiên trên hành trình Sound Healing',
    description:
      'Giới thiệu về chuông xoay, kỹ thuật sử dụng chuông xoay cơ bản, các bài chuông cơ bản, hỗ trợ các vấn đề thường gặp.',
    image: '/images/courses/basic.jpg',
    duration: '2 ngày',
    students: '10-15 học viên',
    level: 'Người mới bắt đầu',
    href: '/khoa-hoc/khoa-co-ban',
    highlights: [
      'Lịch sử & nguồn gốc chuông xoay',
      'Kỹ thuật gõ & xoay chuông cơ bản',
      '5+ bài chuông ứng dụng',
      'Thực hành trị liệu bản thân',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Khóa Nâng Cao Chuyên Sâu',
    subtitle: 'Đào sâu kỹ năng & kiến thức',
    description:
      'Hơn 10 bài chuông chuyên sâu, hướng dẫn chi tiết cách sắp xếp, điều phối các hoạt động cộng đồng, kiến thức nâng cao.',
    image: '/images/courses/advanced.jpg',
    duration: '3 ngày',
    students: '8-12 học viên',
    level: 'Đã học cơ bản',
    href: '/khoa-hoc/khoa-nang-cao-chuyen-sau',
    highlights: [
      '10+ bài chuông chuyên sâu',
      'Kỹ thuật trị liệu cá nhân',
      'Điều phối Sound Bath',
      'Tổ chức workshop cộng đồng',
    ],
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Khóa Nâng Cao Mở Rộng',
    subtitle: 'Trở thành Sound Healer chuyên nghiệp',
    description:
      'Các kỹ thuật nâng cao, cách sử dụng các phương tiện chữa lành bằng âm thanh khác, kỹ năng điều phối các hoạt động Sound Healing, tư duy làm nghề.',
    image: '/images/courses/expert.jpg',
    duration: '4 ngày',
    students: '6-10 học viên',
    level: 'Sound Healer',
    href: '/khoa-hoc/khoa-nang-cao-mo-rong',
    highlights: [
      'Kết hợp nhiều nhạc cụ trị liệu',
      'Xây dựng thương hiệu cá nhân',
      'Marketing cho Sound Healer',
      'Tư duy & đạo đức nghề nghiệp',
    ],
    color: 'from-amber-500 to-orange-600',
  },
];

const benefits = [
  {
    title: 'Chương trình chuẩn',
    description: 'Được xây dựng từ kinh nghiệm thực tế 4+ năm',
  },
  {
    title: 'Học viên ít',
    description: 'Đảm bảo chất lượng hướng dẫn 1-1',
  },
  {
    title: 'Thực hành nhiều',
    description: '70% thời gian dành cho thực hành',
  },
  {
    title: 'Hỗ trợ sau khóa',
    description: 'Cộng đồng & mentor hỗ trợ lâu dài',
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary-900 to-secondary-800">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <p className="text-primary-400 font-medium mb-3">Khóa Học</p>
            <h1 className="heading-1 mb-6">
              Làm Lành Cho Chính Mình
              <span className="text-primary-400 block mt-2">Bằng Âm Thanh</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              Hành trình từ người yêu thích đến Sound Healer chuyên nghiệp. Mani
              House đồng hành cùng bạn trên mỗi bước đi.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-800 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-20`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${course.color} mb-4`}
                  >
                    {course.level}
                  </span>
                  <h2 className="heading-3 text-secondary-800 mb-2">
                    {course.title}
                  </h2>
                  <p className="text-primary-600 font-medium mb-4">
                    {course.subtitle}
                  </p>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="flex items-center gap-2 text-secondary-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-2 text-secondary-500 text-sm">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="bg-white rounded-xl p-5 mb-6">
                    <h4 className="font-semibold text-secondary-800 mb-3">
                      Nội dung chính:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-secondary-600"
                        >
                          <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={course.href}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Xem Chi Tiết
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gieo Duyên Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center text-white">
          <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="heading-2 mb-4">Khóa Gieo Duyên</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Bạn muốn trải nghiệm trước khi đăng ký khóa học chính thức? Hãy tham
            gia buổi Gieo Duyên miễn phí để cảm nhận năng lượng chuông xoay
            Himalaya.
          </p>
          <Link
            href="/khoa-hoc/gieo-duyen"
            className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8"
          >
            Đăng Ký Gieo Duyên
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-secondary-800 mb-4">
            Bạn Chưa Biết Chọn Khóa Nào?
          </h2>
          <p className="text-secondary-600 max-w-xl mx-auto mb-8">
            Liên hệ để được tư vấn khóa học phù hợp với nhu cầu và mục tiêu của
            bạn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/lien-he" className="btn-primary">
              Đăng Ký Tư Vấn
            </Link>
            <a
              href="tel:0937613354"
              className="btn-secondary"
            >
              Gọi: 0937 613 354
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
