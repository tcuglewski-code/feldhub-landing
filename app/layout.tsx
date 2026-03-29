import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feldhub — Digitale Betriebssysteme für den Außendienst",
  description:
    "Feldhub baut maßgeschneiderte digitale Betriebssysteme für Unternehmen im Außendienst. Forstbetriebe, Landschaftsbau, Handwerk — modern, mobil, offline-fähig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
