"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { SocialLinks } from "./ui";

export default function Hero() {
  const reduce = useReducedMotion();
  const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  return (
    <section id="home" className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
      <motion.div initial={reduce ? "show" : "hidden"} animate="show" transition={{ staggerChildren: 0.12 }} className="order-2 lg:order-1">
        <motion.p variants={item} className="mb-3 inline-block rounded-full bg-mint px-4 py-1 text-xs font-semibold uppercase tracking-widest">Open to opportunities</motion.p>
        <motion.h1 variants={item} className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{profile.name}</motion.h1>
        <motion.p variants={item} className="mt-4 text-lg font-semibold text-lavender-deep">{profile.title}</motion.p>
        <motion.p variants={item} className="mt-4 max-w-xl text-lg text-muted">{profile.intro}</motion.p>
        <motion.p variants={item} className="mt-4 max-w-xl font-display text-xl italic">“{profile.tagline}”</motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <motion.a whileHover={reduce ? undefined : { scale: 1.04 }} href="#projects" className="btn-primary"><ArrowDown size={16} />View My Work</motion.a>
          <motion.a whileHover={reduce ? undefined : { scale: 1.04 }} href={profile.cv} download className="btn-soft"><Download size={16} />Download CV</motion.a>
          <motion.a whileHover={reduce ? undefined : { scale: 1.04 }} href="#contact" className="btn-soft"><Send size={16} />Contact Me</motion.a>
        </motion.div>
        <motion.div variants={item} className="mt-8"><SocialLinks /></motion.div>
      </motion.div>

      <motion.div initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="order-1 mx-auto lg:order-2">
        <motion.div animate={reduce ? undefined : { y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative">
          <div aria-hidden className="absolute -inset-6 rounded-full bg-gradient-to-br from-sky via-lavender to-blush opacity-80 blur-2xl" />
          <div aria-hidden className="absolute -inset-3 rounded-full border border-lavender-deep/30" />
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-[6px] border-white shadow-soft sm:h-96 sm:w-96">
            <Image src="/images/headshot.jpg" alt="Portrait of Adriyell Lopis, smiling, wearing round glasses and a cream knit jumper" width={1006} height={1280}
              priority sizes="(max-width: 640px) 288px, 384px" className="h-full w-full object-cover" style={{ objectPosition: "50% 28%" }} />
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-semibold shadow-soft">Digital Associate · CAPACITI</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
