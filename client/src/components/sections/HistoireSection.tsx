import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Award, Heart } from "lucide-react";

export default function HistoireSection() {
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

  const timeline = [
    {
      year: "1948",
      title: "Les Débuts",
      description:
        "Fondation de Maison Antoine juste après la Seconde Guerre mondiale, au cœur de Bruxelles.",
      icon: Calendar,
    },
    {
      year: "1970s",
      title: "Deuxième Génération",
      description:
        "La famille reprend le flambeau et perpétue la tradition des frites belges authentiques.",
      icon: Users,
    },
    {
      year: "2000s",
      title: "Institution Bruxelloise",
      description:
        "Maison Antoine devient une référence incontournable pour les habitants et touristes.",
      icon: Award,
    },
    {
      year: "Aujourd'hui",
      title: "Troisième Génération",
      description:
        "Plus de 75 ans d'excellence et de passion pour les meilleures frites de Belgique.",
      icon: Heart,
    },
  ];

  return (
    <section
      id="histoire"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Histoire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une tradition familiale transmise sur trois générations, au service
            de la meilleure friterie de Bruxelles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative pl-8 md:pl-16 pb-12 last:pb-0 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[19px] md:left-[35px] top-12 bottom-0 w-0.5 bg-primary/30"></div>
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-4 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>

                <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-primary">
                        {item.title}
                      </h3>
                      <span className="text-lg font-semibold text-accent">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
