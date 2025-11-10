import { useState, useEffect } from "react";
import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <img
              src={APP_LOGO}
              alt="Maison Antoine"
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-primary">
                Maison Antoine
              </h1>
              <p className="text-xs text-muted-foreground">Depuis 1948</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="hover:text-primary hover:bg-primary/10"
            >
              Accueil
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("histoire")}
              className="hover:text-primary hover:bg-primary/10"
            >
              Notre Histoire
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("menu")}
              className="hover:text-primary hover:bg-primary/10"
            >
              Menu
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("galerie")}
              className="hover:text-primary hover:bg-primary/10"
            >
              Galerie
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("social")}
              className="hover:text-primary hover:bg-primary/10"
            >
              Facebook
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-2"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-in slide-in-from-top">
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hero")}
                className="justify-start hover:text-primary hover:bg-primary/10"
              >
                Accueil
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("histoire")}
                className="justify-start hover:text-primary hover:bg-primary/10"
              >
                Notre Histoire
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("menu")}
                className="justify-start hover:text-primary hover:bg-primary/10"
              >
                Menu
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("galerie")}
                className="justify-start hover:text-primary hover:bg-primary/10"
              >
                Galerie
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("social")}
                className="justify-start hover:text-primary hover:bg-primary/10"
              >
                Facebook
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="justify-start"
              >
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
