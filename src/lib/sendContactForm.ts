// Envoi des formulaires (rendez-vous + contact) vers ton email via Web3Forms.
// Web3Forms est un service gratuit qui transfère le contenu du formulaire
// par email - pas besoin de serveur ni de base de données.
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │ 1 SEULE CHOSE À FAIRE : colle ta clé d'accès entre les guillemets.   │
// │   1. Va sur https://web3forms.com                                    │
// │   2. Entre l'adresse  info@idelec-sarl.fr                            │
// │   3. Copie la "Access Key" reçue et colle-la ci-dessous.             │
// └─────────────────────────────────────────────────────────────────────┘
//
// Cette clé peut rester dans le code sans risque : elle sert uniquement à
// envoyer les messages vers ton email, elle ne donne accès à rien d'autre.
const WEB3FORMS_ACCESS_KEY = "2ab24a56-b5f9-42e6-9f5c-21e4a22b36e0";

export async function sendContactForm(
  fields: Record<string, string>,
  subject: string,
): Promise<void> {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error(
      "Clé Web3Forms manquante : ouvre src/lib/sendContactForm.ts et colle ta clé.",
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "Site IDELEC",
      subject,
      ...fields,
    }),
  });

  const data = (await res.json().catch(() => null)) as
    | { success?: boolean; message?: string }
    | null;

  if (!res.ok || !data?.success) {
    throw new Error(data?.message ?? "L'envoi a échoué. Merci de réessayer.");
  }
}
