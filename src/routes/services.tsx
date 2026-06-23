import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { RdvDialog } from "@/components/RdvDialog";
import { Button } from "@/components/ui/button";
import { Zap, PlugZap, Thermometer, Wind, Droplets, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services - Électricité, PAC, climatisation, sanitaire | IDELEC" },
      { name: "description", content: "Électricité, pompe à chaleur, climatisation et sanitaire : toutes les prestations IDELEC pour l'habitat individuel en Alsace." },
      { property: "og:title", content: "Nos services - IDELEC" },
      { property: "og:description", content: "L'expertise IDELEC pour vos installations techniques d'habitat." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "electricite",
    icon: Zap,
    title: "Électricité",
    intro: "De l'installation neuve à la mise aux normes complète, nous prenons en charge tous vos travaux électriques en habitat individuel.",
    items: [
      "Installation électrique complète",
      "Domotique KNX Partner",
      "Mise aux normes NFC 15-100",
      "Mise en sécurité du tableau électrique",
      "Économies d'énergie (RGE QUALIPAC et IRVE)",
      "Dépannage rapide",
      "Travaux neufs et rénovation",
      "Habitat individuel",
    ],
  },
  {
    id: "bornes-de-recharge",
    icon: PlugZap,
    title: "Bornes de recharge",
    intro: "Installation de bornes de recharge pour véhicules électriques, à domicile comme en entreprise. IDELEC est certifié IRVE.",
    items: [
      "Borne de recharge à domicile (maison individuelle)",
      "Installation en copropriété et en entreprise",
      "Bornes monophasées et triphasées",
      "Pose certifiée IRVE",
      "Étude de puissance et conseil personnalisé",
      "Maintenance et dépannage",
    ],
  },
  {
    id: "pompe-a-chaleur",
    icon: Thermometer,
    title: "Pompe à chaleur",
    intro: "Une solution de chauffage écologique qui exploite les calories naturellement présentes dans le sol, l'air ou l'eau.",
    items: [
      "PAC aérothermique (air/eau, air/air)",
      "PAC géothermique (sol/eau)",
      "PAC aquathermique (eau/eau)",
      "Radiateurs et chauffage au sol",
      "Étude de dimensionnement",
      "Installation et mise en service",
      "Maintenance et entretien annuel",
      "Éligibilité aux aides (MaPrimeRénov', CEE)",
    ],
  },
  {
    id: "climatisation",
    icon: Wind,
    title: "Climatisation",
    intro: "Confort thermique en été comme en hiver grâce à des systèmes performants et adaptés à votre habitat.",
    items: [
      "Climatisation monosplit et multisplit",
      "Climatisation réversible",
      "Conseil et étude personnalisée",
      "Installation soignée",
      "Entretien et dépannage",
    ],
  },
  {
    id: "sanitaire",
    icon: Droplets,
    title: "Sanitaire",
    intro: "Installation d'équipements sanitaires sur mesure, rénovation et réparation d'installations existantes (toutes marques).",
    items: [
      "Salles de bain sur mesure",
      "Installation de sanitaires neufs",
      "Rénovation d'installations existantes",
      "Réparation et dépannage toutes marques",
      "Robinetterie, douche, baignoire, WC",
      "Ballons d'eau chaude",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-brand-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="text-energy text-sm uppercase font-semibold tracking-wider">Nos services</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold">Toutes nos expertises techniques</h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-foreground/85">
            Quatre métiers, un seul interlocuteur. IDELEC vous accompagne sur l'ensemble de vos installations techniques d'habitat.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="p-10 rounded-3xl bg-gradient-hero text-brand-foreground shadow-card">
              <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                <s.icon className="h-8 w-8 text-energy" strokeWidth={1.75} />
              </div>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-bold">{s.title}</h2>
              <p className="mt-4 text-brand-foreground/85">{s.intro}</p>
              <RdvDialog>
                <Button variant="energy" className="mt-6">Demander un devis</Button>
              </RdvDialog>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-energy">Nos prestations</h3>
              <ul className="mt-4 space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-energy/20 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-brand-dark" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/85">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}