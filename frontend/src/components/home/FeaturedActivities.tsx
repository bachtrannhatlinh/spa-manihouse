import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const activities = [
  {
    title: 'Workshop',
    description:
      'Trải nghiệm các buổi workshop thực hành chuông xoay, kết nối cộng đồng yêu thích sound healing.',
    image: '/images/activities/workshop.jpg',
    href: '/hoat-dong/workshop',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Trị Liệu (Treatment)',
    description:
      'Phương pháp trị liệu cá nhân với chuông xoay, giúp bạn giải phóng tắc nghẽn và cân bằng năng lượng.',
    image: '/images/activities/treatment.jpg',
    href: '/hoat-dong/tri-lieu',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    title: 'Sound Bath',
    description:
      'Tắm âm thanh - phương pháp thư giãn sâu với âm thanh chuông xoay Himalaya thuần khiết.',
    image: '/images/activities/sound-bath.jpg',
    href: '/hoat-dong/sound-bath',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Yoga',
    description:
      'Kết hợp yoga và âm thanh trị liệu, đem đến sự thư thái toàn diện cho thân và tâm.',
    image: '/images/activities/yoga.jpg',
    href: '/hoat-dong/yoga',
    color: 'from-pink-500 to-rose-600',
  },
];

export default function FeaturedActivities() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-medium mb-2">Hoạt Động Nổi Bật</p>
          <h2 className="heading-2 text-secondary-800">
            Khám Phá Các Hoạt Động
          </h2>
          <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
            Mani House mang đến những trải nghiệm đa dạng giúp bạn kết nối với
            bản thân và chữa lành từ bên trong
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Link
              key={index}
              href={activity.href}
              className="group card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-60`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {activity.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/hoat-dong" className="btn-secondary">
            Xem Tất Cả Hoạt Động
          </Link>
        </div>
      </div>
    </section>
  );
}
