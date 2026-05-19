import { useState } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Send, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Votre nom est requis").max(100),
  phone: z.string().trim().min(6, "Téléphone requis").max(30),
  vehicle: z.string().trim().max(200).optional().or(z.literal("")),
  budget: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      vehicle: String(fd.get("vehicle") || ""),
      budget: String(fd.get("budget") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(
      `Bonjour MRT Auto Premium,\n\nNom : ${data.name}\nTéléphone : ${data.phone}\nVéhicule recherché : ${data.vehicle || "—"}\nBudget : ${data.budget || "—"}\n\n${data.message || ""}`,
    );
    window.open(`https://wa.me/33624275116?text=${text}`, "_blank", "noopener");
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  const labelCls = "block text-xs font-semibold text-foreground mb-1.5";
  const inputCls =
    "w-full bg-background border border-border focus:border-petrol focus:ring-2 focus:ring-accent rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/70 text-sm outline-none transition-smooth";

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre projet automobile."
            subtitle="Remplissez le formulaire ou contactez-nous directement. Mohanad vous répond personnellement, généralement sous 24h."
          />

          <div className="mt-8 space-y-3">
            <a href="tel:+33624275116" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-soft hover:shadow-card transition-smooth">
              <div className="h-11 w-11 rounded-lg bg-accent flex items-center justify-center"><Phone size={18} className="text-petrol" /></div>
              <div><div className="text-xs text-muted-foreground">Téléphone</div><div className="text-sm font-semibold text-foreground">+33 6 24 27 51 16</div></div>
            </a>
            <a href="https://wa.me/33624275116" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-success text-white shadow-soft hover:opacity-95 transition-smooth">
              <div className="h-11 w-11 rounded-lg bg-white/20 flex items-center justify-center"><MessageCircle size={18} /></div>
              <div><div className="text-xs opacity-90">WhatsApp — réponse rapide</div><div className="text-sm font-semibold">Discuter maintenant</div></div>
            </a>
            <a href="mailto:mikawimoh88@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-soft hover:shadow-card transition-smooth">
              <div className="h-11 w-11 rounded-lg bg-accent flex items-center justify-center"><Mail size={18} className="text-petrol" /></div>
              <div className="min-w-0"><div className="text-xs text-muted-foreground">Email</div><div className="text-sm font-semibold text-foreground truncate">mikawimoh88@gmail.com</div></div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-soft">
              <div className="h-11 w-11 rounded-lg bg-accent flex items-center justify-center"><MapPin size={18} className="text-petrol" /></div>
              <div><div className="text-xs text-muted-foreground">Adresse</div><div className="text-sm font-semibold text-foreground">34A Rue de Bellevue, 44340 Bouguenais</div></div>
            </div>
          </div>
        </div>

        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Nom complet *</label>
                <input name="name" placeholder="Jean Dupont" className={inputCls} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className={labelCls}>Téléphone *</label>
                <input name="phone" placeholder="06 00 00 00 00" className={inputCls} />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className={labelCls}>Véhicule recherché</label>
                <input name="vehicle" placeholder="Peugeot 3008, SUV familial…" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Budget estimé</label>
                <input name="budget" placeholder="15 000 — 20 000 €" className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Message</label>
              <textarea name="message" rows={4} placeholder="Décrivez votre projet, vos critères, vos questions…" className={`${inputCls} resize-none`} />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted-foreground">Vos données restent strictement confidentielles.</p>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-petrol text-primary-foreground text-sm font-semibold shadow-petrol hover:shadow-card-hover transition-smooth"
              >
                Envoyer la demande
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {status === "success" && (
              <div className="text-sm text-success font-medium pt-1">✓ Demande prête — votre WhatsApp s'ouvre dans un nouvel onglet.</div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
