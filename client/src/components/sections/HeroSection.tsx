import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Frites belges dorées"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Maison Antoine
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-accent mb-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            Les Meilleures Frites de Bruxelles
          </p>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            Depuis 1948 • Place Jourdan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
            <Button
              size="lg"
              onClick={() => scrollToSection("menu")}
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Découvrir le Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Nous Contacter
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("histoire")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-10 h-10 text-primary" />
        </button>
      </div>
    </section>
  );
}
