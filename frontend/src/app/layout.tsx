import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manihouse.vn'),
  title: {
    default: 'Mani House - Ngôi Nhà Chuông Xoay | Trị Liệu Âm Thanh Himalaya',
    template: '%s | Mani House',
  },
  description:
    'Mani House - Đồng hành cùng bạn trải nghiệm âm thanh của chuông xoay Himalaya. Khóa học chuông xoay, trị liệu âm thanh, Sound Bath, Workshop chữa lành.',
  keywords: [
    'chuông xoay',
    'trị liệu âm thanh',
    'sound healing',
    'sound bath',
    'himalaya singing bowl',
    'mani house',
    'chữa lành',
    'thiền',
    'yoga',
  ],
  authors: [{ name: 'Mani House' }],
  creator: 'Mani House',
  publisher: 'Mani House',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://manihouse.vn',
    siteName: 'Mani House',
    title: 'Mani House - Ngôi Nhà Chuông Xoay',
    description:
      'Đồng hành cùng bạn trải nghiệm âm thanh của chuông xoay Himalaya, giúp lợi lạc và gọn nhẹ tâm hồn!',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mani House - Ngôi Nhà Chuông Xoay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mani House - Ngôi Nhà Chuông Xoay',
    description:
      'Đồng hành cùng bạn trải nghiệm âm thanh của chuông xoay Himalaya',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* <FloatingButtons /> */}
      </body>
    </html>
  );
}
