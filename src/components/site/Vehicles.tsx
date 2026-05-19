import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Calendar, Gauge, Fuel, Cog, MessageCircle } from "lucide-react";
import peugeot3008 from "@/assets/car-bmw.jpg";
import peugeot2008 from "@/assets/car-audi.jpg";
import citroenC4 from "@/assets/car-mercedes.jpg";
import citroenC3 from "@/assets/car-porsche.jpg";
import renaultCaptur from "@/assets/car-range.jpg";
import vwGolf from "@/assets/car-lambo.jpg";
import audiA3 from "@/assets/car-audi-a3.jpg";
import mercedesA from "@/assets/car-mercedes-a.jpg";

const cars = [
  {
    img: peugeot3008,
    brand: "Peugeot",
    model: "3008 Allure",
    year: 2021,
    km: "62 400",
    fuel: "Diesel",
    gearbox: "Automatique",
    tag: "SUV familial",
    offerBadge: "-10%",
    offerTitle: "Sous la cote",
    offerSubtitle: "Tarif négocié",
    whatsappText:
      "Bonjour, je suis intéressé(e) par le Peugeot 3008 Allure. Pouvez-vous me communiquer le tarif négocié et les conditions disponibles ?",
  },
  {
    img: peugeot2008,
    brand: "Peugeot",
    model: "2008 GT Line",
    year: 2020,
    km: "58 100",
    fuel: "Essence",
    gearbox: "Automatique",
    tag: "SUV compact",
    offerBadge: "Prix en baisse",
    offerTitle: "Offre reprise",
    offerSubtitle: "Voir le tarif",
    whatsappText:
      "Bonjour, je suis intéressé(e) par le Peugeot 2008 GT Line. Pouvez-vous me transmettre le tarif actuel et l'offre disponible ?",
  },
  {
    img: citroenC4,
    brand: "Citroën",
    model: "C4 Shine",
    year: 2022,
    km: "34 800",
    fuel: "Diesel",
    gearbox: "Automatique",
    tag: "Berline",
    offerBadge: "-8%",
    offerTitle: "Prix ajusté",
    offerSubtitle: "Selon marché",
    whatsappText:
      "Bonjour, je suis intéressé(e) par la Citroën C4 Shine. Pouvez-vous me communiquer le prix ajusté et les informations du véhicule ?",
  },
  {
    img: citroenC3,
    brand: "Citroën",
    model: "C3 Aircross Feel",
    year: 2021,
    km: "47 200",
    fuel: "Essence",
    gearbox: "Manuelle",
    tag: "SUV urbain",
    offerBadge: "Bon plan",
    offerTitle: "Prix en baisse",
    offerSubtitle: "Demander l'offre",
    whatsappText:
      "Bonjour, je suis intéressé(e) par la Citroën C3 Aircross Feel. Pouvez-vous me communiquer le prix en baisse et les disponibilités ?",
  },
  {
    img: renaultCaptur,
    brand: "Renault",
    model: "Captur Intens",
    year: 2022,
    km: "29 500",
    fuel: "Essence",
    gearbox: "Automatique",
    tag: "SUV urbain",
    offerBadge: "-12%",
    offerTitle: "Offre négociée",
    offerSubtitle: "Obtenir le tarif",
    whatsappText:
      "Bonjour, je suis intéressé(e) par le Renault Captur Intens. Pouvez-vous me communiquer l'offre négociée disponible ?",
  },
  {
    img: vwGolf,
    brand: "Volkswagen",
    model: "Golf 8 Life",
    year: 2021,
    km: "51 700",
    fuel: "Diesel",
    gearbox: "Automatique",
    tag: "Compacte",
    offerBadge: "Arrivage",
    offerTitle: "Tarif sur demande",
    offerSubtitle: "Stock limité",
    whatsappText:
      "Bonjour, je suis intéressé(e) par la Volkswagen Golf 8 Life. Pouvez-vous me communiquer le tarif et les conditions disponibles ?",
  },
  {
    img: audiA3,
    brand: "Audi",
    model: "A3 Sportback S-Line",
    year: 2020,
    km: "68 300",
    fuel: "Diesel",
    gearbox: "Automatique",
    tag: "Premium",
    offerBadge: "-15%",
    offerTitle: "Prix catalogue",
    offerSubtitle: "Offre disponible",
    whatsappText:
      "Bonjour, je suis intéressé(e) par l'Audi A3 Sportback S-Line. Pouvez-vous me communiquer l'offre disponible par rapport au prix catalogue ?",
  },
  {
    img: mercedesA,
    brand: "Mercedes",
    model: "Classe A 180 Progressive",
    year: 2021,
    km: "44 600",
    fuel: "Essence",
    gearbox: "Automatique",
    tag: "Premium",
    offerBadge: "Premium",
    offerTitle: "Prix confidentiel",
    offerSubtitle: "Sur demande",
    whatsappText:
      "Bonjour, je suis intéressé(e) par la Mercedes Classe A 180 Progressive. Pouvez-vous me communiquer le prix confidentiel et les disponibilités ?",
  },
];

export function Vehicles() {
  return (
    <section id="vehicules" className="relative py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Notre stock"
          title="Véhicules disponibles en concession."
          subtitle="Une sélection actualisée régulièrement, contrôlée et préparée. Tous nos véhicules sont visibles à Bouguenais sur rendez-vous."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((c, i) => (
            <Reveal key={c.model} delay={(i % 4) * 0.06}>
              <article className="group h-full flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-smooth">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={c.img}
                    alt={`${c.brand} ${c.model} d'occasion chez MRT Auto Premium`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />

                  <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase bg-background/95 backdrop-blur px-2.5 py-1 rounded-full text-petrol">
                    {c.tag}
                  </span>

                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase bg-petrol text-white px-2.5 py-1 rounded-full shadow-soft">
                    {c.offerBadge}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="text-[11px] tracking-wider uppercase text-muted-foreground font-medium">
                      {c.brand}
                    </div>

                    <div className="text-right whitespace-nowrap">
                      <div className="text-sm font-display font-bold text-petrol">
                        {c.offerTitle}
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        {c.offerSubtitle}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base font-display font-semibold text-foreground leading-snug">
                    {c.model}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-petrol" /> {c.year}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Gauge size={13} className="text-petrol" /> {c.km} km
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel size={13} className="text-petrol" /> {c.fuel}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Cog size={13} className="text-petrol" /> {c.gearbox}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/33624275116?text=${encodeURIComponent(
                      c.whatsappText
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-secondary text-foreground text-sm font-semibold group-hover:bg-gradient-petrol group-hover:text-white transition-smooth"
                  >
                    <MessageCircle size={14} /> Obtenir le tarif
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}