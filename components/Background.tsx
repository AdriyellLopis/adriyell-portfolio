"use client";
import { motion, useReducedMotion } from "framer-motion";

const blobs = [
  { c: "bg-sky", s: "h-96 w-96", p: "-left-24 top-10" },
  { c: "bg-lavender", s: "h-[28rem] w-[28rem]", p: "right-[-8rem] top-[30%]" },
  { c: "bg-blush", s: "h-80 w-80", p: "left-[20%] top-[60%]" },
  { c: "bg-mint", s: "h-72 w-72", p: "right-[15%] bottom-0" },
];
const nodes = [[8, 20], [22, 8], [38, 26], [55, 12], [72, 30], [90, 14], [14, 62], [48, 70], [82, 66]];
const links = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 7], [6, 7], [7, 8], [4, 8]];

export default function Background() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-cream via-white to-sky/40">
      {blobs.map((b, i) => (
        <motion.div key={i} className={`absolute rounded-full opacity-60 blur-3xl ${b.c} ${b.s} ${b.p}`}
          animate={reduce ? undefined : { y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid slice">
        {links.map(([a, b], i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#7a63d1" strokeWidth="0.08" />)}
        {nodes.map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r="0.5" fill="#7a63d1" animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4 }} />
        ))}
      </svg>
    </div>
  );
}
