"use client";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/data";
import { ExtLink, Reveal, Section } from "./ui";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <ol className="relative ml-3 space-y-6 border-l-2 border-lavender-deep/30 pl-8">
        {education.map((e, i) => (
          <Reveal key={e.qualification} delay={i * 0.1} className="relative">
            <span aria-hidden className="absolute -left-[45px] top-5 grid h-7 w-7 place-items-center rounded-full bg-lavender text-lavender-deep"><GraduationCap size={14} /></span>
            <li className="card list-none">
              <p className="text-xs font-semibold tracking-widest text-lavender-deep">{e.year}</p>
              <h3 className="font-display text-xl font-semibold">{e.qualification}</h3>
              <p className="text-sm font-medium">{e.institution}</p>
              {e.text && <p className="mt-2 text-sm text-muted">{e.text}</p>}
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications">
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <div className="card flex items-center gap-4 bg-gradient-to-br from-white/70 to-mint/70">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white shadow-soft"><Award className="text-lavender-deep" /></span>
              <div><h3 className="font-display text-lg font-semibold leading-snug">{c.name}</h3><p className="text-sm text-muted">{c.issuer}</p><ExtLink href={c.url} className="btn-soft mt-3 !py-1.5"><ExternalLink size={14} />View certificate</ExtLink></div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
