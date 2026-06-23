import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { RdvDialog } from "./RdvDialog";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/societe", label: "Notre société" },
  { to: "/services", label: "Nos services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden md:block bg-brand-dark text-brand-foreground text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+33388868814" className="flex items-center gap-1.5 hover:text-energy transition-colors">
              <Phone className="h-3.5 w-3.5" /> 03 88 86 88 14
            </a>
            <span className="flex items-center gap-1.5 opacity-90">
              <Clock className="h-3.5 w-3.5" /> Lun - Ven 08h00 - 18h00
            </span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=IDELEC%20SARL%2C%207%20Rue%20des%20Pr%C3%A9s%2C%2067470%20Schaffhouse-pr%C3%A8s-Seltz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 opacity-90 hover:text-energy hover:opacity-100 transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" /> Schaffhouse-près-Seltz (67)
            </a>
          </div>
          <span className="opacity-80">Certifié RGE QUALIPAC et IRVE</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-18 py-3 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors"
                activeProps={{ className: "text-brand font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <RdvDialog />
          </div>
          <button
            className="lg:hidden p-2 text-brand-dark"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-6 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium"
                  activeProps={{ className: "text-brand font-semibold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <div className="pt-2"><RdvDialog><Button variant="energy" className="w-full">Demander un RDV</Button></RdvDialog></div>
              <a href="tel:+33388868814" className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" /> 03 88 86 88 14
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}