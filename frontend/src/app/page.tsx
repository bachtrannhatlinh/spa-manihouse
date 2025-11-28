import HeroSection from '@/components/home/HeroSection';
import FeaturedActivities from '@/components/home/FeaturedActivities';
import CoursesSection from '@/components/home/CoursesSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import ContactCTA from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedActivities />
      <AboutSection />
      <CoursesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactCTA />
    </>
  );
}
