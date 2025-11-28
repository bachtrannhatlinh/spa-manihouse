'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content:
      'Sau khi tham gia khóa học tại Mani House, tôi đã tìm lại được sự bình an trong tâm hồn. Âm thanh chuông xoay thực sự có sức mạnh chữa lành kỳ diệu.',
    author: 'Ngọc Ánh',
    role: 'Học viên Khóa Cơ Bản',
    image: '/images/testimonials/1.jpg',
  },
  {
    content:
      'Mani House không chỉ dạy kỹ thuật mà còn truyền cảm hứng để tôi theo đuổi con đường Sound Healer. Cảm ơn thầy Tâm Ngọc và Long Kama.',
    author: 'Minh Tâm',
    role: 'Học viên Khóa Nâng Cao',
    image: '/images/testimonials/2.jpg',
  },
  {
    content:
      'Trải nghiệm Sound Bath tại đây thật tuyệt vời. Tôi cảm nhận được năng lượng tích cực và sự thư giãn sâu sau mỗi buổi trị liệu.',
    author: 'Thu Hà',
    role: 'Khách hàng Treatment',
    image: '/images/testimonials/3.jpg',
  },
  {
    content:
      '4 năm trước, mình hoàn toàn là một người vô minh. Nhờ có chuông xoay và Mani House, mình đã tìm được hướng đi mới trong cuộc sống.',
    author: 'Hoàng Long',
    role: 'Học viên & Sound Healer',
    image: '/images/testimonials/4.jpg',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-medium mb-2">
            Chia Sẻ Trải Nghiệm
          </p>
          <h2 className="heading-2 text-secondary-800">
            Cảm Nhận Từ Học Viên
          </h2>
          <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
            Mỗi chia sẻ là những hạt mầm của sự yêu thương và quan tâm chân thành
            mà học viên dành cho chúng tôi
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary-200 mb-6" />

            <div className="min-h-[200px]">
              <p className="text-lg md:text-xl text-secondary-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-secondary-800">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-secondary-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-secondary-300 hover:bg-secondary-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-secondary-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-secondary-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
