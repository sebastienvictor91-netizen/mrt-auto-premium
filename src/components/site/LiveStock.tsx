import { useEffect, useState } from "react";

import { Calendar, Gauge, Fuel, Cog, MessageCircle } from "lucide-react";

import { supabase } from "@/lib/supabase";

import { Reveal } from "./Reveal";

import { SectionHeading } from "./SectionHeading";



type VehicleStatus = "available" | "reserved" | "sold";



type Vehicle = {

  id: string;

  brand: string;

  model: string;

  year: number | null;

  mileage: string | null;

  fuel: string | null;

  gearbox: string | null;

  price: string | null;

  image_url: string | null;

  status: VehicleStatus;

};



const statusLabel: Record<VehicleStatus, string> = {

  available: "Disponible",

  reserved: "Réservé",

  sold: "Vendu",

};



export function LiveStock() {

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);



  useEffect(() => {

    async function loadVehicles() {

      const { data, error } = await supabase

        .from("vehicles")

        .select("*")

        .in("status", ["available", "reserved", "sold"])

        .order("created_at", { ascending: false });



      if (error) {

        console.error(error.message);

        return;

      }



      setVehicles((data || []) as Vehicle[]);

    }



    loadVehicles();

  }, []);



  return (

    <section className="relative bg-slate-950 py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <SectionHeading

          eyebrow="Stock en direct"

          title="Nos véhicules disponibles en temps réel."

          subtitle="Les véhicules ajoutés directement depuis l’espace administrateur MRT Auto Premium."

        />



        {vehicles.length === 0 ? (

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

            <p className="text-xl font-semibold text-white">

              Aucun véhicule publié pour le moment.

            </p>



            <p className="mt-2 text-sm text-white/60">

              Le stock sera mis à jour prochainement.

            </p>

          </div>

        ) : (

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {vehicles.map((car, i) => {

              const whatsappText = `Bonjour, je suis intéressé(e) par le véhicule ${car.brand} ${car.model}. Pouvez-vous me communiquer les informations et disponibilités ?`;



              return (

                <Reveal key={car.id} delay={(i % 4) * 0.06}>

                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">

                    <div className="relative aspect-[4/3] overflow-hidden">

                      {car.image_url ? (

                        <img

                          src={car.image_url}

                          alt={`${car.brand} ${car.model}`}

                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"

                        />

                      ) : (

                        <div className="flex h-full items-center justify-center bg-slate-800 text-white/40">

                          Photo à venir

                        </div>

                      )}



                      <div className="absolute left-3 top-3 rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase text-white">

                        {statusLabel[car.status]}

                      </div>



                      {car.status === "sold" && (

                        <div className="absolute inset-0 flex items-center justify-center bg-black/60">

                          <span className="rounded-full bg-white px-5 py-2 text-lg font-bold uppercase text-black">

                            Vendu

                          </span>

                        </div>

                      )}

                    </div>



                    <div className="flex flex-1 flex-col p-5 text-white">

                      <div className="text-xs uppercase tracking-widest text-cyan-400">

                        {car.brand}

                      </div>



                      <h3 className="mt-1 text-lg font-bold">

                        {car.model}

                      </h3>



                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">

                        <div className="flex items-center gap-2">

                          <Calendar size={14} />

                          {car.year || "NC"}

                        </div>



                        <div className="flex items-center gap-2">

                          <Gauge size={14} />

                          {car.mileage || "NC"}

                        </div>



                        <div className="flex items-center gap-2">

                          <Fuel size={14} />

                          {car.fuel || "NC"}

                        </div>



                        <div className="flex items-center gap-2">

                          <Cog size={14} />

                          {car.gearbox || "NC"}

                        </div>

                      </div>



                      <div className="mt-4 text-xl font-bold text-cyan-400">

                        {car.price || "Prix sur demande"}

                      </div>



                      <a

                        href={`https://wa.me/33624275116?text=${encodeURIComponent(

                          whatsappText

                        )}`}

                        target="_blank"

                        rel="noreferrer"

                        className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-500"

                      >

                        <MessageCircle size={16} />

                        Demander ce véhicule

                      </a>

                    </div>

                  </article>

                </Reveal>

              );

            })}

          </div>

        )}

      </div>

    </section>

  );

}