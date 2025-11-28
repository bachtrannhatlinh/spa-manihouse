import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, MessageCircle } from 'lucide-react';

const footerLinks = {
  courses: [
    { name: 'Khóa Cơ Bản', href: '/khoa-hoc/khoa-co-ban' },
    { name: 'Khóa Nâng Cao Chuyên Sâu', href: '/khoa-hoc/khoa-nang-cao-chuyen-sau' },
    { name: 'Khóa Nâng Cao Mở Rộng', href: '/khoa-hoc/khoa-nang-cao-mo-rong' },
    { name: 'Gieo Duyên', href: '/khoa-hoc/gieo-duyen' },
  ],
  activities: [
    { name: 'Workshop', href: '/hoat-dong/workshop' },
    { name: 'Treatment (Trị Liệu)', href: '/hoat-dong/tri-lieu' },
    { name: 'Yoga', href: '/hoat-dong/yoga' },
    { name: 'Sound Bath', href: '/hoat-dong/sound-bath' },
  ],
  about: [
    { name: 'Về Mani House', href: '/ve-chung-toi' },
    { name: 'Góc Chia Sẻ', href: '/blog' },
    { name: 'Vật Phẩm', href: '/vat-pham' },
    { name: 'Liên Hệ', href: '/lien-he' },
  ],
};

const locations = [
  {
    city: 'Hồ Chí Minh',
    address: '15 Hoàng Kế Viêm, Phường Bảy Hiền, TP. HCM',
    phones: ['0937 613 354', '094 687 3141'],
    mapUrl: 'https://goo.gl/maps/example1',
  },
  {
    city: 'Hà Nội',
    address: '22 Ngõ 49 Vạn Bảo, Phường Ba Đình, TP. Hà Nội',
    phones: ['0767 678 631'],
    mapUrl: 'https://goo.gl/maps/example2',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 bg-white rounded-full p-2">
                <Image
                  src="/images/logo.png"
                  alt="Mani House Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-heading text-2xl font-bold">Mani House</span>
            </Link>
            <p className="text-secondary-300 leading-relaxed mb-6">
              Đồng hành cùng bạn trải nghiệm âm thanh của chuông xoay Himalaya,
              giúp lợi lạc và gọn nhẹ tâm hồn!
            </p>
            <p className="text-secondary-400 text-sm italic">
              "Thương chúc cho bạn và mình, thân tâm luôn được an lạc, có đầy đủ
              sức khỏe, bình an, và hạnh phúc."
            </p>
            <p className="text-primary-400 text-sm mt-2">
              - Sound Healer Tâm Ngọc và Long Kama
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Khóa Học</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Hoạt Động</h3>
            <ul className="space-y-3">
              {footerLinks.activities.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Về Chúng Tôi</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-12 pt-8 border-t border-secondary-700">
          <h3 className="font-heading text-lg font-semibold mb-6">Địa Chỉ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div key={location.city} className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">{location.city}</p>
                  <p className="text-secondary-300 text-sm mb-2">{location.address}</p>
                  <div className="flex flex-wrap gap-3">
                    {location.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-1 text-primary-400 text-sm hover:text-primary-300"
                      >
                        <Phone className="w-3 h-3" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <a
              href="mailto:Manihouse.healing@gmail.com"
              className="flex items-center gap-2 text-secondary-300 hover:text-primary-400 text-sm"
            >
              <Mail className="w-4 h-4" />
              Manihouse.healing@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-secondary-400 text-sm">Kết nối với chúng tôi:</span>
          <a
            href="https://www.facebook.com/profile.php?id=100077841324091"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://zalo.me/0898070652"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-secondary-950 py-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-400">
          <p>© {currentYear} Mani House. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/chinh-sach-bao-mat" className="hover:text-primary-400">
              Chính sách bảo mật
            </Link>
            <Link href="/dieu-khoan-su-dung" className="hover:text-primary-400">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
