"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Network, Server, Sparkles, type LucideIcon } from "lucide-react";
import { about, focus, journey } from "@/lib/data";
import { Reveal, Section } from "./ui";

const icons: Record<string, LucideIcon> = { Network, Server, Sparkles };

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-5 lg:grid-cols-3">
        {about.map((p, i) => (
          <Reveal key={i} delay={i * 0.1}><div className="card h-full text-muted">{p}</div></Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CareerFocus() {
  const reduce = useReducedMotion();
  return (
    <Section id="focus" eyebrow="Career Focus" title="Where I'm Building My Career">
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr]">
        {focus.map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <Reveal key={f.title} delay={i * 0.1}>
              <motion.div whileHover={reduce ? undefined : { y: -6 }}
                className={`card h-full ${f.primary ? "bg-gradient-to-br from-sky/80 to-lavender/80 ring-2 ring-lavender-deep/40" : ""}`}>
                <Icon className="text-lavender-deep" size={f.primary ? 36 : 28} />
                {f.primary && <span className="ml-3 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white align-top">Primary focus</span>}
                {!f.primary && i === 2 && <span className="ml-3 rounded-full bg-blush px-3 py-1 text-xs font-semibold align-top">Exploring</span>}
                <h3 className={`mt-4 font-display font-semibold ${f.primary ? "text-3xl" : "text-xl"}`}>{f.title}</h3>
                <p className="mt-2 text-muted">{f.text}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">My career story</p>
        <ol className="flex flex-wrap items-center gap-2">
          {journey.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className={`rounded-2xl px-4 py-2 text-sm font-medium shadow-soft ${i === 3 ? "bg-lavender" : i === journey.length - 1 ? "bg-mint" : "bg-white/80"}`}>{s}</span>
              {i < journey.length - 1 && <ChevronRight size={16} className="text-lavender-deep" aria-hidden />}
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
