import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const KEY = "idelec-cookies";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  function decide(v: "accept" | "refuse") {
    localStorage.setItem(KEY, v);
    setShow(false);
  }

  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[60] animate-fade-up">
      <div className="bg-card border border-border rounded-2xl shadow-card p-5">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-energy/20 flex items-center justify-center shrink-0">
            <Cookie className="h-5 w-5 text-brand-dark" />
          </div>
          <div className="text-sm text-foreground/80">
            <p className="font-semibold text-foreground mb-1">Respect de votre vie privée</p>
            <p>Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser.</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2 justify-end">
          <Button variant="outline" size="sm" onClick={() => decide("refuse")}>Refuser</Button>
          <Button variant="energy" size="sm" onClick={() => decide("accept")}>Accepter</Button>
        </div>
      </div>
    </div>
  );
}