import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MRT Auto Premium" },
      { name: "description", content: "Contactez MRT Auto Premium à Monbert / Nantes. Téléphone, WhatsApp, email — réponse personnalisée et rapide." },
      { property: "og:title", content: "Contact — MRT Auto Premium" },
      { property: "og:description", content: "Parlons de votre projet automobile." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <header className="pt-32 md:pt-36 pb-6 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent text-petrol text-xs font-semibold uppercase tracking-wide">
            Échangeons
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.05] tracking-tight">
            <span className="text-petrol">Contact</span>
          </h1>
        </div>
      </header>
      <ContactForm />
    </>
  );
}
