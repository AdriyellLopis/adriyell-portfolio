"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, isPlaceholder } from "@/lib/data";

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender-deep">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

// Renders a link, or a muted "coming soon" label while the URL is still a [PLACEHOLDER].
export function ExtLink({ href, children, className = "btn-soft" }: { href: string; children: React.ReactNode; className?: string }) {
  if (isPlaceholder(href)) return <span className={`${className} cursor-not-allowed opacity-50`} title="Link coming soon" aria-disabled="true">{children}</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

export function SocialLinks({ size = 20 }: { size?: number }) {
  const base = "grid h-11 w-11 place-items-center rounded-full border border-lavender-deep/30 bg-white/70 transition hover:-translate-y-0.5 hover:bg-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-lavender-deep";
  const off = "cursor-not-allowed opacity-50";
  return (
    <div className="flex gap-3">
      {[["LinkedIn", profile.linkedin, Linkedin], ["GitHub", profile.github, Github]].map(([label, href, Icon]: any) =>
        isPlaceholder(href) ? (
          <span key={label} className={`${base} ${off}`} title={`${label} link coming soon`} aria-label={`${label} (link coming soon)`}><Icon size={size} /></span>
        ) : (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={base}><Icon size={size} /></a>
        ))}
      <a href={`mailto:${profile.email}`} aria-label="Email" className={base}><Mail size={size} /></a>
    </div>
  );
}
