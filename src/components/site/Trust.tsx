import { Reveal } from "./Reveal";
import { ShieldCheck, MapPin, MessageCircle, BadgeCheck, FileCheck2, UserCheck, Wrench } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Société française", value: "Immatriculée & déclarée" },
  { icon: FileCheck2, label: "SIREN", value: "104 303 771" },
  { icon: BadgeCheck, label: "TVA intracommunautaire", value: "FR92 104303771" },
  { icon: MapPin, label: "Localisation", value: "Montbert — Nantes" },
  { icon: MessageCircle, label: "Disponibilité", value: "WhatsApp 7j/7" },
  { icon: UserCheck, label: "Accompagnement", value: "Personnalisé & humain" },
  { icon: Wrench, label: "Véhicules contrôlés", value: "Sélection rigoureuse" },
];

export function Trust() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent text-petrol text-xs font-semibold uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-petrol" />
            Confiance & transparence
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold max-w-3xl leading-[1.1] tracking-tight">
            Une entreprise française que vous pouvez vérifier.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
            Toutes nos informations légales sont publiques et vérifiables. C'est
            notre engagement de transparence envers chaque client.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {badges.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.04}>
              <div className="h-full bg-card border border-border rounded-xl p-5 flex items-start gap-4 shadow-soft hover:shadow-card transition-smooth">
                <div className="h-11 w-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <b.icon size={20} className="text-petrol" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] tracking-wider uppercase text-muted-foreground font-medium mb-1">
                    {b.label}
                  </div>
                  <div className="text-sm font-display font-semibold text-foreground">{b.value}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
