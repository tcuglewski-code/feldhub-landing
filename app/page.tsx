"use client";

import { useState } from "react";

/* ────────────────────────────────────────────
   Logo
   ──────────────────────────────────────────── */
function FeldhubLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 3L55.98 18V48L30 57L4.02 48V18L30 3Z" fill="#1C3D2E" />
      <line x1="16" y1="35" x2="32" y2="16" stroke="#C8852A" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="22" y1="42" x2="42" y2="18" stroke="#C8852A" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="30" y1="47" x2="50" y2="24" stroke="#C8852A" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

/* ────────────────────────────────────────────
   NavBar
   ──────────────────────────────────────────── */
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(253,249,239,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 1px 0 rgba(17,41,31,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <FeldhubLogo size={32} />
          <span
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#1c1c16" }}
          >
            feldhub
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Branchen", "Preise", "Referenzen"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#preise"
            className="text-sm font-medium"
            style={{ color: "#026c47", fontFamily: "Inter, sans-serif" }}
          >
            Anmelden
          </a>
          <a
            href="#kontakt"
            className="px-4 py-2 text-sm font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
            style={{ background: "#026c47", fontFamily: "Inter, sans-serif", borderRadius: "0.75rem" }}
          >
            Demo anfragen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <span className="material-symbols-outlined text-on-surface">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ background: "rgba(253,249,239,0.97)" }}>
          {["Features", "Branchen", "Preise", "Referenzen"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-2 text-sm font-medium text-on-surface-variant"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#kontakt"
            className="mt-2 px-4 py-2.5 text-sm font-semibold text-white text-center rounded-xl"
            style={{ background: "#026c47", borderRadius: "0.75rem" }}
            onClick={() => setOpen(false)}
          >
            Demo anfragen
          </a>
        </div>
      )}
    </header>
  );
}

/* ────────────────────────────────────────────
   HeroSection
   ──────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-24 overflow-hidden"
      style={{ background: "#fdf9ef" }}
    >
      {/* Subtle tonal gradient blob */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, rgba(2,108,71,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-12 gap-6 items-center">

          {/* Left — 7 cols */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
            {/* Badge */}
            <div>
              <span className="badge-offline">
                <span className="material-symbols-outlined text-base icon-filled" style={{ color: "#026c47" }}>
                  offline_bolt
                </span>
                Offline-First Field Management
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-none"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", color: "#1c1c16" }}
            >
              Digitale Systeme.
              <br />
              <span style={{ color: "#026c47" }}>Für echte Arbeit.</span>
            </h1>

            {/* Sub */}
            <p
              className="text-lg text-on-surface-variant max-w-lg leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "#3f4942" }}
            >
              Feldhub gibt Forstbetrieben, Landschaftsbauern und Handwerkern ein digitales
              Rückgrat — Aufträge, Teams, Maschinen, Protokolle. Alles an einem Ort.
              Auch ohne Empfang.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#026c47", borderRadius: "0.75rem", fontFamily: "Inter, sans-serif" }}
              >
                Kostenlos starten
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-colors"
                style={{
                  background: "#e6e2d8",
                  borderRadius: "0.75rem",
                  color: "#1c1c16",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Features ansehen
              </a>
            </div>

            {/* Floating Stats Card */}
            <div
              className="glass-card ambient-shadow inline-flex flex-wrap gap-6 p-5 mt-4"
              style={{ borderRadius: "1.25rem", maxWidth: "520px" }}
            >
              {[
                { num: "500+", label: "Betriebe aktiv" },
                { num: "−2h", label: "Tägl. Zeitersparnis" },
                { num: "99,9%", label: "Uptime" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="font-data text-3xl leading-none"
                    style={{ color: "#026c47" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-xs mt-1"
                    style={{ color: "#3f4942", fontFamily: "Inter, sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 5 cols: hero image */}
          <div className="col-span-12 lg:col-span-5 relative mt-10 lg:mt-0">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "1.5rem",
                boxShadow: "0 20px 60px rgba(17,41,31,0.15)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80"
                alt="Forstwirtschaft im Außendienst"
                className="w-full object-cover"
                style={{ aspectRatio: "4/5", maxHeight: "520px" }}
              />
              {/* Overlay tint */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, rgba(2,108,71,0.08) 0%, rgba(17,41,31,0.3) 100%)",
                }}
              />
            </div>

            {/* Floating AI badge on image */}
            <div
              className="glass-card ambient-shadow absolute bottom-6 -left-6 flex items-center gap-3 px-4 py-3"
              style={{ borderRadius: "1rem", minWidth: "200px" }}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-full"
                style={{ background: "#026c47" }}
              >
                <span className="material-symbols-outlined text-sm text-white icon-filled">smart_toy</span>
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "#1c1c16", fontFamily: "Inter, sans-serif" }}>
                  KI-Förderberatung
                </div>
                <div className="text-xs" style={{ color: "#3f4942", fontFamily: "Inter, sans-serif" }}>
                  255 Programme gefunden
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   ProblemSection
   ──────────────────────────────────────────── */
function ProblemSection() {
  const problems = [
    {
      icon: "phone_missed",
      title: "Koordinationschaos",
      desc: "Telefonkette statt System — Vorarbeiter verlieren täglich 2 Stunden mit Abstimmung, die ein System in Sekunden erledigen würde.",
      stat: "2h/Tag",
      statLabel: "Verloren durch Telefonkette",
    },
    {
      icon: "receipt_long",
      title: "Verzögerte Abrechnung",
      desc: "Handgeschriebene Stundenzettel landen Freitags unleserlich im Büro. Die Folge: 7 Tage Verzug bei jeder Rechnung.",
      stat: "7 Tage",
      statLabel: "Verzug im Cashflow",
    },
    {
      icon: "signal_cellular_off",
      title: "Informations-Blackout",
      desc: "Kein Empfang im Feld = Mitarbeiter arbeiten blind. Kein Auftrag, keine Protokolle, keine Dokumentation.",
      stat: "0%",
      statLabel: "Datenverfügbarkeit offline",
    },
  ];

  return (
    <section id="problem" style={{ background: "#f2eee3" }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Problem cards */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#026c47", fontFamily: "Inter, sans-serif" }}>
              Das Problem
            </span>
            <h2
              className="text-4xl sm:text-5xl mb-6"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", color: "#1c1c16" }}
            >
              Außendienst ohne System
              <br />kostet täglich Geld.
            </h2>

            <div className="flex flex-col gap-4">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="feature-card flex gap-4 p-5"
                  style={{ background: "#ffffff", borderRadius: "1rem", boxShadow: "0 4px 16px rgba(17,41,31,0.06)" }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: "rgba(186,26,26,0.08)" }}
                  >
                    <span className="material-symbols-outlined" style={{ color: "#ba1a1a", fontSize: "20px" }}>{p.icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontFamily: "Manrope, sans-serif", color: "#1c1c16" }}>
                      {p.title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "#3f4942", fontFamily: "Inter, sans-serif" }}>
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats Bento */}
          <div className="grid grid-cols-2 gap-4">
            {problems.map((p) => (
              <div
                key={p.stat}
                className="flex flex-col justify-between p-6"
                style={{ background: "#ffffff", borderRadius: "1.25rem", boxShadow: "0 4px 16px rgba(17,41,31,0.06)", minHeight: "140px" }}
              >
                <span
                  className="font-data text-5xl leading-none"
                  style={{ color: "#026c47" }}
                >
                  {p.stat}
                </span>
                <span className="text-sm mt-3" style={{ color: "#3f4942", fontFamily: "Inter, sans-serif" }}>
                  {p.statLabel}
                </span>
              </div>
            ))}

            {/* Full-width bottom card */}
            <div
              className="col-span-2 flex items-center gap-4 p-6"
              style={{ background: "#026c47", borderRadius: "1.25rem" }}
            >
              <span className="material-symbols-outlined text-white icon-filled" style={{ fontSize: "32px" }}>
                trending_down
              </span>
              <div>
                <div
                  className="font-data text-4xl leading-none text-white"
                >
                  −20%
                </div>
                <div className="text-sm mt-1" style={{ color: "#cde9d9", fontFamily: "Inter, sans-serif" }}>
                  Effizienz durch Papierchaos verloren
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   FeaturesGrid
   ──────────────────────────────────────────── */
function FeaturesGrid() {
  const small = [
    {
      icon: "map",
      title: "Echtzeit-Karte",
      desc: "GPS-Tracking aller Teams & Maschinen auf interaktiver Karte.",
    },
    {
      icon: "photo_camera",
      title: "Fotodoku",
      desc: "Rechtssichere Fotos mit Zeitstempel & GPS-Tag direkt aus der App.",
    },
    {
      icon: "schedule",
      title: "Zeiterfassung",
      desc: "Stempeluhr, Stundenzettel, DATEV-Export — alles automatisiert.",
    },
    {
      icon: "people",
      title: "Kundenportal",
      desc: "Aufträge, Status und Dokumente für Endkunden jederzeit einsehbar.",
    },
    {
      icon: "qr_code_2",
      title: "Fuhrpark & Geräte",
      desc: "QR-Code-Buchung, Wartungsplanung, Auslastungsübersicht.",
    },
    {
      icon: "inventory_2",
      title: "Lager & Pflanzgut",
      desc: "Bestände pflegen, Mindestmengen-Warnungen, Verbrauch tracken.",
    },
  ];

  return (
    <section id="features" style={{ background: "#fdf9ef" }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#026c47", fontFamily: "Inter, sans-serif" }}>
            Features
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", color: "#1c1c16" }}
          >
            Alles, was Ihr Betrieb braucht.
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#3f4942", fontFamily: "Inter, sans-serif" }}>
            Kein Flickenteppich aus 10 Tools. Ein System, das vom ersten Tag an funktioniert — auch ohne WLAN.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">

          {/* Big Card — Offline-First (8 col) */}
          <div
            className="col-span-12 lg:col-span-8 relative overflow-hidden flex flex-col justify-between p-8 lg:p-10"
            style={{
              background: "#026c47",
              borderRadius: "1.5rem",
              minHeight: "320px",
            }}
          >
            {/* Background texture */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%)",
              }}
            />

            <div className="relative">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <span className="material-symbols-outlined text-white icon-filled" style={{ fontSize: "24px" }}>
                  offline_bolt
                </span>
              </div>
              <h3
                className="text-3xl sm:text-4xl text-white mb-3"
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                Offline-First App
              </h3>
              <p className="text-base max-w-md" style={{ color: "#cde9d9", fontFamily: "Inter, sans-serif", lineHeight: "1.7" }}>
                Im Feld gibt es kein Internet. Feldhub funktioniert trotzdem — alle Aufträge, Protokolle
                und Fotos werden lokal gespeichert und beim nächsten Empfang automatisch synchronisiert.
              </p>
            </div>

            {/* Floating pill stats */}
            <div className="relative flex flex-wrap gap-3 mt-8">
              {[
                { icon: "sync", label: "Auto-Sync" },
                { icon: "check_circle", label: "Offline verfügbar" },
                { icon: "speed", label: "Sofortiger Zugriff" },
              ].map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    borderRadius: "99px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: "14px" }}>{t.icon}</span>
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* Auftragsmanagement — 4 col */}
          <div
            className="col-span-12 lg:col-span-4 feature-card flex flex-col justify-between p-7"
            style={{
              background: "#f2eee3",
              borderRadius: "1.5rem",
              minHeight: "320px",
            }}
          >
            <div>
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                style={{ background: "rgba(2,108,71,0.1)" }}
              >
                <span className="material-symbols-outlined icon-filled" style={{ color: "#026c47", fontSize: "22px" }}>
                  assignment
                </span>
              </div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, color: "#1c1c16", letterSpacing: "-0.02em" }}
              >
                Auftragsmanagement
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#3f4942", fontFamily: "Inter, sans-serif" }}>
                Drag-and-Drop: Teams und Maschinen Aufträgen zuweisen. Status in Echtzeit.
                Fortschritt auf einen Blick.
              </p>
            </div>
            <div
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#026c47", fontFamily: "Inter, sans-serif" }}
            >
              Mehr erfahren
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
            </div>
          </div>

          {/* KI-Förderberatung — 4 col */}
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 feature-card relative overflow-hidden flex flex-col justify-between p-7"
            style={{
              background: "linear-gradient(135deg, #865300 0%, #ce8a2f 100%)",
              borderRadius: "1.5rem",
            }}
          >
            <div>
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <span className="material-symbols-outlined icon-filled text-white" style={{ fontSize: "22px" }}>
                  smart_toy
                </span>
              </div>
              <h3
                className="text-2xl text-white mb-3"
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                KI-Förderberatung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}>
                RAG-basierter Berater durchsucht 255 Förderprogramme und findet passende Mittel für Ihren Betrieb.
              </p>
            </div>
            <div
              className="font-data text-5xl text-white mt-6 opacity-90"
            >
              255+
            </div>
          </div>

          {/* Remaining 6 small features — 4 col each */}
          {small.map((f) => (
            <div
              key={f.title}
              className="col-span-12 sm:col-span-6 lg:col-span-4 feature-card flex flex-col gap-3 p-6"
              style={{
                background: "#ffffff",
                borderRadius: "1.25rem",
                boxShadow: "0 2px 12px rgba(17,41,31,0.05)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl self-start"
                style={{ background: "rgba(2,108,71,0.08)" }}
              >
                <span className="material-symbols-outlined icon-filled" style={{ color: "#026c47", fontSize: "20px" }}>
                  {f.icon}
                </span>
              </div>
              <div>
                <div className="font-semibold mb-1" style={{ fontFamily: "Manrope, sans-serif", color: "#1c1c16" }}>
                  {f.title}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: "#3f4942", fontFamily: "Inter, sans-serif" }}>
                  {f.desc}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   BranchenSection
   ──────────────────────────────────────────── */
function BranchenSection() {
  const branchen = [
    { icon: "forest", label: "Forstwirtschaft", sub: "Referenz: Koch Aufforstung GmbH" },
    { icon: "yard", label: "Garten & Landschaftsbau", sub: "Aufmaß, Protokolle, Fotos" },
    { icon: "construction", label: "Tiefbau", sub: "Bautagesbericht, GPS-Tracking" },
    { icon: "agriculture", label: "Landwirtschaft / Agrar", sub: "Maschinen, Flächen, Ernteplanung" },
    { icon: "apartment", label: "Facility Management", sub: "Wartung, Objekte, Reinigung" },
    { icon: "handyman", label: "Handwerk & Bau", sub: "Aufträge, Material, Zeiterfassung" },
  ];

  return (
    <section id="branchen" style={{ background: "#ece8de" }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#026c47", fontFamily: "Inter, sans-serif" }}>
            Branchen
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", color: "#1c1c16" }}
          >
            Gebaut für jede Branche
            <br />im Außendienst.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {branchen.map((b) => (
            <div
              key={b.label}
              className="branch-card flex flex-col items-center text-center gap-3 p-5"
              style={{ background: "#ffffff", borderRadius: "1.25rem" }}
            >
              <span
                className="material-symbols-outlined icon-filled branch-icon text-4xl"
                style={{ color: "#026c47", fontSize: "36px" }}
              >
                {b.icon}
              </span>
              <div>
                <div
                  className="branch-label font-semibold text-sm leading-tight"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#1c1c16" }}
                >
                  {b.label}
                </div>
                <div
                  className="branch-sub text-xs mt-1"
                  style={{ color: "#6f7a72", fontFamily: "Inter, sans-serif" }}
                >
                  {b.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   PricingSection
   ──────────────────────────────────────────── */
function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "99",
      desc: "Für kleine Betriebe mit 1–5 Nutzern.",
      highlight: false,
      features: [
        "Bis zu 5 Nutzer",
        "Auftragsmanagement",
        "Offline-App",
        "Fotodokumentation",
        "E-Mail-Support",
      ],
    },
    {
      name: "Pro",
      price: "249",
      desc: "Für wachsende Betriebe mit Förderberatung.",
      highlight: true,
      features: [
        "Bis zu 25 Nutzer",
        "Alles aus Basic",
        "KI-Förderberatung (255 Programme)",
        "Kundenportal",
        "DATEV-Export",
        "Prioritäts-Support",
      ],
    },
    {
      name: "Business",
      price: "449",
      desc: "Für Großbetriebe mit unbegrenzt Nutzern.",
      highlight: false,
      features: [
        "Unlimited Nutzer",
        "Alles aus Pro",
        "Fuhrpark & Lager",
        "Custom Branding",
        "API-Zugang",
        "Dedizierter Support",
      ],
    },
  ];

  return (
    <section id="preise" style={{ background: "#fdf9ef" }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#026c47", fontFamily: "Inter, sans-serif" }}>
            Preise
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", color: "#1c1c16" }}
          >
            Transparent. Skalierbar.
            <br />Keine versteckten Kosten.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col p-7"
              style={{
                background: plan.highlight ? "#026c47" : "#ffffff",
                borderRadius: "1.5rem",
                ...(plan.highlight
                  ? { boxShadow: "0 0 0 2px #026c47, 0 20px 60px rgba(2,108,71,0.2)" }
                  : { boxShadow: "0 4px 20px rgba(17,41,31,0.07)" }),
              }}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1"
                  style={{ background: "#ce8a2f", color: "#ffffff", borderRadius: "99px", fontFamily: "Inter, sans-serif" }}
                >
                  Empfohlen
                </div>
              )}

              <div className="mb-6">
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#6f7a72", fontFamily: "Inter, sans-serif" }}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-1">
                  <span
                    className="font-data leading-none"
                    style={{ fontSize: "3.5rem", color: plan.highlight ? "#ffffff" : "#026c47" }}
                  >
                    {plan.price}€
                  </span>
                  <span
                    className="text-sm pb-2"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : "#6f7a72", fontFamily: "Inter, sans-serif" }}
                  >
                    /Monat
                  </span>
                </div>
                <p
                  className="text-sm mt-2"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.75)" : "#3f4942", fontFamily: "Inter, sans-serif" }}
                >
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className="material-symbols-outlined icon-filled flex-shrink-0"
                      style={{ fontSize: "18px", color: plan.highlight ? "#cde9d9" : "#026c47", marginTop: "1px" }}
                    >
                      check_circle
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : "#3f4942", fontFamily: "Inter, sans-serif" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="block text-center py-3 font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: plan.highlight ? "rgba(255,255,255,0.15)" : "#026c47",
                  color: plan.highlight ? "#ffffff" : "#ffffff",
                  borderRadius: "0.75rem",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Jetzt starten
              </a>
            </div>
          ))}
        </div>

        {/* Custom Card */}
        <div
          className="mt-5 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-6"
          style={{ background: "#f2eee3", borderRadius: "1.25rem" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
              style={{ background: "rgba(2,108,71,0.1)" }}
            >
              <span className="material-symbols-outlined icon-filled" style={{ color: "#026c47", fontSize: "22px" }}>
                business
              </span>
            </div>
            <div>
              <div className="font-semibold" style={{ fontFamily: "Manrope, sans-serif", color: "#1c1c16" }}>
                Enterprise / Custom
              </div>
              <div className="text-sm" style={{ color: "#3f4942", fontFamily: "Inter, sans-serif" }}>
                Sonderintegration, eigene Infrastruktur, White-Label. Preis auf Anfrage.
              </div>
            </div>
          </div>
          <a
            href="#kontakt"
            className="flex-shrink-0 px-5 py-2.5 font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: "#026c47", color: "#ffffff", borderRadius: "0.75rem", fontFamily: "Inter, sans-serif" }}
          >
            Anfrage stellen
          </a>
        </div>

      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   TestimonialSection
   ──────────────────────────────────────────── */
function TestimonialSection() {
  return (
    <section id="referenzen" style={{ background: "#f2eee3" }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#026c47", fontFamily: "Inter, sans-serif" }}>
            Referenzen
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", color: "#1c1c16" }}
          >
            Echte Betriebe. Echte Ergebnisse.
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden"
          style={{ borderRadius: "1.5rem", boxShadow: "0 12px 40px rgba(17,41,31,0.1)" }}
        >
          {/* Image */}
          <div className="md:col-span-2 relative min-h-64 md:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80"
              alt="Koch Aufforstung GmbH"
              className="w-full h-full object-cover"
              style={{ minHeight: "280px" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(2,108,71,0.4) 0%, rgba(17,41,31,0.5) 100%)" }}
            />
          </div>

          {/* Quote */}
          <div
            className="md:col-span-3 flex flex-col justify-center p-8 lg:p-12"
            style={{ background: "#ffffff" }}
          >
            <div
              className="text-6xl leading-none mb-4 select-none"
              style={{ fontFamily: "Georgia, serif", color: "#026c47", opacity: 0.3 }}
            >
              &ldquo;
            </div>
            <blockquote
              className="text-xl lg:text-2xl font-medium leading-relaxed mb-6"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1c16", letterSpacing: "-0.01em" }}
            >
              Mit Feldhub koordinieren wir 40+ Mitarbeiter im Feld, ohne ein einziges
              Telefonat mehr für Protokolle.
            </blockquote>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "#026c47" }}
              >
                <span className="material-symbols-outlined text-white icon-filled" style={{ fontSize: "20px" }}>
                  person
                </span>
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ fontFamily: "Manrope, sans-serif", color: "#1c1c16" }}>
                  Verwaltung Koch Aufforstung
                </div>
                <div className="text-xs" style={{ color: "#6f7a72", fontFamily: "Inter, sans-serif" }}>
                  Koch Aufforstung GmbH · Forstwirtschaft
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   CTASection
   ──────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      id="kontakt"
      className="py-28 relative overflow-hidden"
      style={{ background: "#026c47" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(206,138,47,0.12) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Bereit für den
            <br />digitalen Vorarbeiter?
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif", lineHeight: "1.7" }}
          >
            Starten Sie jetzt mit einer kostenlosen Demo. Kein Vertrag, keine Setup-Kosten —
            einfach zeigen, was Feldhub für Ihren Betrieb kann.
          </p>

          {/* Simple form hint */}
          <div
            className="glass-card max-w-md mx-auto p-6"
            style={{ borderRadius: "1.25rem" }}
          >
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Ihr Name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  color: "#1c1c16",
                  fontFamily: "Inter, sans-serif",
                  border: "none",
                  borderRadius: "0.75rem",
                }}
              />
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  color: "#1c1c16",
                  fontFamily: "Inter, sans-serif",
                  border: "none",
                  borderRadius: "0.75rem",
                }}
              />
              <select
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  color: "#3f4942",
                  fontFamily: "Inter, sans-serif",
                  border: "none",
                  borderRadius: "0.75rem",
                  appearance: "none",
                }}
              >
                <option value="">Branche wählen...</option>
                <option>Forstwirtschaft</option>
                <option>Garten &amp; Landschaftsbau</option>
                <option>Tiefbau</option>
                <option>Landwirtschaft / Agrar</option>
                <option>Facility Management</option>
                <option>Handwerk &amp; Bau</option>
              </select>
              <button
                className="w-full py-3 font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#026c47", borderRadius: "0.75rem", fontFamily: "Inter, sans-serif" }}
              >
                Demo anfragen →
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}>
            Kein Spam. Keine Weitergabe. Antwort innerhalb von 24h.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   FooterSection
   ──────────────────────────────────────────── */
function FooterSection() {
  return (
    <footer style={{ background: "#003823" }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <FeldhubLogo size={30} />
              <span
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#ffffff" }}
              >
                feldhub
              </span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}>
              Digitale Betriebssysteme für den Außendienst. Offline-First, mobil, sicher.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span
                className="font-data text-2xl"
                style={{ color: "#ce8a2f" }}
              >
                500+
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Inter, sans-serif" }}>
                aktive Betriebe
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif" }}>
              Produkt
            </div>
            {["Features", "Branchen", "Preise", "Referenzen", "Changelog"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm mb-2 hover:opacity-100 transition-opacity"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif", opacity: 0.7 }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Branchen */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif" }}>
              Branchen
            </div>
            {["Forstwirtschaft", "Garten & Landschaftsbau", "Tiefbau", "Agrar", "Facility Management", "Handwerk"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm mb-2"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif" }}>
              Unternehmen
            </div>
            {["Über uns", "Datenschutz", "Impressum", "Kontakt"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm mb-2"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif" }}>
            © 2026 Feldhub UG (haftungsbeschränkt). Alle Rechte vorbehalten.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif" }}>
            Digitale Systeme. Für echte Arbeit.
          </p>
        </div>

      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────
   Page Root
   ──────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesGrid />
        <BranchenSection />
        <PricingSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
