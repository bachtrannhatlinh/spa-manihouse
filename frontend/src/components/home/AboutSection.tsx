import Image from 'next/image';
import Link from 'next/link';
import { Heart, Sparkles, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Chữa Lành Tự Thân',
    description: 'Giúp bạn khôi phục cơ chế tự chữa lành và cân bằng cuộc sống',
  },
  {
    icon: Sparkles,
    title: 'Âm Thanh Thuần Khiết',
    description: 'Chuông xoay Himalaya chính hãng từ Nepal với âm thanh trong trẻo',
  },
  {
    icon: Users,
    title: 'Cộng Đồng Yêu Thương',
    description: 'Kết nối với cộng đồng những người yêu sound healing',
  },
  {
    icon: Shield,
    title: 'An Toàn & Hiệu Quả',
    description: 'Phương pháp được nghiên cứu và áp dụng bài bản',
  },
];

export default function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-manihouse.jpg"
                alt="Về Mani House"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
              <p className="text-secondary-600 italic text-sm leading-relaxed">
                "Bạn có thể làm cuộc sống mình nhiều sức mạnh hơn, giàu có hơn,
                khỏe khoắn hơn nhờ việc học kết nối và giải phóng sức mạnh tiềm
                ẩn trong tiềm thức của bạn."
              </p>
              <p className="text-primary-600 font-medium text-sm mt-3">
                - Dr. Joseph Murphy
              </p>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold-100 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary-600 font-medium mb-2">Về Mani House</p>
            <h2 className="heading-2 text-secondary-800 mb-6">
              Ngôi Nhà Chuông Xoay
              <span className="text-primary-600"> Himalaya</span>
            </h2>
            <p className="text-secondary-600 leading-relaxed mb-6">
              Mani House được thành lập với sứ mệnh đồng hành cùng bạn trải
              nghiệm âm thanh kỳ diệu của chuông xoay Himalaya. Chúng tôi tin
              rằng âm thanh có sức mạnh chữa lành, giúp bạn tìm lại sự cân bằng
              và bình an trong tâm hồn.
            </p>
            <p className="text-secondary-600 leading-relaxed mb-8">
              Với đội ngũ Sound Healer giàu kinh nghiệm, Mani House cung cấp các
              khóa học từ cơ bản đến nâng cao, giúp bạn không chỉ trải nghiệm mà
              còn có thể tự thực hành và phát triển con đường chữa lành của
              riêng mình.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-secondary-50 rounded-lg"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-800 text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-secondary-500 text-xs mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/ve-chung-toi" className="btn-primary">
              Tìm Hiểu Thêm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
