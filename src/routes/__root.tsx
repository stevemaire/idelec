import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
        <p className="font-display text-7xl md:text-8xl font-extrabold text-energy">404</p>
        <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold text-brand-dark">Page introuvable</h1>
        <p className="mt-4 text-muted-foreground">
          Oups... la page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="energy" size="lg">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IDELEC - Électricité, pompe à chaleur, climatisation & sanitaire en Alsace" },
      { name: "description", content: "IDELEC SARL, artisan certifié RGE QUALIPAC et IRVE à Schaffhouse-près-Seltz (67). Électricité, pompe à chaleur, climatisation et sanitaire." },
      { name: "author", content: "IDELEC SARL" },
      { property: "og:title", content: "IDELEC - Électricien RGE QUALIPAC et IRVE en Alsace" },
      { property: "og:description", content: "Artisan électricien RGE QUALIPAC et IRVE dans le Bas-Rhin. Installations techniques pour l'habitat individuel, neuf et rénovation." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDELEC" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
