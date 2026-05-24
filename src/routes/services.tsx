import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { Trust } from "@/components/site/Trust";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MRT Auto Premium" },
      { name: "description", content: "Vente, recherche personnalisée, dépôt-vente, import-export, accompagnement administratif et reprise de véhicule à Montbert / Nantes." },
      { property: "og:title", content: "Nos services — MRT Auto Premium" },
      { property: "og:description", content: "Un accompagnement complet, de A à Z, pour l'achat ou la vente de votre véhicule." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <header className="pt-32 md:pt-36 pb-6 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent text-petrol text-xs font-semibold uppercase tracking-wide">
            Expertises
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.05] tracking-tight">
            Nos <span className="text-petrol">services</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
            Six prestations pensées pour vous simplifier l'achat ou la vente
            d'un véhicule en toute sérénité.
          </p>
        </div>
      </header>
      <Services />
      <Trust />
      <ContactForm />
    </>
  );
}
