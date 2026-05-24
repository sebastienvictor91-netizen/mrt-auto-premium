import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Trust } from "@/components/site/Trust";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — MRT Auto Premium" },
      { name: "description", content: "MRT Auto Premium, spécialiste automobile à Montbert / Nantes. Fondée par Mohanad Mikawi, l'entreprise accompagne ses clients avec transparence et sérieux." },
      { property: "og:title", content: "À propos — MRT Auto Premium" },
      { property: "og:description", content: "Un garage humain, sérieux et accessible." },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <header className="pt-32 md:pt-36 pb-6 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent text-petrol text-xs font-semibold uppercase tracking-wide">
            La maison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.05] tracking-tight">
            À <span className="text-petrol">propos</span>
          </h1>
        </div>
      </header>
      <About />
      <Trust />
    </>
  );
}
