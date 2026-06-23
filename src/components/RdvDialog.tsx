import { useState, type ReactNode } from "react";
import { sendContactForm } from "@/lib/sendContactForm";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Nom requis").max(80),
  phone: z.string().trim().min(8, "Téléphone invalide").max(20),
  message: z.string().trim().max(500).optional(),
});

export function RdvDialog({ children, variant = "energy" }: { children?: ReactNode; variant?: "energy" | "outline" | "default" }) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Formulaire invalide");
      return;
    }
    setSubmitting(true);
    try {
      await sendContactForm(
        {
          name: parsed.data.name,
          phone: parsed.data.phone,
          message: parsed.data.message ?? "(aucun message)",
        },
        "Nouvelle demande de RDV - site IDELEC",
      );
      toast.success("Demande envoyée ! Nous vous recontactons sous 24h.");
      setOpen(false);
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ?? <Button variant={variant}>Demander un RDV</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Demander un rendez-vous</DialogTitle>
          <DialogDescription>Laissez-nous vos coordonnées, nous vous rappelons rapidement.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rdv-name">Nom complet *</Label>
            <Input id="rdv-name" name="name" required maxLength={80} placeholder="Jean Dupont" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rdv-phone">Téléphone *</Label>
            <Input id="rdv-phone" name="phone" type="tel" required maxLength={20} placeholder="06 12 34 56 78" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rdv-msg">Message</Label>
            <Textarea id="rdv-msg" name="message" maxLength={500} placeholder="Décrivez brièvement votre besoin..." rows={3} />
          </div>
          <DialogFooter>
            <Button type="submit" variant="energy" className="w-full" disabled={submitting}>
              {submitting ? "Envoi..." : "Envoyer ma demande"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}