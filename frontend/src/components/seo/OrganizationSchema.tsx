export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mani House',
    alternateName: 'Mani House - Ngôi Nhà Chuông Xoay',
    url: 'https://manihouse.vn',
    logo: 'https://manihouse.vn/images/logo.png',
    description:
      'Mani House - Đồng hành cùng bạn trải nghiệm âm thanh của chuông xoay Himalaya, giúp lợi lạc và gọn nhẹ tâm hồn!',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Tâm Ngọc',
        jobTitle: 'Sound Healer',
      },
      {
        '@type': 'Person',
        name: 'Long Kama',
        jobTitle: 'Sound Healer',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '15 Hoàng Kế Viêm',
        addressLocality: 'Phường Bảy Hiền',
        addressRegion: 'TP. Hồ Chí Minh',
        postalCode: '700000',
        addressCountry: 'VN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '22 Ngõ 49 Vạn Bảo',
        addressLocality: 'Phường Ba Đình',
        addressRegion: 'TP. Hà Nội',
        postalCode: '100000',
        addressCountry: 'VN',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+84-937-613-354',
        contactType: 'customer service',
        areaServed: 'VN',
        availableLanguage: 'Vietnamese',
      },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=100077841324091',
      'https://zalo.me/0898070652',
    ],
    email: 'Manihouse.healing@gmail.com',
    openingHours: 'Mo-Su 09:00-21:00',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    knowsAbout: [
      'Sound Healing',
      'Singing Bowl Therapy',
      'Himalayan Singing Bowls',
      'Sound Bath',
      'Meditation',
      'Wellness',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
