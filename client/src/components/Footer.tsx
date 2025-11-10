import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Maison Antoine
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Place Jourdan 1</p>
                  <p>1040 Bruxelles (Etterbeek)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+3222305456"
                  className="hover:text-primary transition-colors"
                >
                  +32 2 230 54 56
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:maisonantoine@skynet.be"
                  className="hover:text-primary transition-colors"
                >
                  maisonantoine@skynet.be
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Horaires</h3>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Du lundi au dimanche</p>
                <p>11h30 - 01h00</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">À propos</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Institution bruxelloise depuis 1948, Maison Antoine vous propose
              les meilleures frites belges traditionnelles.
            </p>
            <p className="text-xs text-muted-foreground">
              TVA: BE 0557.765.044
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Maison Antoine - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
