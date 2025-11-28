'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Mani House - Trị liệu chuông xoay"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 opacity-20 animate-float">
          <Image
            src="/images/singing-bowl-icon.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-1/3 right-10 w-16 h-16 opacity-20 animate-float animate-delay-200">
          <Image
            src="/images/lotus-icon.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-300 text-lg md:text-xl font-medium mb-4">
            Chào mừng đến với
          </p>
          <h1 className="heading-1 text-white mb-6">
            Mani House
            <span className="block text-primary-400 mt-2">
              Ngôi Nhà Chuông Xoay
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Đồng hành cùng bạn trải nghiệm âm thanh của chuông xoay Himalaya,
            <br className="hidden md:block" />
            giúp lợi lạc và gọn nhẹ tâm hồn!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/khoa-hoc" className="btn-primary text-lg px-8 py-4">
              Khám Phá Khóa Học
            </Link>
            <Link
              href="/lien-he"
              className="btn-outline border-white text-white hover:bg-white hover:text-secondary-800 text-lg px-8 py-4"
            >
              Đăng Ký Tư Vấn
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '4+', label: 'Năm kinh nghiệm' },
              { number: '500+', label: 'Học viên' },
              { number: '50+', label: 'Workshop tổ chức' },
              { number: '2', label: 'Cơ sở HCM & HN' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${(index + 1) * 100}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary-400">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
