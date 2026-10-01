"use client";
import { Download, Eye, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal, Section } from "./ui";

export default function CV() {
  return (
    <Section id="cv" eyebrow="CV" title="My Curriculum Vitae">
      <Reveal>
        <div className="card flex flex-col items-center gap-5 bg-gradient-to-br from-sky/60 to-lavender/60 text-center">
          <FileText size={44} className="text-lavender-deep" />
          <p className="max-w-lg text-muted">A full overview of my education, experience, certifications and skills.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={profile.cv} download className="btn-primary"><Download size={16} />Download My CV</a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-soft"><Eye size={16} />View My CV</a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
