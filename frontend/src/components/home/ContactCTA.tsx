import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="heading-2 mb-6">
              Sẵn Sàng Bắt Đầu
              <span className="block text-primary-400 mt-1">
                Hành Trình Chữa Lành?
              </span>
            </h2>
            <p className="text-secondary-200 text-lg leading-relaxed mb-8">
              Đăng ký tư vấn miễn phí để tìm hiểu thêm về các khóa học và hoạt
              động tại Mani House. Chúng tôi sẽ đồng hành cùng bạn trên hành
              trình chữa lành và phát triển bản thân.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600/30 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-secondary-300 text-sm">Hotline</p>
                  <a
                    href="tel:0937613354"
                    className="text-white font-semibold hover:text-primary-400"
                  >
                    0937 613 354
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-secondary-300 text-sm">Địa chỉ HCM</p>
                  <p className="text-white font-medium">
                    15 Hoàng Kế Viêm, P. Bảy Hiền
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600/30 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-secondary-300 text-sm">Giờ làm việc</p>
                  <p className="text-white font-medium">
                    Thứ 2 - Chủ nhật: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/lien-he" className="btn-primary text-lg px-8">
                Đăng Ký Tư Vấn
              </Link>
              <a
                href="https://zalo.me/0898070652"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-secondary-800 text-lg px-8"
              >
                Chat Zalo
              </a>
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-heading font-bold text-secondary-800 mb-2">
              Đăng Ký Tư Vấn Miễn Phí
            </h3>
            <p className="text-secondary-600 text-sm mb-6">
              Điền thông tin để được tư vấn về khóa học phù hợp
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Họ & Tên
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Bạn quan tâm đến
                </label>
                <select className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all">
                  <option value="">Chọn dịch vụ</option>
                  <option value="course">Tư Vấn Khóa Học</option>
                  <option value="workshop">Workshop</option>
                  <option value="treatment">Trị Liệu (Treatment)</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Ghi chú
                </label>
                <textarea
                  rows={3}
                  placeholder="Nội dung bạn muốn tư vấn..."
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg"
              >
                Gửi Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
