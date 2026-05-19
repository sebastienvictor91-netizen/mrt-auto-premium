import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Car, Search, HandCoins, Globe2, FileSignature, Repeat } from "lucide-react";

const services = [
  { icon: Car, title: "Vente de véhicules d'occasion", desc: "Un stock soigneusement sélectionné de véhicules récents, contrôlés et garantis." },
  { icon: Search, title: "Recherche personnalisée", desc: "Vous avez un modèle précis en tête ? Nous le trouvons pour vous au meilleur prix." },
  { icon: HandCoins, title: "Dépôt-vente", desc: "Confiez-nous votre véhicule. Nous le mettons en valeur et nous occupons de tout." },
  { icon: Globe2, title: "Import-export automobile", desc: "Sourcing sécurisé en France et en Europe : Allemagne, Belgique, Pays-Bas, Italie." },
  { icon: FileSignature, title: "Accompagnement administratif", desc: "Carte grise, quitus fiscal, douanes : nous gérons l'ensemble des démarches." },
  { icon: Repeat, title: "Reprise de véhicule", desc: "Estimation gratuite et rapide de votre voiture, reprise au meilleur prix du marché." },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nos services"
          title="Un accompagnement complet, de A à Z."
          subtitle="De la recherche du véhicule à la remise des clés, MRT Auto Premium s'occupe de tout pour vous offrir une expérience sereine et transparente."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group h-full bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-smooth">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-gradient-petrol transition-smooth">
                  <s.icon size={22} className="text-petrol group-hover:text-white transition-smooth" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
