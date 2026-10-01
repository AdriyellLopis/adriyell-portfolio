"use client";
import { skills } from "@/lib/data";
import { Reveal, Section } from "./ui";

const tints = ["bg-sky/60", "bg-blush/70", "bg-lavender/70", "bg-mint/80"];
export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Skills & Capabilities">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className={`card h-full ${tints[i]}`}>
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="rounded-full bg-white/80 px-3 py-1 text-sm">{s}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
