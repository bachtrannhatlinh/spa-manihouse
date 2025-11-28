'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navigation = [
  { name: 'Trang Chủ', href: '/' },
  { name: 'Về Mani House', href: '/ve-chung-toi' },
  {
    name: 'Khóa Học',
    href: '/khoa-hoc',
    children: [
      { name: 'Cơ Bản', href: '/khoa-hoc/co-ban' },
      { name: 'Nâng Cao Chuyên Sâu', href: '/khoa-hoc/nang-cao-chuyen-sau' },
      { name: 'Nâng Cao Mở Rộng', href: '/khoa-hoc/nang-cao-mo-rong' },
      { name: 'Gieo Duyên', href: '/khoa-hoc/gieo-duyen' },
    ],
  },
  {
    name: 'Hoạt Động',
    href: '/hoat-dong',
    children: [
      { name: 'Workshop', href: '/hoat-dong/workshop' },
      { name: 'Treatment (Trị Liệu)', href: '/hoat-dong/treatment' },
      { name: 'Yoga', href: '/hoat-dong/yoga' },
      { name: 'Sound Bath', href: '/hoat-dong/sound-bath' },
    ],
  },
  { name: 'Góc Chia Sẻ', href: '/blog' },
  {
    name: 'Vật Phẩm',
    href: '/vat-pham',
    children: [
      { name: 'Shop', href: '/vat-pham/shop' },
      { name: 'Chuông', href: '/vat-pham/chuong' },
      { name: 'Phụ Kiện', href: '/vat-pham/phu-kien' },
      { name: 'Vật Phẩm Khác', href: '/vat-pham/vat-pham-khac' },
    ],
  },
  { name: 'Liên Hệ', href: '/lien-he' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Mani House Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-heading text-xl font-bold ${
                isScrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Mani House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-secondary-700 hover:text-primary-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 py-2 bg-white rounded-lg shadow-xl border border-gray-100 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/lien-he"
              className="hidden md:inline-flex btn-primary text-sm"
            >
              Đăng Ký
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? 'text-secondary-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-lg shadow-xl mt-2 p-4 animate-fade-in">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                <Link
                  href={item.href}
                  className="block py-3 text-secondary-700 font-medium hover:text-primary-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block py-2 text-sm text-secondary-500 hover:text-primary-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/lien-he"
                className="block w-full btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Đăng Ký Tư Vấn
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
