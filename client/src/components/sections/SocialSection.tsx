import { useEffect, useRef, useState } from "react";
import { Facebook } from "lucide-react";

export default function SocialSection() {
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

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      if ((window as any).FB) return;

      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    };

    loadFacebookSDK();
  }, []);

  return (
    <section
      id="social"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Facebook className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Suivez-nous sur Facebook
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez informés de nos actualités, promotions et nouveautés !
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-500 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card rounded-2xl shadow-xl p-6 border-2 border-border">
            <div id="fb-root"></div>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/MaisonAntoinePageOfficielle"
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/MaisonAntoinePageOfficielle"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/MaisonAntoinePageOfficielle">
                  Maison Antoine ( Page officielle)
                </a>
              </blockquote>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.facebook.com/MaisonAntoinePageOfficielle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full font-semibold hover:bg-[#0d65d9] transition-colors shadow-lg hover:shadow-xl"
            >
              <Facebook className="w-5 h-5" />
              Visiter notre page Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
