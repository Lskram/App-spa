import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MoodSelector from "@/components/MoodSelector";
import QuickBooking from "@/components/QuickBooking";
import ServiceCategories from "@/components/ServiceCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MoodSelector />
        <QuickBooking />
        <ServiceCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
