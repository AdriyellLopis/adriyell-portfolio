import { profile } from "@/lib/data";
import { SocialLinks } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/40 py-10 text-center backdrop-blur">
      <p className="font-display text-xl font-semibold">{profile.name}</p>
      <p className="mt-1 text-sm text-muted">{profile.title}</p>
      <div className="mt-5 flex justify-center"><SocialLinks /></div>
      <p className="mt-6 text-xs text-muted">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
