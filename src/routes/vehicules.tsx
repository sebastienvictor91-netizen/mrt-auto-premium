import { createFileRoute } from "@tanstack/react-router";
import { Vehicles } from "@/components/site/Vehicles";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/vehicules")({
  head: () => ({
    meta: [
      { title: "Véhicules disponibles — MRT Auto Premium" },
      { name: "description", content: "Découvrez notre stock de véhicules d'occasion à Montbert / Nantes : Peugeot 3008, 2008, Citroën C4, C3 Aircross, Renault Captur, Volkswagen Golf, Audi A3, Mercedes Classe A." },
      { property: "og:title", content: "Véhicules disponibles — MRT Auto Premium" },
      { property: "og:description", content: "SUV familiaux, compactes et premium d'occasion, contrôlés et préparés." },
      { property: "og:url", content: "/vehicules" },
    ],
    links: [{ rel: "canonical", href: "/vehicules" }],
  }),
  component: VehiclesPage,
});

function VehiclesPage() {
  return (
    <>
      <header className="pt-32 md:pt-36 pb-6 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent text-petrol text-xs font-semibold uppercase tracking-wide">
            Stock
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.05] tracking-tight">
            Nos <span className="text-petrol">véhicules</span> disponibles
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
            Sélection actualisée. D'autres modèles sont disponibles sur
            commande grâce à notre réseau européen.
          </p>
        </div>
      </header>
      <Vehicles />
      <ContactForm />
    </>
  );
}
