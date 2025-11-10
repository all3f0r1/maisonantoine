import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalerieSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const photos = [
    {
      src: "/images/gallery/HpApv0gBXfyS.jpg",
      alt: "Maison Antoine - Vue extérieure",
    },
    {
      src: "/images/gallery/gP02SMIzOs2S.jpg",
      alt: "Frites dorées dans un cornet",
    },
    {
      src: "/images/gallery/cl5L0jBy7orw.jpg",
      alt: "Cornet de frites belges",
    },
    {
      src: "/images/gallery/pcv3LucuIYfg.jpg",
      alt: "Frites avec sauce",
    },
    {
      src: "/images/gallery/LhOh2P1vJl2u.jpg",
      alt: "Frites dans un emballage",
    },
    {
      src: "/images/gallery/saGAYxAtRMrf.jpg",
      alt: "La friterie Place Jourdan",
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="galerie"
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
            Galerie Photos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez en images notre friterie et nos délicieuses spécialités
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">{photo.alt}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={photos}
      />
    </section>
  );
}
