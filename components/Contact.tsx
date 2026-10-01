"use client";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { ExtLink, Reveal, Section } from "./ui";

type F = { name: string; email: string; subject: string; message: string };
const empty: F = { name: "", email: "", subject: "", message: "" };

function validate(f: F) {
  const e: Partial<F> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "Please add a subject.";
  if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

export default function Contact() {
  const [f, setF] = useState<F>(empty);
  const [errors, setErrors] = useState<Partial<F>>({});
  const [sent, setSent] = useState(false);

  // No backend needed: on success the visitor's email app opens with the message pre-filled.
  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${body}`;
    setSent(true); setF(empty);
  };

  const field = (k: keyof F, label: string, type = "text") => (
    <div>
      <label htmlFor={k} className="mb-1 block text-sm font-medium">{label}</label>
      {k === "message"
        ? <textarea id={k} rows={5} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} className="w-full rounded-2xl border border-lavender-deep/30 bg-white/80 px-4 py-3 focus:outline-lavender-deep" />
        : <input id={k} type={type} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} className="w-full rounded-2xl border border-lavender-deep/30 bg-white/80 px-4 py-3 focus:outline-lavender-deep" />}
      <p id={`${k}-err`} role="alert" className="mt-1 min-h-[1rem] text-xs text-red-700">{errors[k]}</p>
    </div>
  );

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Connect">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-lg text-muted">I am open to opportunities, technology projects, collaboration and connecting with professionals in the IT industry.</p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary"><Mail size={16} />{profile.email}</a>
            <ExtLink href={profile.linkedin}><Linkedin size={16} />LinkedIn</ExtLink>
            <ExtLink href={profile.github}><Github size={16} />GitHub</ExtLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="card space-y-1">
            {field("name", "Name")}{field("email", "Email", "email")}{field("subject", "Subject")}{field("message", "Message")}
            <button type="submit" className="btn-primary">Send message</button>
            {sent && <p role="status" className="pt-2 text-sm text-lavender-deep">Thank you! Your email app should open with your message ready to send.</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
