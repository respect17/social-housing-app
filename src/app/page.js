import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import NewsSection from '../components/NewsSection';
import NewsletterSubscription from '../components/NewsletterSubscription';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <NewsSection />
      <NewsletterSubscription />
    </>
  );
}
