"use client";
import { experience } from "@/lib/data";
import { Reveal, Section } from "./ui";
import { motion, useReducedMotion } from "framer-motion";

export default function Experience() {
  const reduce = useReducedMotion();
  return (
    <Section id="experience" eyebrow="Experience" title="Work Experience">
      <div className="relative ml-3 border-l-2 border-lavender-deep/30 pl-8">
        <motion.div aria-hidden className="absolute -left-[2px] top-0 w-0.5 origin-top bg-lavender-deep" initial={reduce ? false : { height: 0 }}
          whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 0.1} className="relative mb-10 last:mb-0">
            <span aria-hidden className={`absolute -left-[41px] top-6 h-4 w-4 rounded-full border-4 border-white ${e.current ? "bg-lavender-deep" : "bg-sky-deep"}`} />
            <div className="card">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                {e.current && <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold tracking-widest">CURRENT</span>}
              </div>
              <p className="mt-1 text-sm font-semibold text-lavender-deep">{e.org} · {e.period}</p>
              <p className="mt-3 text-muted">{e.text}</p>
              <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                {e.points.map((p) => <li key={p} className="flex gap-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-deep" />{p}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
