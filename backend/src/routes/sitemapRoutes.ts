import { Router, Request, Response } from 'express';
import { Category, Course, Product, Blog } from '../models';

const router = Router();

const SITE_URL = process.env.FRONTEND_URL || 'https://manihouse.vn';

router.get('/robots.txt', (req: Request, res: Response) => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-categories.xml
Sitemap: ${SITE_URL}/sitemap-courses.xml
Sitemap: ${SITE_URL}/sitemap-products.xml
Sitemap: ${SITE_URL}/sitemap-blogs.xml

Disallow: /api/
Disallow: /admin/
`;
  res.type('text/plain').send(robotsTxt);
});

router.get('/sitemap.xml', async (req: Request, res: Response) => {
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/ve-chung-toi', priority: 0.8, changefreq: 'monthly' },
    { url: '/khoa-hoc', priority: 0.9, changefreq: 'weekly' },
    { url: '/hoat-dong', priority: 0.9, changefreq: 'weekly' },
    { url: '/vat-pham', priority: 0.8, changefreq: 'weekly' },
    { url: '/blog', priority: 0.8, changefreq: 'daily' },
    { url: '/lien-he', priority: 0.7, changefreq: 'monthly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const page of staticPages) {
    xml += `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }

  xml += `
</urlset>`;

  res.type('application/xml').send(xml);
});

router.get('/sitemap-categories.xml', async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({ isActive: true }).select('slug updatedAt');

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    for (const category of categories) {
      xml += `
  <url>
    <loc>${SITE_URL}/danh-muc/${category.slug}</loc>
    <lastmod>${category.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }

    xml += `
</urlset>`;

    res.type('application/xml').send(xml);
  } catch (error) {
    res.status(500).send('Error generating sitemap');
  }
});

router.get('/sitemap-courses.xml', async (req: Request, res: Response) => {
  try {
    const courses = await Course.find({ isActive: true }).select('slug updatedAt');

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    for (const course of courses) {
      xml += `
  <url>
    <loc>${SITE_URL}/khoa-hoc/${course.slug}</loc>
    <lastmod>${course.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    }

    xml += `
</urlset>`;

    res.type('application/xml').send(xml);
  } catch (error) {
    res.status(500).send('Error generating sitemap');
  }
});

router.get('/sitemap-products.xml', async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ isActive: true }).select('slug updatedAt');

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    for (const product of products) {
      xml += `
  <url>
    <loc>${SITE_URL}/san-pham/${product.slug}</loc>
    <lastmod>${product.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }

    xml += `
</urlset>`;

    res.type('application/xml').send(xml);
  } catch (error) {
    res.status(500).send('Error generating sitemap');
  }
});

router.get('/sitemap-blogs.xml', async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).select('slug updatedAt');

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    for (const blog of blogs) {
      xml += `
  <url>
    <loc>${SITE_URL}/blog/${blog.slug}</loc>
    <lastmod>${blog.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    }

    xml += `
</urlset>`;

    res.type('application/xml').send(xml);
  } catch (error) {
    res.status(500).send('Error generating sitemap');
  }
});

export default router;
