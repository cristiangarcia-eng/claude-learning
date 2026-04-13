import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Claude10x — Master Claude Code",
  description:
    "Interactive learning platform to master Claude Code features: slash commands, memory, skills, subagents, MCP, hooks, and more.",
  icons: {
    icon: "/favicons/favicon-32.svg",
    apple: "/favicons/favicon-256.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${jakarta.variable} ${outfit.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
