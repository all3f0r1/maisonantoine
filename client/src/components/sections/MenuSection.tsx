import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function MenuSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const menuCategories = [
    {
      category: "Nos Frites",
      color: "from-orange-500 to-amber-500",
      items: [
        { name: "Petite frite", price: "3,50 €" },
        { name: "Grande frite", price: "4,00 €" },
      ],
    },
    {
      category: "Sauces",
      color: "from-red-500 to-orange-500",
      items: [
        { name: "Sauces classiques", price: "1,00 €", note: "Mayonnaise, Andalouse, Samouraï, Ketchup, Curry..." },
        { name: "Sauces piquantes", price: "1,00 €", note: "Harissa, Chimichurri, Ricky Hot, Américaine..." },
        { name: "Sauces chaudes", price: "2,60 €", note: "Carbonnade, Tomate" },
      ],
    },
    {
      category: "Snacks",
      color: "from-amber-500 to-yellow-500",
      items: [
        { name: "Fricadelle", price: "2,90 €" },
        { name: "Brochette bœuf", price: "4,70 €" },
        { name: "Brochette poulet", price: "3,70 €" },
        { name: "Cervelas", price: "3,00 €" },
        { name: "Nuggets (6)", price: "4,00 €" },
        { name: "Crispy Chick'n (3)", price: "5,00 €" },
      ],
    },
    {
      category: "Hamburgers",
      color: "from-red-600 to-orange-600",
      items: [
        { name: "Ricky Burger", price: "4,00 €" },
        { name: "Cheeseburger", price: "4,30 €" },
        { name: "Mega Burger", price: "5,50 €" },
        { name: "Spicy Burger", price: "5,70 €" },
        { name: "100% Beef Burger", price: "5,20 €" },
        { name: "Double Beef Burger", price: "6,30 €" },
      ],
    },
    {
      category: "Mitraillettes",
      color: "from-orange-600 to-red-600",
      items: [
        { name: "Mitraillette Brochette bœuf", price: "6,60 €" },
        { name: "Mitraillette Merguez", price: "6,20 €" },
        { name: "Mitraillette Spicy burger", price: "6,90 €" },
        { name: "Mitraillette Américain", price: "6,50 €" },
        { name: "Mitraillette Poulet", price: "5,90 €" },
        { name: "Mitraillette Frite", price: "6,20 €" },
      ],
    },
    {
      category: "Spécialités",
      color: "from-yellow-500 to-orange-500",
      items: [
        { name: "Combiné Carbonnade + frites", price: "9,00 €" },
        { name: "Combiné Vol-au-vent + frites", price: "9,00 €" },
        { name: "Combiné Boulette tomate + frites", price: "9,00 €" },
        { name: "Hot Dog", price: "4,80 €" },
        { name: "Veggie Burger", price: "5,80 €" },
      ],
    },
    {
      category: "Boissons",
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "Coca-Cola / Fanta / Sprite (33cl)", price: "2,20 €" },
        { name: "Ice Tea / Tropico / Oasis (33cl)", price: "2,40 €" },
        { name: "Coca-Cola (50cl)", price: "2,60 €" },
        { name: "Eau (50cl)", price: "2,20 €" },
      ],
    },
  ];

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Découvrez nos spécialités belges et nos tarifs 2024
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open("/menu-2024.jpg", "_blank")}
              className="gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Voir le menu complet
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/menu-2024.pdf";
                link.download = "Menu-Maison-Antoine-2024.pdf";
                link.click();
              }}
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Télécharger le menu (PDF)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {menuCategories.map((section, sectionIndex) => (
            <Card
              key={sectionIndex}
              className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${sectionIndex * 100}ms` }}
            >
              <CardHeader className={`bg-gradient-to-br ${section.color} text-white`}>
                <CardTitle className="text-xl">
                  {section.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors flex-1">
                          {item.name}
                        </h4>
                        <span className="font-bold text-primary whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      {('note' in item) && item.note && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-500 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            💳 Paiement en espèces et carte bancaire acceptés
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Tarifs valables en 2024 • Sous réserve de modifications
          </p>
        </div>
      </div>
    </section>
  );
}
