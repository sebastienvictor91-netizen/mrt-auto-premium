import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-light text-chrome">404</h1>

        <h2 className="mt-4 text-xl font-display text-foreground">
          Page introuvable
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-chrome px-6 py-3 text-xs tracking-[0.3em] uppercase text-primary-foreground"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display text-foreground">
          Une erreur est survenue
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Veuillez rafraîchir la page.
        </p>

        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-gradient-chrome px-6 py-3 text-xs tracking-[0.3em] uppercase text-primary-foreground"
          >
            Réessayer
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title:
            "MRT AUTO PREMIUM — Vente, importation et recherche de véhicules d'exception",
        },

        {
          name: "description",
          content:
            "MRT AUTO PREMIUM — Concession premium à Nantes. Vente, importation européenne, dépôt-vente et recherche personnalisée de véhicules d'exception.",
        },

        {
          name: "author",
          content: "MRT AUTO PREMIUM",
        },

        {
          name: "theme-color",
          content: "#0a0a0d",
        },

        {
          property: "og:site_name",
          content: "MRT AUTO PREMIUM",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:title",
          content:
            "MRT AUTO PREMIUM — Vente, importation et recherche de véhicules d'exception",
        },

        {
          property: "og:description",
          content:
            "MRT AUTO PREMIUM — Concession premium à Nantes. Vente, importation européenne, dépôt-vente et recherche personnalisée de véhicules d'exception.",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content:
            "MRT AUTO PREMIUM — Vente, importation et recherche de véhicules d'exception",
        },

        {
          name: "twitter:description",
          content:
            "MRT AUTO PREMIUM — Concession premium à Nantes. Vente, importation européenne, dépôt-vente et recherche personnalisée de véhicules d'exception.",
        },

        {
          property: "og:image",
          content:
            "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7fbebc26-087c-4ab5-9928-115e1b0ef5c0/id-preview-8e7ac299--ee320b9e-e3e8-481a-895a-551d2f217e26.lovable.app-1779094289769.png",
        },

        {
          name: "twitter:image",
          content:
            "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7fbebc26-087c-4ab5-9928-115e1b0ef5c0/id-preview-8e7ac299--ee320b9e-e3e8-481a-895a-551d2f217e26.lovable.app-1779094289769.png",
        },
      ],

      links: [
        { rel: "stylesheet", href: appCss },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/favicon.png?v=30",
        },

        {
          rel: "shortcut icon",
          href: "/favicon.png?v=30",
        },

        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png?v=30",
        },
      ],

      scripts: [
        {
          type: "application/ld+json",

          children: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "AutomotiveBusiness",

            name: "MRT AUTO PREMIUM",

            founder: "Mohanad Mikawi",

            telephone: "+33746271955",

            email: "contact@mrtautopremium.fr",

            vatID: "FR92104303771",

            taxID: "104303771",

            address: {
              "@type": "PostalAddress",

              streetAddress: "16 Rue du Vivier, ZA de la Raye",

              postalCode: "44340",

              addressLocality: "Montbert",

              addressCountry: "FR",
            },

            areaServed: "Europe",
          }),
        },
      ],
    }),

    shellComponent: RootShell,

    component: RootComponent,

    notFoundComponent: NotFoundComponent,

    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
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
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppFloat />
    </QueryClientProvider>
  );
}