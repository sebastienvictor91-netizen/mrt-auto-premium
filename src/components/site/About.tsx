import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="a-propos" className="relative py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent text-petrol text-xs font-semibold uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-petrol" />
              À propos
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-[1.1] tracking-tight">
              Un garage <span className="text-petrol">humain</span>, sérieux et accessible.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          <Reveal delay={0.1}>
            <p>
              <span className="text-foreground font-medium">MRT Auto Premium</span> accompagne
              ses clients dans l'achat et la vente de véhicules d'occasion avec
              une approche simple : transparence, sérieux et accompagnement
              personnalisé.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Notre objectif est de proposer des véhicules fiables, contrôlés
              et adaptés au budget de chaque client — qu'il s'agisse d'un
              premier achat, d'un véhicule familial ou d'un modèle plus haut
              de gamme.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Fondée par <span className="text-foreground font-medium">Mohanad Mikawi</span>,
              l'entreprise s'appuie sur un réseau européen pour vous trouver
              le bon véhicule au juste prix, et vous accompagne sur toutes les
              démarches : financement, carte grise, reprise de votre ancien
              véhicule.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { k: "10+", v: "Ans d'expérience" },
                { k: "300+", v: "Clients accompagnés" },
                { k: "7j/7", v: "Disponibilité WhatsApp" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl md:text-4xl font-display font-bold text-petrol">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1.5">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
