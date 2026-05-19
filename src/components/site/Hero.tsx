import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, Star } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-petrol text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <MapPin size={13} /> Bouguenais — Nantes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-foreground"
          >
            MRT Auto <span className="text-petrol">Premium</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-xl md:text-2xl text-foreground/80 font-medium"
          >
            Votre spécialiste automobile à Bouguenais et Nantes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Achat, vente et recherche de véhicules d'occasion sélectionnés
            avec sérieux. Un accompagnement transparent, humain et professionnel
            pour trouver la voiture qui vous correspond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="/vehicules"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-petrol text-primary-foreground text-sm font-semibold shadow-petrol hover:shadow-card-hover transition-smooth"
            >
              Voir les véhicules
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/33624275116"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-success text-white text-sm font-semibold shadow-soft hover:opacity-90 transition-smooth"
            >
              <MessageCircle size={18} /> Contacter sur WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-petrol" />
              Société française immatriculée
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-petrol fill-petrol/20" />
              Accompagnement personnalisé
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-border">
            <img
              src={heroCar}
              alt="Showroom MRT Auto Premium — SUV et compactes d'occasion"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 md:-left-8 bg-card rounded-xl shadow-card p-4 flex items-center gap-3 ring-1 ring-border max-w-[260px]"
          >
            <div className="h-11 w-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <ShieldCheck size={20} className="text-petrol" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Véhicules contrôlés</div>
              <div className="text-xs text-muted-foreground">Sélection rigoureuse & transparence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -top-4 -right-2 md:-right-6 bg-card rounded-xl shadow-card px-4 py-3 ring-1 ring-border"
          >
            <div className="text-xs text-muted-foreground">Disponible</div>
            <div className="text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" /> WhatsApp 7j/7
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
