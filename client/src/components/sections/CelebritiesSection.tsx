import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function CelebritiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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

  const celebrities = [
    {
      image: "/images/celebrities/rtbf.jpg",
      caption: "Événement au Palais Royal - RTBF",
    },
    {
      image: "/images/celebrities/montagne.jpg",
      caption: "Gilbert Montagné",
    },
    {
      image: "/images/celebrities/lotti.jpg",
      caption: "Helmut Lotti",
    },
    {
      image: "/images/celebrities/johnny.jpg",
      caption: "Johnny Hallyday",
    },
    {
      image: "/images/celebrities/kfparty.jpg",
      caption: "Didier Reynders, Vincent Dewolf & Daniel Ducarme",
    },
    {
      image: "/images/celebrities/vanhamme.jpg",
      caption: "Thomas Van Hamme",
    },
    {
      image: "/images/celebrities/stars.jpg",
      caption: "Célébrités belges",
    },
    {
      image: "/images/celebrities/maison-antoine-night.jpg",
      caption: "Maison Antoine de nuit - Place Jourdan",
    },
    {
      image: "/images/celebrities/place-jourdan.jpg",
      caption: "Ambiance Place Jourdan",
    },
  ];

  const slides = celebrities.map((celeb) => ({
    src: celeb.image,
    title: celeb.caption,
  }));

  return (
    <section
      id="celebrities"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Star className="w-20 h-20 text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Star className="w-16 h-16 text-primary animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-8 h-8 text-primary fill-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Ils ont aimé nos frites !
            </h2>
            <Star className="w-8 h-8 text-primary fill-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            À l'occasion de deux événements, la Maison Antoine a été invitée au{" "}
            <strong>Palais Royal</strong> et au <strong>Palais des Beaux-Arts</strong>{" "}
            pour servir les frites à nos souverains. De nombreuses célébrités belges et
            internationales ont également savouré nos frites légendaires !
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Axelle Red, Maurane, Philippe Geluck, Annie Cordy et encore bien d'autres...
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto transition-all duration-500 delay-100 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {celebrities.map((celeb, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <img
                src={celeb.image}
                alt={celeb.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-semibold text-center">
                    {celeb.caption}
                  </p>
                </div>
              </div>
              {/* Star icon overlay */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Star className="w-6 h-6 text-primary fill-primary drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </section>
  );
}
