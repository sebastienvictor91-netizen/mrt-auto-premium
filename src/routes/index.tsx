import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Trust } from "@/components/site/Trust";
import { About } from "@/components/site/About";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MRT AUTO PREMIUM — Concession premium à Nantes" },
      { name: "description", content: "Importation, vente, dépôt-vente et recherche personnalisée de véhicules premium : BMW, Audi RS, Mercedes AMG, Porsche, Range Rover, Lamborghini." },
      { property: "og:title", content: "MRT AUTO PREMIUM — L'excellence automobile" },
      { property: "og:description", content: "Importation, vente et recherche de véhicules d'exception à Nantes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Trust />
      <About />
      <ContactForm />
    </>
  );
}
