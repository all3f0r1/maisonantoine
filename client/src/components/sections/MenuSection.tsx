import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  const menuItems = [
    {
      category: "Nos Frites Légendaires",
      items: [
        {
          name: "Frites Classiques",
          description: "Nos frites dorées et croustillantes, cuites à la perfection",
          badge: "Signature" as string | undefined,
        },
        {
          name: "Grande Portion",
          description: "Pour les grands appétits !",
          badge: "Populaire" as string | undefined,
        },
      ],
    },
    {
      category: "Sauces Maison",
      items: [
        {
          name: "Sauce Andalouse",
          description: "La classique belge",
          badge: undefined as string | undefined,
        },
        {
          name: "Sauce Samouraï",
          description: "Pour les amateurs de piquant",
          badge: undefined as string | undefined,
        },
        {
          name: "Mayonnaise Maison",
          description: "Préparée selon notre recette traditionnelle",
          badge: undefined as string | undefined,
        },
        {
          name: "Et bien d'autres...",
          description: "Plus de 20 sauces au choix !",
          badge: undefined as string | undefined,
        },
      ],
    },
    {
      category: "Snacks & Burgers",
      items: [
        {
          name: "Burger Maison Antoine",
          description: "Notre burger signature avec frites",
          badge: undefined as string | undefined,
        },
        {
          name: "Fricadelle",
          description: "Le snack belge par excellence",
          badge: undefined as string | undefined,
        },
        {
          name: "Boulettes Sauce Tomate",
          description: "Recette traditionnelle",
          badge: undefined as string | undefined,
        },
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
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos spécialités belges préparées avec passion et savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((section, sectionIndex) => (
            <Card
              key={sectionIndex}
              className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${sectionIndex * 150}ms` }}
            >
              <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardTitle className="text-2xl text-primary">
                  {section.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground">
            Les prix sont affichés sur place • Paiement en espèces et carte
          </p>
        </div>
      </div>
    </section>
  );
}
