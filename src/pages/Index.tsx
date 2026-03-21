import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import CompanyStory from "@/components/CompanyStory";
import ResultsReviews from "@/components/ResultsReviews";
import BusinessPlan from "@/components/BusinessPlan";
import LeaderProfile from "@/components/LeaderProfile";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductCatalog />
      <ResultsReviews />
      <CompanyStory />
      <BusinessPlan />
      <LeaderProfile />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
