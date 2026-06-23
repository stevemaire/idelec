import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import r1 from "@/assets/real-1.jpg";
import r2 from "@/assets/real-2.jpg";
import r4 from "@/assets/real-4.jpg";
import r5 from "@/assets/real-5.jpg";
import r6 from "@/assets/real-6.jpg";
import r7 from "@/assets/real-7.jpg";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations - IDELEC, chantiers en Alsace" },
      { name: "description", content: "Galerie de nos installations électriques, pompes à chaleur, climatisations et sanitaires réalisées par IDELEC dans le Bas-Rhin." },
      { property: "og:title", content: "Réalisations - IDELEC" },
      { property: "og:description", content: "Découvrez nos chantiers récents." },
      { property: "og:url", content: "/realisations" },
    ],
    links: [{ rel: "canonical", href: "/realisations" }],
  }),
  component: Page,
});

// ⚠️ EXEMPLES - remplace par les vraies infos de chaque chantier.
// La mini carte Google se met à jour automatiquement selon le champ "ville".
const realisations = [
  { src: r1, description: "Rénovation complète d'une douche", type: "Rénovation", domaine: "Sanitaire", debut: "Janvier 2026", },
  { src: r2, description: "Installation d'une pompe à chaleur air/eau et air/air", type: "Installation neuve", domaine: "Pompe à chaleur", debut: "Septembre 2025",  },
  { src: r4, description: "Installation d'une pompe à chaleur", type: "Rénovation", domaine: "Chauffage", debut: "Août 2025" },
  { src: r5, description: "Installation de chauffage au sol Hydraulique", type: "Rénovation", domaine: "Chauffage", debut: "Mai 2026",  },
  { src: r6, description: "Installation d'une salle de bain", type: "Rénovation", domaine: "Sanitaire", debut: "Décembre 2025",  },
  { src: r7, description: "Installation électrique", type: "Neuf", domaine: "Électricité", debut: "Février 2026",  },
];

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-brand-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="text-energy text-sm uppercase font-semibold tracking-wider">Réalisations</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold">Nos derniers chantiers</h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-foreground/85">
            Un aperçu de notre savoir-faire à travers quelques projets récents.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {realisations.map((r, i) => (
            <article key={i} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img
                src={r.src}
                alt={`Réalisation IDELEC à ${r.ville}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-brand-dark">{r.description}</h3>

                <dl className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-foreground">Type :</dt>
                    <dd>{r.type}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-foreground">Domaine :</dt>
                    <dd>{r.domaine}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-foreground">Début des travaux :</dt>
                    <dd>{r.debut}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
