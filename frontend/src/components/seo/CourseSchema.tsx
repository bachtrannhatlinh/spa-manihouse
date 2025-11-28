interface CourseSchemaProps {
  course: {
    title: string;
    description: string;
    image: string;
    duration: string;
    instructor: string;
    price: string;
  };
  slug: string;
}

export default function CourseSchema({ course, slug }: CourseSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    image: `https://manihouse.vn${course.image}`,
    provider: {
      '@type': 'Organization',
      name: 'Mani House',
      sameAs: 'https://manihouse.vn',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      duration: course.duration,
      instructor: {
        '@type': 'Person',
        name: course.instructor,
      },
      location: {
        '@type': 'Place',
        name: 'Mani House',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '15 Hoàng Kế Viêm',
          addressLocality: 'Phường Bảy Hiền',
          addressRegion: 'TP. Hồ Chí Minh',
          addressCountry: 'VN',
        },
      },
    },
    url: `https://manihouse.vn/khoa-hoc/${slug}`,
    inLanguage: 'vi',
    offers: {
      '@type': 'Offer',
      category: 'Khóa học chuông xoay',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'VND',
      price: course.price === 'Liên hệ' ? undefined : course.price,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
