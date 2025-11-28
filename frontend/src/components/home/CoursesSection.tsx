import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, BookOpen, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Khóa Cơ Bản',
    description:
      'Giới thiệu về chuông xoay, kỹ thuật sử dụng chuông xoay cơ bản, các bài chuông cơ bản, hỗ trợ các vấn đề thường gặp.',
    image: '/images/courses/basic.jpg',
    duration: '2 ngày',
    students: '10-15 học viên',
    level: 'Người mới',
    href: '/khoa-hoc/khoa-co-ban',
    featured: true,
  },
  {
    title: 'Khóa Nâng Cao Chuyên Sâu',
    description:
      'Hơn 10 bài chuông chuyên sâu, hướng dẫn chi tiết cách sắp xếp, điều phối các hoạt động cộng đồng.',
    image: '/images/courses/advanced.jpg',
    duration: '3 ngày',
    students: '8-12 học viên',
    level: 'Nâng cao',
    href: '/khoa-hoc/khoa-nang-cao-chuyen-sau',
    featured: true,
  },
  {
    title: 'Khóa Nâng Cao Mở Rộng',
    description:
      'Các kỹ thuật nâng cao, cách sử dụng các phương tiện chữa lành bằng âm thanh khác, tư duy làm nghề.',
    image: '/images/courses/expert.jpg',
    duration: '4 ngày',
    students: '6-10 học viên',
    level: 'Chuyên gia',
    href: '/khoa-hoc/khoa-nang-cao-mo-rong',
    featured: false,
  },
];

export default function CoursesSection() {
  return (
    <section className="section-padding bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary-400 font-medium mb-2">Khóa Học</p>
          <h2 className="heading-2">
            Làm Lành Cho Chính Mình
            <span className="block text-primary-400 mt-1">Bằng Âm Thanh</span>
          </h2>
          <p className="mt-4 text-secondary-300 max-w-2xl mx-auto">
            Với khoá học ứng dụng chuông xoay trong đời sống nhà Mani House, bạn
            sẽ tiếp cận phương pháp trị liệu âm thanh một cách an toàn và hiệu
            quả.
          </p>
        </div>

        {/* Target Audience */}
        <div className="bg-secondary-800 rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-400 mb-3">
                Bạn đang tìm kiếm...
              </h3>
              <p className="text-secondary-300 text-sm leading-relaxed">
                Một cơ hội để thay đổi bản thân, phát triển con đường chữa lành
                tự thân, khám phá hành trình trở thành một Sound Healer chuyên
                nghiệp.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-400 mb-3">
                Bạn đang thực hành...
              </h3>
              <p className="text-secondary-300 text-sm leading-relaxed">
                Yoga, thiền định hay các công việc liên quan đến trị liệu,
                healing, coaching và muốn thực hành thêm phương pháp trị liệu
                chuông xoay để bổ trợ.
              </p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={course.href}
              className="group bg-secondary-800 rounded-2xl overflow-hidden hover:bg-secondary-750 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {course.featured && (
                  <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Phổ biến
                  </span>
                )}
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary-600/20 text-primary-400 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {course.level}
                </span>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-secondary-400 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-secondary-500 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </span>
                </div>

                <span className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/khoa-hoc"
            className="btn-outline border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Xem Tất Cả Khóa Học
          </Link>
        </div>
      </div>
    </section>
  );
}
