import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

// Carte Google Maps à chargement différé : l'iframe (lourde, ~1 Mo de scripts
// Google) n'est injectée que lorsque la carte approche de l'écran. Avant ça,
// on affiche un simple fond avec un repère - la page se charge donc beaucoup
// plus vite.
export function LazyMap({ src, title, className }: { src: string; title: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let obs: IntersectionObserver | undefined;
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => start();
    const cleanup = () => {
      obs?.disconnect();
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
    const start = () => {
      cleanup();
      setLoad(true);
    };

    // Chargement dès que la carte approche de l'écran (~400px avant),
    // avec deux filets de sécurité : premier défilement, ou 3s après
    // l'ouverture de la page (navigateurs sans IntersectionObserver fiable).
    if ("IntersectionObserver" in window) {
      obs = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) start();
        },
        { rootMargin: "400px" },
      );
      obs.observe(el);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    timer = setTimeout(start, 3000);

    return cleanup;
  }, []);

  return (
    <div ref={ref} className={className}>
      {load ? (
        <iframe
          title={title}
          src={src}
          className="block h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-secondary">
          <span className="flex flex-col items-center gap-2 text-muted-foreground">
            <MapPin className="h-8 w-8 text-energy" />
            <span className="text-sm">Chargement de la carte...</span>
          </span>
        </div>
      )}
    </div>
  );
}
