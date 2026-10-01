"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Bot, PenLine, Globe } from "lucide-react";
import { projects } from "@/lib/data";
import { ExtLink, Reveal, Section } from "./ui";

const fallback = [Bot, PenLine, Globe];
const grads = ["from-sky to-lavender", "from-blush to-lavender", "from-mint to-sky"];

export default function Projects() {
  const reduce = useReducedMotion();
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = fallback[i % 3];
          return (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.article whileHover={reduce ? undefined : { y: -8 }} className="card group flex h-full flex-col !p-0 overflow-hidden">
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${grads[i % 3]}`}>
                  {p.image
                    ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={p.image} alt={`${p.title} preview`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                    : <Icon aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 transition duration-500 group-hover:scale-125" size={56} />}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.description}</p>
                  <dl className="mt-4 space-y-3 text-sm">
                    {([["Problem", p.problem], ["Solution", p.solution], ["My contribution", p.contribution]] as const).map(([k, v]) => (
                      <div key={k}><dt className="font-semibold text-lavender-deep">{k}</dt><dd className="text-muted">{v}</dd></div>
                    ))}
                  </dl>
                  <ul className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                  <div className="mt-auto flex gap-2 pt-6">
                    <ExtLink href={p.github}><Github size={15} />GitHub</ExtLink>
                    <ExtLink href={p.demo} className="btn-primary"><ExternalLink size={15} />Live demo</ExtLink>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
