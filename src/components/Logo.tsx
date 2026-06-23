import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/idelec.jpg";

// Logo IDELEC = vraie image locale (src/assets/idelec.jpg), importée par Vite.
// variant "dark"  : image telle quelle - pour fond clair (header)
// variant "light" : image dans un cadre blanc - pour fond foncé (footer)
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className="inline-flex items-center"
      aria-label="IDELEC - accueil"
      onClick={(e) => {
        // Déjà sur l'accueil → on remonte en haut en douceur (sans re-naviguer).
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <span
        className={
          variant === "light"
            ? "inline-block rounded-md bg-white p-1.5 shadow-sm"
            : "inline-block"
        }
      >
        <img
          src={logoUrl}
          alt="Logo IDELEC"
          className="h-11 md:h-12 w-auto block"
          width={225}
          height={85}
        />
      </span>
    </Link>
  );
}
