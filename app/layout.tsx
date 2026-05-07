import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import { AppStateProvider } from "@/components/providers/app-state-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { AnimatedBackground } from "@/components/interactive/animated-background";
import { CustomCursor } from "@/components/interactive/custom-cursor";
import { MouseGlow } from "@/components/interactive/mouse-glow";
import { ScrollProgress } from "@/components/interactive/scroll-progress";
import { SpiderSenseOverlay } from "@/components/interactive/spider-sense-overlay";
import { WebTrail } from "@/components/interactive/web-trail";
import { LoadingScreen } from "@/components/interactive/loading-screen";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jet", display: "swap" });

export const metadata: Metadata = {
  title: "HARSHIT // DEV | Earth-1610 Protocol",
  description:
    "Miles Morales inspired developer portfolio. Breaking frames and crossing dimensions with high-fidelity web experiences.",
  metadataBase: new URL("https://portfolio-six-lac-72.vercel.app"),
  openGraph: {
    title: "HARSHIT // DEV | Spider-Verse Portfolio",
    description:
      "Brutalist, cinematic developer portfolio built with urban grit and relentless performance. Earth-1610 Protocol.",
    url: "https://portfolio-six-lac-72.vercel.app",
    siteName: "HARSHIT // DEV",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HARSHIT // DEV",
    description: "Earth-1610 Protocol — Full Stack Developer"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${manrope.variable} ${jetbrains.variable} font-body`}>
        <AppStateProvider>
          <SmoothScrollProvider>
            <LoadingScreen />
            <AnimatedBackground />
            <MouseGlow />
            <WebTrail />
            <ScrollProgress />
            <SpiderSenseOverlay />
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}
