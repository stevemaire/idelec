import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Zap, PlugZap, Thermometer, Wind, Droplets, ShieldCheck, BadgeCheck, Wrench, Leaf, ArrowRight, Phone, Check } from "lucide-react";
import heroImg from "@/assets/hero-electrician.jpg";
import { SiteLayout } from "@/components/SiteLayout";
import { RdvDialog } from "@/components/RdvDialog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IDELEC - Électricien RGE QUALIPAC et IRVE à Schaffhouse-près-Seltz (67)" },
      { name: "description", content: "Artisan électricien en Alsace. Installation électrique, pompe à chaleur, climatisation et sanitaire. Devis gratuit." },
      { property: "og:title", content: "IDELEC - Électricien RGE QUALIPAC et IRVE en Alsace" },
      { property: "og:description", content: "Solutions techniques RGE QUALIPAC et IRVE pour l'habitat individuel dans le Bas-Rhin." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Zap, title: "Électricité", desc: "Installation, mise aux normes, dépannage. Neuf et rénovation.", color: "text-brand" },
  { icon: PlugZap, title: "Bornes de recharge", desc: "Installation de bornes pour véhicules électriques, certifiée IRVE.", color: "text-brand" },
  { icon: Thermometer, title: "Pompe à chaleur", desc: "Chauffage performant via l'énergie du sol, de l'air ou de l'eau.", color: "text-brand" },
  { icon: Wind, title: "Climatisation", desc: "Installation et entretien de systèmes adaptés à votre habitat.", color: "text-brand" },
  { icon: Droplets, title: "Sanitaire", desc: "Équipements sur mesure, rénovation et réparation toutes marques.", color: "text-brand" },
];

const atouts = [
  { icon: BadgeCheck, title: "Certifié RGE QUALIPAC et IRVE", desc: "Une qualification reconnue, gage de qualité et d'éligibilité aux aides." },
  { icon: Leaf, title: "Économies d'énergie", desc: "Des solutions pensées pour réduire durablement vos factures." },
  { icon: ShieldCheck, title: "Mise aux normes & sécurité", desc: "Installations conformes NFC 15-100, en toute sérénité." },
  { icon: Wrench, title: "Artisan local", desc: "Présent dans le Bas-Rhin, proche de vous et réactif." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Installation électrique professionnelle IDELEC" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 text-brand-foreground">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-medium text-energy border border-white/20">
              <BadgeCheck className="h-4 w-4" /> Certifié RGE QUALIPAC et IRVE
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Pour une maison <span className="text-energy">bien équipée</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-foreground/85 max-w-xl">
              Artisan électricien en Alsace, IDELEC conçoit et installe vos solutions techniques d'habitat : électricité, pompe à chaleur, climatisation et sanitaire.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <RdvDialog><Button variant="energy" size="xl">Demander un devis</Button></RdvDialog>
              <Button asChild variant="hero" size="xl">
                <Link to="/services">Nos services <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-dark text-brand-foreground/90">
        <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {["RGE QUALIPAC et IRVE", "Habitat individuel", "Neuf & rénovation", "Dépannage rapide"].map((t) => (
            <div key={t} className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-energy" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl bg-gradient-hero text-brand-foreground shadow-card p-8 md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-energy">
            <BadgeCheck className="h-4 w-4" /> Certifié RGE QUALIPAC & IRVE
          </span>
          <h3 className="mt-6 font-display text-2xl md:text-3xl font-bold">Votre artisan de confiance en Alsace</h3>
          <ul className="mt-6 space-y-4">
            {[
              "Électricité, pompe à chaleur, climatisation, sanitaire & bornes de recharge",
              "Intervention dans tout le Bas-Rhin (67)",
              "Neuf, rénovation & dépannage rapide",
              "Devis gratuit et sans engagement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-energy/20">
                  <Check className="h-3.5 w-3.5 text-energy" strokeWidth={3} />
                </span>
                <span className="text-brand-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-energy font-semibold text-sm uppercase tracking-wider">À propos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-dark">Bienvenue chez IDELEC</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Implantée à Schaffhouse-près-Seltz dans le Bas-Rhin, IDELEC SARL accompagne particuliers et collectivités dans la conception d'installations techniques performantes. Elle intervient sur l'habitat individuel, en neuf ou en rénovation.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Notre engagement : des installations sûres, durables et économes en énergie, réalisées dans les règles de l'art par un artisan qualifié.
          </p>
          <Button asChild variant="default" className="mt-6">
            <Link to="/societe">Découvrir l'entreprise <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-energy font-semibold text-sm uppercase tracking-wider">Nos services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-dark">Une expertise complète pour votre habitat</h2>
            <p className="mt-4 text-muted-foreground">De l'installation à la maintenance, nous couvrons tous vos besoins techniques.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s) => (
              <Link key={s.title} to="/services" className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-border">
                <div className={`h-12 w-12 rounded-xl bg-brand/5 flex items-center justify-center ${s.color} group-hover:bg-brand group-hover:text-energy transition-colors`}>
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand group-hover:text-energy">
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-energy font-semibold text-sm uppercase tracking-wider">Pourquoi nous choisir</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-dark">Le bon partenaire pour votre projet</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {atouts.map((a) => (
            <div key={a.title} className="p-6 rounded-2xl bg-card border border-border">
              <a.icon className="h-9 w-9 text-energy" strokeWidth={1.5} />
              <h3 className="mt-4 font-semibold text-brand-dark">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-hero text-brand-foreground overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold">Prêt à lancer votre projet ?</h2>
          <p className="mt-4 text-brand-foreground/80 max-w-xl mx-auto">Prenez rendez-vous avec nous. Étude personnalisée et devis gratuit.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <RdvDialog><Button variant="energy" size="xl">Prendre rendez-vous</Button></RdvDialog>
            <Button asChild variant="hero" size="xl">
              <a href="tel:+33388868814"><Phone className="mr-1 h-4 w-4" /> 03 88 86 88 14</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
