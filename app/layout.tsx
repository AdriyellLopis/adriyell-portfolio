import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const title = "Adriyell Lopis | IT Professional | Network Management";
const description = "Professional IT portfolio showcasing my Network Management background, IT experience, Digital Associate programme, technology projects, AI exploration, certifications and professional development.";

export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, type: "website", images: [{ url: "/images/headshot.jpg", alt: "Adriyell Lopis" }] },
  twitter: { card: "summary", title, description },
};
export const viewport: Viewport = { themeColor: "#e0d7ff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
