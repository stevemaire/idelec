import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LazyMap } from "@/components/LazyMap";
import { Button } from "@/components/ui/button";
import { Award, User, MapPin, Leaf, HardHat, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/societe")({
  head: () => ({
    meta: [
      { title: "Notre société - IDELEC, artisan électricien en Alsace" },
      { name: "description", content: "Découvrez IDELEC SARL : artisan, valeurs, savoir-faire et certification RGE QUALIPAC et IRVE. Intervention dans tout le Bas-Rhin." },
      { property: "og:title", content: "Notre société - IDELEC" },
      { property: "og:description", content: "Un artisan à votre service en Alsace, certifié RGE QUALIPAC et IRVE." },
      { property: "og:url", content: "/societe" },
    ],
    links: [{ rel: "canonical", href: "/societe" }],
  }),
  component: Page,
});

const valeurs = [
  { icon: Award, title: "Qualité certifiée", desc: "Certification RGE QUALIPAC et IRVE, gage de compétences techniques et d'éligibilité aux aides énergétiques." },
  { icon: Leaf, title: "Économies d'énergie", desc: "Chaque installation est pensée pour optimiser votre consommation et votre confort." },
  { icon: HardHat, title: "Savoir-faire artisanal", desc: "Une expertise technique entretenue et enrichie par une formation continue." },
  { icon: HeartHandshake, title: "Proximité client", desc: "Écoute, transparence et accompagnement de A à Z, dans toute l'Alsace du Nord." },
];

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-brand-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="text-energy text-sm uppercase font-semibold tracking-wider">Notre société</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold">Un artisan à votre service !</h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-foreground/85">
            Depuis sa création en 2005, IDELEC SARL met son savoir-faire technique au service des particuliers et des professionnels du Bas-Rhin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-card border border-border">
          <LazyMap
            title="Localisation d'IDELEC à Schaffhouse-près-Seltz"
            src="https://www.google.com/maps?q=7+Rue+des+Pr%C3%A9s,+67470+Schaffhouse-pr%C3%A8s-Seltz&output=embed"
            className="w-full h-80 md:h-[28rem]"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">L'artisan de votre habitat</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Basée à Schaffhouse-près-Seltz, IDELEC accompagne particuliers, syndics et collectivités sur des projets d'installations techniques pour l'habitat. Notre approche conjugue exigence artisanale, rigueur technique et conseil personnalisé.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Notre certification <strong className="text-brand-dark">RGE QUALIPAC et IRVE</strong> reconnaît la qualité de nos interventions et vous ouvre l'accès aux aides à la rénovation énergétique (MaPrimeRénov', CEE, etc.).
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-5 w-5 text-energy" />
            Zone d'intervention : tout le Bas-Rhin (67)
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-energy font-semibold text-sm uppercase tracking-wider">Nos valeurs</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-dark">Ce qui guide notre travail</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => (
              <div key={v.title} className="bg-card p-6 rounded-2xl border border-border">
                <v.icon className="h-9 w-9 text-energy" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold text-brand-dark">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 p-8 rounded-2xl bg-brand-dark text-brand-foreground">
          <Award className="h-10 w-10 text-energy" />
          <h3 className="mt-4 text-2xl font-bold">Certifié RGE QUALIPAC et IRVE</h3>
          <p className="mt-3 text-brand-foreground/80">
            La certification RGE (Reconnu Garant de l'Environnement) - mentions QUALIPAC et IRVE - attestent de notre expertise dans les travaux d'efficacité énergétique. Elle permet à nos clients de bénéficier des dispositifs d'aides publiques pour leurs travaux.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-energy text-energy-foreground">
          <User className="h-10 w-10" />
          <h3 className="mt-4 text-2xl font-bold">Un artisan local</h3>
          <p className="mt-3">Un artisan formé, réactif et passionné, à votre écoute pour chaque projet.</p>
          <Button asChild variant="default" className="mt-5 bg-brand-dark hover:bg-brand">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}