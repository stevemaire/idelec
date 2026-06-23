import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-sm text-brand-foreground/70 leading-relaxed">
            Artisan certifié RGE QUALIPAC et IRVE. Solutions techniques pour vos maisons en Alsace.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-energy">Navigation</h4>
          <ul className="space-y-2 text-sm text-brand-foreground/80">
            <li><Link to="/" className="hover:text-energy">Accueil</Link></li>
            <li><Link to="/societe" className="hover:text-energy">Notre société</Link></li>
            <li><Link to="/services" className="hover:text-energy">Nos services</Link></li>
            <li><Link to="/realisations" className="hover:text-energy">Réalisations</Link></li>
            <li><Link to="/contact" className="hover:text-energy">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-energy">Contact</h4>
          <ul className="space-y-3 text-sm text-brand-foreground/80">
            <li><a href="https://www.google.com/maps/search/?api=1&query=IDELEC%20SARL%2C%207%20Rue%20des%20Pr%C3%A9s%2C%2067470%20Schaffhouse-pr%C3%A8s-Seltz" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-energy transition-colors"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>7 Rue des Prés<br />67470 Schaffhouse-près-Seltz</span></a></li>
            <li><a href="tel:+33388868814" className="flex gap-2 hover:text-energy"><Phone className="h-4 w-4 mt-0.5" /> 03 88 86 88 14</a></li>
            <li><a href="mailto:info@idelec-sarl.fr" className="flex gap-2 hover:text-energy"><Mail className="h-4 w-4 mt-0.5" /> info@idelec-sarl.fr</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /><span>Lun - Ven : 08h00 - 18h00<br />Fermé le week-end</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-energy">Légal</h4>
          <ul className="space-y-2 text-sm text-brand-foreground/80">
            <li><Link to="/mentions-legales" className="hover:text-energy">Mentions légales</Link></li>
            <li><Link to="/confidentialite" className="hover:text-energy">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-brand-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 IDELEC SARL. Tous droits réservés.</span>
          <span>RGE QUALIPAC et IRVE · Alsace, France</span>
        </div>
      </div>
    </footer>
  );
}