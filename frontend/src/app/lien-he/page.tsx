import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liên Hệ - Mani House',
  description:
    'Liên hệ Mani House để được tư vấn về khóa học chuông xoay, Sound Bath, Workshop và các dịch vụ trị liệu âm thanh.',
  openGraph: {
    title: 'Liên Hệ - Mani House',
    description: 'Liên hệ để được tư vấn về khóa học và dịch vụ Sound Healing',
  },
};

const locations = [
  {
    city: 'Hồ Chí Minh',
    address: '15 Hoàng Kế Viêm, Phường Bảy Hiền, TP. HCM',
    phones: ['0937 613 354', '094 687 3141'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890!2d106.6475755!3d10.7977957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529202638f349%3A0x1ad0b8bb363c510b!2sMani%20House!5e0!3m2!1svi!2s!4v1234567890',
  },
  {
    city: 'Hà Nội',
    address: '22 Ngõ 49 Vạn Bảo, Phường Ba Đình, TP. Hà Nội',
    phones: ['0767 678 631'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1234567890!2d105.8147938!3d21.0342578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abd811e1f917%3A0x5be9272bbf5ef5be!2sMani%20House%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1234567890',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary-900 to-secondary-800">
        <div className="container-custom text-center text-white">
          <p className="text-primary-400 font-medium mb-3">Liên Hệ</p>
          <h1 className="heading-1 mb-6">Kết Nối Với Mani House</h1>
          <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành
            trình chữa lành
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="heading-3 text-secondary-800 mb-2">
                Đăng Ký Tư Vấn
              </h2>
              <p className="text-secondary-600 mb-8">
                Điền thông tin để được tư vấn về khóa học và dịch vụ phù hợp với
                bạn
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Họ & Tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập họ và tên"
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại"
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Nhập email"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Bạn quan tâm đến <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="khoa-co-ban">Khóa Cơ Bản</option>
                    <option value="khoa-nang-cao">Khóa Nâng Cao</option>
                    <option value="gieo-duyen">Gieo Duyên</option>
                    <option value="workshop">Workshop</option>
                    <option value="treatment">Trị Liệu (Treatment)</option>
                    <option value="sound-bath">Sound Bath</option>
                    <option value="mua-chuong">Mua Chuông Xoay</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Nội dung
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Chia sẻ thêm về nhu cầu của bạn..."
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Gửi Đăng Ký
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="heading-3 text-secondary-800 mb-6">
                  Liên Hệ Nhanh
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:Manihouse.healing@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">Email</p>
                      <p className="font-medium text-secondary-800">
                        Manihouse.healing@gmail.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100077841324091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">Facebook</p>
                      <p className="font-medium text-secondary-800">
                        Mani House - Ngôi Nhà Chuông Xoay
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://zalo.me/0898070652"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">Zalo</p>
                      <p className="font-medium text-secondary-800">
                        Chat với Mani House
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-secondary-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-heading font-semibold text-secondary-800">
                    Giờ Làm Việc
                  </h3>
                </div>
                <div className="space-y-2 text-secondary-600">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span className="font-medium">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7 - Chủ nhật:</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-secondary-800">Địa Chỉ Cơ Sở</h2>
            <p className="text-secondary-600 mt-4">
              Mani House có mặt tại Hồ Chí Minh và Hà Nội
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="h-64">
                  <iframe
                    src={location.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mani House ${location.city}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4">
                    Mani House {location.city}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                      <p className="text-secondary-600">{location.address}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary-600 mt-0.5" />
                      <div className="flex flex-wrap gap-3">
                        {location.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="text-primary-600 hover:text-primary-700 font-medium"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
