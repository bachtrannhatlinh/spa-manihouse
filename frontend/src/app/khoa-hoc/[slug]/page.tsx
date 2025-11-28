import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  Users,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Phone,
} from 'lucide-react';
import CourseSchema from '@/components/seo/CourseSchema';

const coursesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  duration: string;
  students: string;
  level: string;
  price: string;
  schedule: string;
  location: string;
  instructor: string;
  modules: { title: string; content: string[] }[];
  benefits: string[];
  requirements: string[];
  seo: { title: string; description: string };
}> = {
  'khoa-co-ban': {
    title: 'Khóa Cơ Bản',
    subtitle: 'Bước đầu tiên trên hành trình Sound Healing',
    description:
      'Giới thiệu về chuông xoay, kỹ thuật sử dụng chuông xoay cơ bản, các bài chuông cơ bản.',
    longDescription: `Khóa học Cơ Bản tại Mani House được thiết kế dành cho những ai mới bắt đầu 
    tìm hiểu về chuông xoay và Sound Healing. Trong khóa học này, bạn sẽ được giới thiệu 
    về lịch sử, nguồn gốc của chuông xoay Himalaya, cách phân biệt các loại chuông, 
    và các kỹ thuật cơ bản để sử dụng chuông xoay an toàn và hiệu quả.`,
    image: '/images/courses/basic.jpg',
    gallery: [
      '/images/courses/basic-1.jpg',
      '/images/courses/basic-2.jpg',
      '/images/courses/basic-3.jpg',
    ],
    duration: '2 ngày (16 giờ)',
    students: '10-15 học viên',
    level: 'Người mới bắt đầu',
    price: 'Liên hệ',
    schedule: 'Cuối tuần hàng tháng',
    location: 'Mani House HCM & Hà Nội',
    instructor: 'Sound Healer Tâm Ngọc & Long Kama',
    modules: [
      {
        title: 'Ngày 1: Kiến thức nền tảng',
        content: [
          'Lịch sử và nguồn gốc chuông xoay Himalaya',
          'Cách phân biệt và chọn chuông phù hợp',
          'Kỹ thuật gõ chuông cơ bản',
          'Kỹ thuật xoay chuông',
          'Thực hành với sự hướng dẫn 1-1',
        ],
      },
      {
        title: 'Ngày 2: Ứng dụng thực tế',
        content: [
          '5 bài chuông cơ bản ứng dụng trong đời sống',
          'Cách tự trị liệu bản thân',
          'Thiền định với chuông xoay',
          'Xử lý các vấn đề thường gặp',
          'Thực hành và chia sẻ trải nghiệm',
        ],
      },
    ],
    benefits: [
      'Hiểu được bản chất và cách hoạt động của chuông xoay',
      'Tự tin sử dụng chuông để thiền định và thư giãn',
      'Có thể tự trị liệu những vấn đề cơ bản',
      'Nhận chứng chỉ hoàn thành khóa học',
      'Gia nhập cộng đồng Mani House',
    ],
    requirements: [
      'Không yêu cầu kinh nghiệm trước',
      'Mang theo tinh thần cởi mở và sẵn sàng học hỏi',
      'Trang phục thoải mái',
    ],
    seo: {
      title: 'Khóa Học Chuông Xoay Cơ Bản - Mani House',
      description:
        'Khóa học chuông xoay cơ bản dành cho người mới bắt đầu. Học kỹ thuật sử dụng chuông xoay Himalaya từ A-Z với Sound Healer chuyên nghiệp.',
    },
  },
  'khoa-nang-cao-chuyen-sau': {
    title: 'Khóa Nâng Cao Chuyên Sâu',
    subtitle: 'Đào sâu kỹ năng & kiến thức',
    description:
      'Hơn 10 bài chuông chuyên sâu, hướng dẫn điều phối các hoạt động cộng đồng.',
    longDescription: `Khóa Nâng Cao Chuyên Sâu là bước tiếp theo cho những học viên đã hoàn thành 
    khóa Cơ Bản và muốn đào sâu hơn vào thế giới Sound Healing. Bạn sẽ học thêm nhiều 
    bài chuông phức tạp, kỹ thuật trị liệu cá nhân, và cách tổ chức các buổi Sound Bath 
    cho nhóm.`,
    image: '/images/courses/advanced.jpg',
    gallery: [
      '/images/courses/advanced-1.jpg',
      '/images/courses/advanced-2.jpg',
      '/images/courses/advanced-3.jpg',
    ],
    duration: '3 ngày (24 giờ)',
    students: '8-12 học viên',
    level: 'Đã học cơ bản',
    price: 'Liên hệ',
    schedule: 'Hàng quý',
    location: 'Mani House HCM & Hà Nội',
    instructor: 'Sound Healer Tâm Ngọc & Long Kama',
    modules: [
      {
        title: 'Ngày 1: Kỹ thuật nâng cao',
        content: [
          'Ôn tập và nâng cao kỹ thuật cơ bản',
          '5 bài chuông nâng cao',
          'Kỹ thuật điều chỉnh tần số và cường độ',
          'Làm việc với nhiều chuông cùng lúc',
        ],
      },
      {
        title: 'Ngày 2: Trị liệu cá nhân',
        content: [
          'Kỹ thuật đánh giá năng lượng khách hàng',
          'Xây dựng protocol trị liệu',
          'Thực hành trị liệu cá nhân',
          'Xử lý các tình huống đặc biệt',
        ],
      },
      {
        title: 'Ngày 3: Tổ chức Sound Bath',
        content: [
          'Lên kế hoạch buổi Sound Bath',
          'Setup không gian và thiết bị',
          'Dẫn dắt và điều phối nhóm',
          'Thực hành tổ chức Sound Bath mini',
        ],
      },
    ],
    benefits: [
      'Thành thạo 10+ bài chuông chuyên sâu',
      'Có thể tổ chức Sound Bath cho nhóm 10-20 người',
      'Kỹ năng trị liệu cá nhân cơ bản',
      'Nhận chứng chỉ Sound Healer cấp 2',
      'Cơ hội thực tập tại Mani House',
    ],
    requirements: [
      'Đã hoàn thành khóa Cơ Bản',
      'Có ít nhất 1 tháng thực hành tại nhà',
      'Sở hữu ít nhất 1 bộ chuông xoay',
    ],
    seo: {
      title: 'Khóa Nâng Cao Chuyên Sâu - Trở Thành Sound Healer',
      description:
        'Khóa học nâng cao cho những ai muốn đào sâu kỹ năng Sound Healing. Học 10+ bài chuông chuyên sâu, kỹ thuật trị liệu và tổ chức Sound Bath.',
    },
  },
  'khoa-nang-cao-mo-rong': {
    title: 'Khóa Nâng Cao Mở Rộng',
    subtitle: 'Trở thành Sound Healer chuyên nghiệp',
    description:
      'Kết hợp nhiều nhạc cụ, xây dựng thương hiệu và tư duy làm nghề.',
    longDescription: `Khóa Nâng Cao Mở Rộng là khóa học cao cấp nhất tại Mani House, dành cho 
    những ai muốn trở thành Sound Healer chuyên nghiệp. Bạn sẽ học cách kết hợp nhiều 
    nhạc cụ trị liệu khác nhau, xây dựng thương hiệu cá nhân, và phát triển tư duy 
    làm nghề bền vững.`,
    image: '/images/courses/expert.jpg',
    gallery: [
      '/images/courses/expert-1.jpg',
      '/images/courses/expert-2.jpg',
      '/images/courses/expert-3.jpg',
    ],
    duration: '4 ngày (32 giờ)',
    students: '6-10 học viên',
    level: 'Sound Healer',
    price: 'Liên hệ',
    schedule: '2 lần/năm',
    location: 'Mani House HCM',
    instructor: 'Sound Healer Tâm Ngọc & Long Kama',
    modules: [
      {
        title: 'Ngày 1-2: Nhạc cụ trị liệu đa dạng',
        content: [
          'Chuông gió (Chime)',
          'Koshi & Zaphir',
          'Gong và cách sử dụng',
          'Crystal singing bowl',
          'Kết hợp đa nhạc cụ trong session',
        ],
      },
      {
        title: 'Ngày 3: Xây dựng thương hiệu',
        content: [
          'Định vị bản thân trong thị trường',
          'Xây dựng portfolio và testimonials',
          'Marketing online cho Sound Healer',
          'Định giá dịch vụ',
        ],
      },
      {
        title: 'Ngày 4: Tư duy làm nghề',
        content: [
          'Đạo đức nghề nghiệp',
          'Chăm sóc năng lượng bản thân',
          'Xây dựng cộng đồng',
          'Kế hoạch phát triển 1-3 năm',
        ],
      },
    ],
    benefits: [
      'Sử dụng thành thạo đa nhạc cụ trị liệu',
      'Có chiến lược xây dựng thương hiệu rõ ràng',
      'Sẵn sàng hoạt động chuyên nghiệp',
      'Nhận chứng chỉ Sound Healer cấp cao nhất',
      'Được giới thiệu trong mạng lưới Mani House',
    ],
    requirements: [
      'Đã hoàn thành khóa Nâng Cao Chuyên Sâu',
      'Có ít nhất 6 tháng thực hành',
      'Đã tổ chức ít nhất 5 buổi Sound Bath',
    ],
    seo: {
      title: 'Khóa Nâng Cao Mở Rộng - Sound Healer Chuyên Nghiệp',
      description:
        'Khóa học cao cấp để trở thành Sound Healer chuyên nghiệp. Học kết hợp đa nhạc cụ, xây dựng thương hiệu và phát triển nghề nghiệp bền vững.',
    },
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData[slug];
  if (!course) return {};

  return {
    title: course.seo.title,
    description: course.seo.description,
    openGraph: {
      title: course.seo.title,
      description: course.seo.description,
      images: [course.image],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({ slug }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = coursesData[slug];

  if (!course) {
    notFound();
  }

  return (
    <>
      <CourseSchema course={course} slug={slug} />

      {/* Hero */}
      <section className="relative pt-24 pb-12 bg-secondary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/khoa-hoc"
            className="inline-flex items-center gap-2 text-secondary-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách khóa học
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {course.level}
            </span>
            <h1 className="heading-1 text-white mb-4">{course.title}</h1>
            <p className="text-xl text-primary-300 mb-4">{course.subtitle}</p>
            <p className="text-secondary-300 text-lg leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white border-b py-6">
        <div className="container-custom">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-secondary-600">
              <Clock className="w-5 h-5 text-primary-600" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-600">
              <Users className="w-5 h-5 text-primary-600" />
              <span>{course.students}</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-600">
              <MapPin className="w-5 h-5 text-primary-600" />
              <span>{course.location}</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-600">
              <Calendar className="w-5 h-5 text-primary-600" />
              <span>{course.schedule}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="heading-3 text-secondary-800 mb-4">
                  Giới thiệu khóa học
                </h2>
                <p className="text-secondary-600 leading-relaxed whitespace-pre-line">
                  {course.longDescription}
                </p>
              </div>

              {/* Modules */}
              <div>
                <h2 className="heading-3 text-secondary-800 mb-6">
                  Nội dung khóa học
                </h2>
                <div className="space-y-6">
                  {course.modules.map((module, index) => (
                    <div
                      key={index}
                      className="bg-secondary-50 rounded-xl p-6"
                    >
                      <h3 className="font-semibold text-secondary-800 mb-4">
                        {module.title}
                      </h3>
                      <ul className="space-y-2">
                        {module.content.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-secondary-600"
                          >
                            <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="heading-3 text-secondary-800 mb-4">
                  Bạn sẽ nhận được
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {course.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-secondary-600"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="heading-3 text-secondary-800 mb-4">
                  Yêu cầu tham gia
                </h2>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-secondary-600"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-28">
                <div className="text-center mb-6">
                  <p className="text-sm text-secondary-500 mb-1">Học phí</p>
                  <p className="text-3xl font-bold text-primary-600">
                    {course.price}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-500">Thời lượng:</span>
                    <span className="text-secondary-800 font-medium">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-500">Sĩ số:</span>
                    <span className="text-secondary-800 font-medium">
                      {course.students}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-500">Lịch học:</span>
                    <span className="text-secondary-800 font-medium">
                      {course.schedule}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-500">Giảng viên:</span>
                    <span className="text-secondary-800 font-medium text-right">
                      {course.instructor}
                    </span>
                  </div>
                </div>

                <Link href="/lien-he" className="btn-primary w-full mb-3">
                  Đăng Ký Ngay
                </Link>

                <a
                  href="tel:0937613354"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Gọi Tư Vấn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
