
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import FeaturedGrid from "@/components/FeaturedGrid";
import NewsletterSection from "@/components/NewsletterSection";
import NewsSection from "@/components/NewsSection";
import SponsorsSection from "@/components/SponsorsSection";
import ExchangeRateSection from "@/components/ExchangeRateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      <main>
        <HeroSection />
        <FeaturedGrid />
        <NewsSection />
        <SponsorsSection />
        <NewsletterSection />
        <ExchangeRateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
