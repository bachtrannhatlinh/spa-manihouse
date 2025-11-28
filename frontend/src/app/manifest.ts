import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mani House - Ngôi Nhà Chuông Xoay',
    short_name: 'Mani House',
    description:
      'Đồng hành cùng bạn trải nghiệm âm thanh của chuông xoay Himalaya, giúp lợi lạc và gọn nhẹ tâm hồn!',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffdfb',
    theme_color: '#eb6b2d',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
