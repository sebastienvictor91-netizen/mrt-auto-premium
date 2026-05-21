import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-lg bg-gradient-petrol flex items-center justify-center">
              <span className="text-[11px] font-bold tracking-wider text-primary-foreground">MRT</span>
            </div>
            <div>
              <div className="font-display font-semibold text-foreground">MRT Auto Premium</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Spécialiste automobile</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Votre spécialiste de la vente, importation et recherche
            personnalisée de véhicules d'occasion à Bouguenais et Nantes.
          </p>
          <a
            href="https://wa.me/33624275116"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-success text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-soft hover:opacity-90 transition-smooth"
          >
            <MessageCircle size={16} /> Discuter sur WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5 font-semibold">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-petrol text-foreground transition-colors">Accueil</a></li>
            <li><a href="/vehicules" className="hover:text-petrol text-foreground transition-colors">Véhicules</a></li>
            <li><a href="/services" className="hover:text-petrol text-foreground transition-colors">Services</a></li>
            <li><a href="/a-propos" className="hover:text-petrol text-foreground transition-colors">À propos</a></li>
            <li><a href="/contact" className="hover:text-petrol text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5 font-semibold">Contact</h4>
          <ul className="space-y-3.5 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-petrol" /> <span className="text-foreground">34A Rue de Bellevue<br />44340 Bouguenais</span></li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-petrol" /> <a href="tel:+33624275116" className="text-foreground hover:text-petrol">+33 6 24 27 51 16</a></li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-petrol" /> <a href="mailto:contact@mrtautopremium.fr" className="text-foreground hover:text-petrol break-all">contact@mrtautopremium.fr</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5 font-semibold">Informations légales</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><span className="text-foreground font-medium">MRT AUTO PREMIUM</span></li>
            <li>Dirigeant : Mohanad Mikawi</li>
            <li>SIREN : 104 303 771</li>
            <li>TVA : FR92 104303771</li>
            <li>Société française immatriculée</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MRT Auto Premium — Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground">
            Achat · Vente · Importation · Dépôt-vente · Reprise
          </p>
        </div>
      </div>
    </footer>
  );
}
