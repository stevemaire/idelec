import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales - IDELEC" },
      { name: "description", content: "Mentions légales du site IDELEC SARL." },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-extrabold text-brand-dark">Mentions légales</h1>
        <p className="mt-4 text-sm text-muted-foreground">Dernière mise à jour : 10 juin 2026.</p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-dark">1. Identification de l'entreprise</h2>
            <p className="mt-3">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie
              numérique, il est précisé aux utilisateurs du site idelec-sarl.fr l'identité des différents intervenants dans
              le cadre de sa réalisation et de son suivi.
            </p>

            <h3 className="mt-5 font-semibold text-foreground">Éditeur du site</h3>
            <p className="mt-2">
              <strong className="text-foreground">IDELEC</strong> - SARL au capital de 5 000 €<br />
              SIRET : 502 409 410 00011<br />
              RCS : 502 409 410 R.C.S. Strasbourg<br />
              N° TVA intracommunautaire : FR47502409410<br />
              Siège social : 7 Rue des Prés, 67470 Schaffhouse-près-Seltz<br />
              Email : <a href="mailto:info@idelec-sarl.fr" className="text-brand font-medium hover:text-energy">info@idelec-sarl.fr</a><br />
              Téléphone : 03 88 86 88 14
            </p>

            <h3 className="mt-5 font-semibold text-foreground">Directeur de la publication</h3>
            <p className="mt-2">Le directeur de la publication du site est <strong className="text-foreground">David Lambin</strong>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark">2. Hébergement</h2>
            <p className="mt-3">
              Le site est hébergé par <strong className="text-foreground">1&1 IONOS SARL</strong> (SIRET : 431 303 775 00016),
              dont le siège social est situé : 7 Place de la Gare, 57200 Sarreguemines, France. Téléphone : 0970 808 911.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark">3. Propriété intellectuelle</h2>
            <p className="mt-3">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
              propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="mt-3">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement
              interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark">4. Limitation de responsabilité</h2>
            <p className="mt-3">
              IDELEC ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur,
              lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications
              indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
            <p className="mt-3">
              IDELEC ne pourra également être tenue responsable des dommages indirects (tels par exemple qu'une perte de
              marché ou perte d'une chance) consécutifs à l'utilisation du site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark">5. Gestion des données personnelles</h2>
            <p className="mt-3">
              Pour plus d'informations sur la gestion de vos données personnelles, veuillez consulter notre{" "}
              <Link to="/confidentialite" className="text-brand font-medium hover:text-energy">Politique de confidentialité</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark">6. Médiation de la consommation</h2>
            <p className="mt-3">
              Conformément à l'article L.612-1 du Code de la consommation, tout consommateur a le droit de recourir
              gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige l'opposant à un
              professionnel. Le médiateur dont relève IDELEC est :{" "}
              Batirmédiation, 22 Corniche du Soleil, 83430 Saint-Mandrier (<a href="https://www.batirmediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-brand font-medium hover:text-energy">www.batirmediation-conso.fr</a>).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark">7. Assurance professionnelle</h2>
            <p className="mt-3">
              IDELEC SARL est couverte par une assurance de responsabilité civile professionnelle et décennale
              souscrite auprès de MAAF Pro (Chaban de Chauray, 79036 Niort Cedex 9), sous le n° de police 167249933 (couverture géographique : France hors outre-mer).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark">8. Droit applicable et juridiction compétente</h2>
            <p className="mt-3">
              Tout litige en relation avec l'utilisation du site idelec-sarl.fr est soumis au droit français. En cas de
              litige, les tribunaux français seront seuls compétents.
            </p>
          </div>

          <p className="border-t border-border pt-6 text-xs text-muted-foreground/70">
            Mentions légales créées avec{" "}
            <a href="https://rgpdkit.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-energy">RGPD Kit</a>.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
