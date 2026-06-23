import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { sendContactForm } from "@/lib/sendContactForm";
import { LazyMap } from "@/components/LazyMap";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(8).max(20),
  type: z.string().min(1),
  message: z.string().trim().min(5).max(1500),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - IDELEC à Schaffhouse-près-Seltz (67)" },
      { name: "description", content: "Contactez IDELEC SARL : 03 88 86 88 14 - info@idelec-sarl.fr. Devis gratuit, intervention dans tout le Bas-Rhin." },
      { property: "og:title", content: "Contact - IDELEC" },
      { property: "og:description", content: "Demandez votre devis gratuit." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      type: fd.get("type"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error("Merci de remplir tous les champs correctement.");
      return;
    }
    setSubmitting(true);
    try {
      await sendContactForm(
        {
          name: parsed.data.name,
          email: parsed.data.email,
          replyto: parsed.data.email,
          phone: parsed.data.phone,
          type: parsed.data.type,
          message: parsed.data.message,
        },
        "Nouveau message de contact - site IDELEC",
      );
      toast.success("Message envoyé ! Nous vous répondrons sous 24h.");
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-brand-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <span className="text-energy text-sm uppercase font-semibold tracking-wider">Contact</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold">Parlons de votre projet</h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-foreground/85">
            Votre artisan vous répond rapidement. Devis gratuit et sans engagement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3 bg-card rounded-2xl shadow-card p-8 border border-border">
          <h2 className="text-2xl font-bold text-brand-dark">Formulaire de contact</h2>
          <form onSubmit={onSubmit} className="mt-6 space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom *</Label>
                <Input id="name" name="name" required maxLength={80} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input id="phone" name="phone" type="tel" required maxLength={20} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type de prestation *</Label>
                <Select name="type" required defaultValue="">
                  <SelectTrigger id="type"><SelectValue placeholder="Sélectionnez..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electricite">Électricité</SelectItem>
                    <SelectItem value="bornes">Bornes de recharge</SelectItem>
                    <SelectItem value="pac">Pompe à chaleur</SelectItem>
                    <SelectItem value="clim">Climatisation</SelectItem>
                    <SelectItem value="sanitaire">Sanitaire</SelectItem>
                    <SelectItem value="depannage">Dépannage</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Votre message *</Label>
              <Textarea id="message" name="message" rows={5} required maxLength={1500} />
            </div>
            <Button type="submit" variant="energy" size="lg" className="w-full md:w-auto" disabled={submitting}>
              {submitting ? "Envoi..." : "Envoyer le message"}
            </Button>
          </form>
        </div>

        {/* Infos */}
        <aside className="lg:col-span-2 space-y-4">
          <div className="bg-brand-dark text-brand-foreground rounded-2xl p-6">
            <h3 className="font-display font-bold text-xl">IDELEC SARL</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li><a href="https://www.google.com/maps/search/?api=1&query=IDELEC%20SARL%2C%207%20Rue%20des%20Pr%C3%A9s%2C%2067470%20Schaffhouse-pr%C3%A8s-Seltz" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-energy transition-colors"><MapPin className="h-5 w-5 text-energy mt-0.5 shrink-0" /><span>7 Rue des Prés<br />67470 Schaffhouse-près-Seltz</span></a></li>
              <li><a href="tel:+33388868814" className="flex gap-3 hover:text-energy"><Phone className="h-5 w-5 text-energy mt-0.5" /> 03 88 86 88 14</a></li>
              <li><a href="mailto:info@idelec-sarl.fr" className="flex gap-3 hover:text-energy"><Mail className="h-5 w-5 text-energy mt-0.5" /> info@idelec-sarl.fr</a></li>
              <li className="flex gap-3"><Clock className="h-5 w-5 text-energy mt-0.5 shrink-0" /><span>Lun - Ven : 08h00 - 18h00<br />Fermé le week-end</span></li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card border border-border">
            <LazyMap
              title="Localisation IDELEC"
              src="https://www.google.com/maps?q=7+Rue+des+Pr%C3%A9s,+67470+Schaffhouse-pr%C3%A8s-Seltz&output=embed"
              className="w-full h-72"
            />
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}