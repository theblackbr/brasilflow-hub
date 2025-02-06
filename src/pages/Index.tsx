
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import FeaturedGrid from "@/components/FeaturedGrid";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#171717]">
      <NavigationHeader />
      <main>
        <HeroSection />
        <FeaturedGrid />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default Index;
