import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HistoireSection from "@/components/sections/HistoireSection";
import MenuSection from "@/components/sections/MenuSection";
import GalerieSection from "@/components/sections/GalerieSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HistoireSection />
        <MenuSection />
        <GalerieSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
