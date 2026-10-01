"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const link = (id: string, label: string, mobile = false) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? "page" : undefined}
      className={`rounded-full px-3 py-1.5 text-sm transition ${mobile ? "block text-base" : ""} ${active === id ? "bg-lavender font-semibold" : "text-muted hover:bg-white/70"}`}>
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-cream/70 backdrop-blur-lg">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold">Adriyell Lopis</a>
        <div className="hidden items-center gap-0.5 xl:flex">
          {nav.map(([id, l]) => link(id, l))}
          <a href={profile.cv} download className="btn-primary ml-2 !py-1.5"><Download size={14} />CV</a>
        </div>
        <button className="grid h-10 w-10 place-items-center xl:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="relative block h-4 w-6">
            <motion.span className="absolute left-0 h-0.5 w-6 rounded bg-ink" animate={open ? { top: 7, rotate: 45 } : { top: 0, rotate: 0 }} />
            <motion.span className="absolute left-0 top-[7px] h-0.5 w-6 rounded bg-ink" animate={{ opacity: open ? 0 : 1 }} />
            <motion.span className="absolute left-0 h-0.5 w-6 rounded bg-ink" animate={open ? { top: 7, rotate: -45 } : { top: 14, rotate: 0 }} />
          </span>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden xl:hidden">
            <div className="flex flex-col gap-1 px-5 pb-5">
              {nav.map(([id, l]) => link(id, l, true))}
              <a href={profile.cv} download className="btn-primary mt-2 justify-center"><Download size={16} />Download CV</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
