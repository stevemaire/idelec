import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-brand-dark">{n}. {title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité - IDELEC" },
      { name: "description", content: "Politique de confidentialité du site IDELEC SARL : données collectées, finalités, durée de conservation et vos droits RGPD." },
      { property: "og:url", content: "/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/confidentialite" }],
  }),
  component: Confidentialite,
});

function Confidentialite() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-extrabold text-brand-dark">Politique de confidentialité</h1>
        <p className="mt-4 text-sm text-muted-foreground">Dernière mise à jour : 10 juin 2026.</p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <Section n="1" title="Préambule">
            <p>
              La présente politique de confidentialité a pour but de vous informer sur la manière dont IDELEC collecte,
              utilise et protège vos données personnelles dans le cadre de votre navigation sur le site idelec-sarl.fr,
              conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679).
            </p>
          </Section>

          <Section n="2" title="Responsable du traitement">
            <p>
              Le responsable du traitement des données personnelles est :<br />
              <strong className="text-foreground">IDELEC</strong> - SARL<br />
              SIRET : 502 409 410 00011<br />
              Siège social : 7 Rue des Prés, 67470 Schaffhouse-près-Seltz<br />
              Email : <a href="mailto:info@idelec-sarl.fr" className="text-brand font-medium hover:text-energy">info@idelec-sarl.fr</a>
            </p>
          </Section>

          <Section n="3" title="Données collectées">
            <p>Dans le cadre de l'utilisation de notre site, nous sommes susceptibles de collecter les données personnelles suivantes :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email</li>
              <li>Nom</li>
              <li>Téléphone</li>
              <li>Cookies</li>
            </ul>
          </Section>

          <Section n="4" title="Finalités du traitement">
            <p>Les données personnelles collectées sont utilisées pour les finalités suivantes :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestion de la relation client</li>
              <li>Traitement des demandes de contact et de devis</li>
              <li>Amélioration de nos services</li>
              <li>Respect de nos obligations légales</li>
            </ul>
          </Section>

          <Section n="5" title="Base légale du traitement">
            <p>Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Mesures précontractuelles :</strong> traitement de vos demandes de contact et de devis</li>
              <li><strong className="text-foreground">Consentement :</strong> lorsque vous nous transmettez volontairement vos coordonnées via nos formulaires</li>
              <li><strong className="text-foreground">Intérêt légitime :</strong> amélioration de nos services et sécurité du site</li>
              <li><strong className="text-foreground">Obligation légale :</strong> conservation des données comptables et fiscales</li>
            </ul>
          </Section>

          <Section n="6" title="Durée de conservation">
            <p>Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Données de contact : durée de la relation commerciale + 3 ans</li>
              <li>Cookies : 13 mois maximum</li>
            </ul>
          </Section>

          <Section n="7" title="Destinataires des données">
            <p>
              Vos données personnelles sont destinées à IDELEC et ne sont transmises à aucun tiers, à l'exception des
              sous-traitants techniques suivants, agissant pour notre compte et selon nos instructions :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Hébergeur :</strong> 1&1 IONOS SARL (SIRET : 431 303 775 00016) - hébergement du site</li>
              <li><strong className="text-foreground">Web3Forms :</strong> acheminement et envoi par email des formulaires de contact et de prise de rendez-vous</li>
              <li><strong className="text-foreground">Google :</strong> affichage de la carte de localisation (Google Maps)</li>
            </ul>
            <p>Ces prestataires sont tenus par des obligations contractuelles de confidentialité et de sécurité conformément au RGPD.</p>
          </Section>

          <Section n="8" title="Transferts hors Union européenne">
            <p>
              Vos données sont principalement hébergées et traitées au sein de l'Union européenne. Certains sous-traitants
              (notamment Web3Forms et Google) peuvent toutefois traiter des données en dehors de l'Union européenne. Dans ce
              cas, ces transferts ne sont effectués que dans le respect des garanties prévues par le RGPD (décision
              d'adéquation de la Commission européenne, clauses contractuelles types, ou consentement explicite).
            </p>
          </Section>

          <Section n="9" title="Vos droits">
            <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
              <li><strong className="text-foreground">Droit de rectification :</strong> demander la correction de vos données inexactes</li>
              <li><strong className="text-foreground">Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong className="text-foreground">Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
              <li><strong className="text-foreground">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong className="text-foreground">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment, sans remettre en cause la licéité des traitements déjà effectués</li>
            </ul>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse :{" "}
              <a href="mailto:info@idelec-sarl.fr" className="text-brand font-medium hover:text-energy">info@idelec-sarl.fr</a>.
            </p>
          </Section>

          <Section n="10" title="Sécurité des données">
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir la
              sécurité de vos données personnelles et notamment les protéger contre la destruction accidentelle ou illicite,
              la perte accidentelle, l'altération, la diffusion ou l'accès non autorisé.
            </p>
          </Section>

          <Section n="11" title="Cookies">
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation (notamment via la carte Google
              Maps présente sur la page Contact). Un cookie est un petit fichier texte stocké sur votre terminal lors de
              votre visite.
            </p>
            <p>
              Vous pouvez à tout moment accepter ou refuser les cookies via le bandeau prévu à cet effet, ou les désactiver
              dans les paramètres de votre navigateur. La désactivation des cookies peut toutefois affecter certaines
              fonctionnalités du site.
            </p>
          </Section>

          <Section n="12" title="Réclamation">
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès
              de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <p>
              CNIL - 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07<br />
              Téléphone : 01 53 73 22 22<br />
              Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand font-medium hover:text-energy">www.cnil.fr</a>
            </p>
          </Section>

          <Section n="13" title="Modifications">
            <p>
              Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute
              modification sera publiée sur cette page avec indication de la date de mise à jour.
            </p>
          </Section>

          <p className="border-t border-border pt-6 text-xs text-muted-foreground/70">
            Politique de confidentialité générée avec{" "}
            <a href="https://rgpdkit.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-energy">RGPD Kit</a>.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
