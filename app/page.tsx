'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-st-50 antialiased">

      {/* ═══════════════════════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════════════════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hero-bg${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 flex-shrink-0">
              <svg width="36" height="36" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M30 3L55.98 18V48L30 57L4.02 48V18L30 3Z" fill="#1C3D2E" stroke="#2D6A4F" strokeWidth="1.5"/>
                <line x1="16" y1="35" x2="32" y2="16" stroke="#C8852A" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="22" y1="42" x2="42" y2="18" stroke="#C8852A" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="30" y1="47" x2="50" y2="24" stroke="#C8852A" strokeWidth="2.2" strokeLinecap="round" opacity="0.55"/>
              </svg>
              <span className="font-display text-2xl text-white tracking-tight leading-none" style={{ fontWeight: 800 }}>feldhub</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#leistungen" className="nav-link text-white/80 hover:text-white text-sm font-medium transition-colors">Leistungen</a>
              <a href="#branchen"   className="nav-link text-white/80 hover:text-white text-sm font-medium transition-colors">Branchen</a>
              <a href="#referenz"   className="nav-link text-white/80 hover:text-white text-sm font-medium transition-colors">Referenzen</a>
              <a href="#ablauf"     className="nav-link text-white/80 hover:text-white text-sm font-medium transition-colors">Ablauf</a>
              <a href="#kontakt"    className="nav-link text-white/80 hover:text-white text-sm font-medium transition-colors">Kontakt</a>
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a href="#kontakt" className="hidden md:inline-flex items-center gap-2 bg-am-600 hover:bg-am-400 text-white font-display text-sm px-5 py-2.5 rounded transition-colors" style={{ fontWeight: 700 }}>
                Demo anfragen
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white p-1"
                aria-label="Menü öffnen"
              >
                <span className="material-symbols-outlined text-2xl">menu</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-5 border-t border-white/10 mt-1">
              <div className="flex flex-col gap-1 pt-4">
                <a href="#leistungen" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white py-2 px-2 text-base font-medium rounded hover:bg-white/5 transition-colors">Leistungen</a>
                <a href="#branchen"   onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white py-2 px-2 text-base font-medium rounded hover:bg-white/5 transition-colors">Branchen</a>
                <a href="#referenz"   onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white py-2 px-2 text-base font-medium rounded hover:bg-white/5 transition-colors">Referenzen</a>
                <a href="#ablauf"     onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white py-2 px-2 text-base font-medium rounded hover:bg-white/5 transition-colors">Ablauf</a>
                <a href="#kontakt"    onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white py-2 px-2 text-base font-medium rounded hover:bg-white/5 transition-colors">Kontakt</a>
                <a href="#kontakt"    onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-am-600 text-white font-display text-base px-5 py-3 rounded transition-colors" style={{ fontWeight: 700 }}>
                  Demo anfragen <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="hero-bg furrow-texture relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36">
        {/* Background decorative elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, #52A87E 0%, transparent 60%)' }}></div>
        <div className="absolute left-20 bottom-0 w-96 h-96 rounded-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #C8852A 0%, transparent 70%)' }}></div>

        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">

            {/* Left: Text */}
            <div>
              <div className="badge mb-6">
                <span className="material-symbols-outlined text-sm">agriculture</span>
                Software für den Außendienst
              </div>

              <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
                Ihr Betrieb.<br/>
                <span className="text-am-400">Digital.</span><br/>
                Im Griff.
              </h1>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Feldhub baut maßgeschneiderte digitale Betriebssysteme für mittelständische Unternehmen im Außendienst — von Forstbetrieben bis zum Handwerk. Weniger Zettelwirtschaft, mehr Überblick.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-am-600 hover:bg-am-400 text-white font-display text-lg px-8 py-4 rounded transition-all hover:scale-105" style={{ fontWeight: 800 }}>
                  Kostenlose Demo anfragen
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="#referenz" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/70 text-white/80 hover:text-white font-semibold text-base px-7 py-4 rounded transition-colors">
                  <span className="material-symbols-outlined text-base">play_circle</span>
                  Referenzprojekt ansehen
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="material-symbols-outlined icon-filled text-fh-500 text-base">verified</span>
                  DSGVO-konform
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="material-symbols-outlined icon-filled text-fh-500 text-base">wifi_off</span>
                  Offline-fähig
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="material-symbols-outlined icon-filled text-fh-500 text-base">support_agent</span>
                  Persönlicher Support
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="material-symbols-outlined icon-filled text-fh-500 text-base">devices</span>
                  Web + Mobile App
                </div>
              </div>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="hidden md:block relative">
              {/* Browser mockup */}
              <div className="rounded-xl overflow-hidden shadow-2xl" style={{ background: '#0F2419', border: '1px solid rgba(82,168,126,0.2)' }}>
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: '#0D1F17', borderColor: 'rgba(82,168,126,0.15)' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  </div>
                  <div className="flex-1 mx-4 rounded px-3 py-1 text-xs text-white/30" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    ka-forstmanager.vercel.app
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-white/50 text-xs uppercase tracking-widest">Aktive Aufträge</p>
                    <span className="text-xs text-fh-500 font-semibold">Heute, 09:47</span>
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(82,168,126,0.1)', border: '1px solid rgba(82,168,126,0.15)' }}>
                      <div className="font-display text-2xl text-am-400" style={{ fontWeight: 800 }}>24</div>
                      <div className="text-xs text-white/40 mt-1">Aufträge</div>
                    </div>
                    <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(82,168,126,0.1)', border: '1px solid rgba(82,168,126,0.15)' }}>
                      <div className="font-display text-2xl text-fh-500" style={{ fontWeight: 800 }}>8</div>
                      <div className="text-xs text-white/40 mt-1">Teams aktiv</div>
                    </div>
                    <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(82,168,126,0.1)', border: '1px solid rgba(82,168,126,0.15)' }}>
                      <div className="font-display text-2xl text-white/70" style={{ fontWeight: 800 }}>3</div>
                      <div className="text-xs text-white/40 mt-1">Abnahmen</div>
                    </div>
                  </div>
                  {/* Table rows mockup */}
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-between rounded p-2.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-am-400 flex-shrink-0"></div>
                        <div>
                          <div className="text-xs text-white/80 font-medium">Pflanzung Sektion B-12</div>
                          <div className="text-xs text-white/30">Gruppe Müller · 4 Pers.</div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(200,133,42,0.2)', color: '#E8A84C' }}>In Arbeit</span>
                    </div>
                    <div className="flex items-center justify-between rounded p-2.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-fh-500 flex-shrink-0"></div>
                        <div>
                          <div className="text-xs text-white/80 font-medium">Schutzmaßnahmen Revier 4</div>
                          <div className="text-xs text-white/30">Gruppe Schmidt · 3 Pers.</div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(82,168,126,0.2)', color: '#52A87E' }}>Abgeschlossen</span>
                    </div>
                    <div className="flex items-center justify-between rounded p-2.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white/20 flex-shrink-0"></div>
                        <div>
                          <div className="text-xs text-white/80 font-medium">Aufforstung Hang West</div>
                          <div className="text-xs text-white/30">Gruppe Bauer · 6 Pers.</div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>Geplant</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile App preview card */}
              <div className="absolute -bottom-6 -left-8 w-36 rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#0D1F17', border: '1px solid rgba(200,133,42,0.25)' }}>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <svg width="18" height="18" viewBox="0 0 60 60" fill="none">
                      <path d="M30 3L55.98 18V48L30 57L4.02 48V18L30 3Z" fill="#1C3D2E"/>
                      <line x1="16" y1="35" x2="32" y2="16" stroke="#C8852A" strokeWidth="4" strokeLinecap="round"/>
                      <line x1="22" y1="42" x2="42" y2="18" stroke="#C8852A" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                    <span className="text-white/60 text-xs font-medium">Feldhub</span>
                  </div>
                  <div className="rounded-lg p-2 mb-2" style={{ background: 'rgba(200,133,42,0.15)', border: '1px solid rgba(200,133,42,0.2)' }}>
                    <span className="material-symbols-outlined text-am-400 text-xl icon-filled block text-center mb-1">check_circle</span>
                    <div className="text-white text-xs font-semibold text-center">Abnahme</div>
                    <div className="text-white/40 text-xs text-center">Sektion B-12</div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="flex-1 rounded p-1.5 text-center" style={{ background: 'rgba(82,168,126,0.12)' }}>
                      <span className="material-symbols-outlined text-fh-500 text-sm block">photo_camera</span>
                    </div>
                    <div className="flex-1 rounded p-1.5 text-center" style={{ background: 'rgba(82,168,126,0.12)' }}>
                      <span className="material-symbols-outlined text-fh-500 text-sm block">location_on</span>
                    </div>
                    <div className="flex-1 rounded p-1.5 text-center" style={{ background: 'rgba(82,168,126,0.12)' }}>
                      <span className="material-symbols-outlined text-fh-500 text-sm block">draw</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-st-200 py-10">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-tx-m text-sm font-medium uppercase tracking-widest mb-1">Bereits im Einsatz bei</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-fh-100 rounded-lg px-4 py-2">
                  <span className="material-symbols-outlined text-fh-800 icon-filled text-xl">forest</span>
                  <div>
                    <div className="font-display text-fh-800 text-lg leading-none" style={{ fontWeight: 700 }}>Koch Aufforstung</div>
                    <div className="text-xs text-tx-m">GmbH</div>
                  </div>
                </div>
                <span className="text-st-400 text-sm italic ml-2">und weitere Betriebe</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-st-200"></div>
            <blockquote className="flex-1 max-w-lg">
              <p className="text-tx text-base leading-relaxed italic">
                &ldquo;Mit dem ForstManager haben wir unsere gesamte Auftragsplanung und Felddokumentation digitalisiert — vom Büro bis ins Revier.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-tx-m font-semibold not-italic">Koch Aufforstung GmbH · Bayern</footer>
            </blockquote>
            <div className="hidden md:block w-px h-16 bg-st-200"></div>
            <div className="flex gap-8 text-center">
              <div>
                <div className="metric-num">2+</div>
                <div className="text-xs text-tx-m uppercase tracking-wide font-medium mt-1">Jahre Live</div>
              </div>
              <div>
                <div className="metric-num">100%</div>
                <div className="text-xs text-tx-m uppercase tracking-wide font-medium mt-1">Digital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROBLEM SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-st-100 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-am-600 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Das kennen Sie</p>
            <h2 className="font-display text-tx leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800 }}>
              Außendienst ohne digitales System?<br/>
              <span className="text-fh-700">Das kostet Sie täglich.</span>
            </h2>
            <p className="text-tx-m text-lg max-w-xl mx-auto leading-relaxed">
              Viele Betriebe arbeiten noch mit Methoden, die für 5 Mitarbeiter funktioniert haben. Bei 15, 20, 30 Personen im Außendienst wird daraus täglich verlorene Zeit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pain 1 */}
            <div className="bg-white rounded-xl p-7 border border-st-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-400 rounded-l-xl"></div>
              <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-red-400 text-2xl">description</span>
              </div>
              <h3 className="font-display text-xl text-tx mb-3" style={{ fontWeight: 700 }}>Stundenzettel auf Papier</h3>
              <p className="text-tx-m leading-relaxed text-sm">
                Lesbare Handschrift ist Glücksache. Am Freitagnachmittag kommen Zettel rein, die niemand mehr entziffern kann. Nachfragen, abtippen, verlieren — jede Woche neu.
              </p>
              <div className="mt-5 pt-4 border-t border-st-200">
                <span className="text-red-400 text-xs font-semibold">⌀ 2–4 Stunden Aufwand pro Woche</span>
              </div>
            </div>
            {/* Pain 2 */}
            <div className="bg-white rounded-xl p-7 border border-st-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-400 rounded-l-xl"></div>
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-orange-400 text-2xl">phone_missed</span>
              </div>
              <h3 className="font-display text-xl text-tx mb-3" style={{ fontWeight: 700 }}>Koordination per Telefon</h3>
              <p className="text-tx-m leading-relaxed text-sm">
                Wo ist Team 3 gerade? Ist der Auftrag in Sektion B fertig? Wurde das Foto gemacht? Wer hat die Abnahme? Fragen, die das Büro täglich per Anruf beantwortet bekommt.
              </p>
              <div className="mt-5 pt-4 border-t border-st-200">
                <span className="text-orange-400 text-xs font-semibold">Kein Echtzeit-Überblick möglich</span>
              </div>
            </div>
            {/* Pain 3 */}
            <div className="bg-white rounded-xl p-7 border border-st-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 rounded-l-xl"></div>
              <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-yellow-500 text-2xl">folder_off</span>
              </div>
              <h3 className="font-display text-xl text-tx mb-3" style={{ fontWeight: 700 }}>Drei Apps, zwei Ordner, ein Excel</h3>
              <p className="text-tx-m leading-relaxed text-sm">
                Aufträge in einer App, Fotos per WhatsApp, Berichte als Word-Dokument, Rechnungen in Excel. Nichts ist zusammen. Nichts ist vollständig. Immer etwas verloren.
              </p>
              <div className="mt-5 pt-4 border-st-200 border-t">
                <span className="text-yellow-600 text-xs font-semibold">Daten verteilt auf 4+ Systeme</span>
              </div>
            </div>
          </div>

          {/* Transition statement */}
          <div className="mt-14 text-center">
            <p className="text-tx font-semibold text-lg">Es gibt einen besseren Weg.</p>
            <div className="mt-3 flex justify-center">
              <span className="material-symbols-outlined text-am-600 text-3xl">keyboard_double_arrow_down</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LÖSUNG / WHAT IS FELDHUB
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Visual */}
            <div className="order-2 md:order-1">
              <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #EFF9F4, #F0EBE0)' }}>
                <div className="text-center mb-8">
                  <span className="text-tx-m text-xs uppercase tracking-widest font-semibold">Ihr digitales Betriebssystem</span>
                </div>
                <div className="relative flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-st-200">
                    <span className="material-symbols-outlined text-fh-700 icon-filled">business</span>
                    <div>
                      <div className="font-semibold text-tx text-sm">Büro & Verwaltung</div>
                      <div className="text-xs text-tx-m">Planung, Aufträge, Berichte</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-fh-500"></div>
                    <div className="w-2 h-2 rounded-full bg-fh-500"></div>
                  </div>
                  <div className="hero-bg rounded-2xl px-8 py-5 text-center shadow-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg width="28" height="28" viewBox="0 0 60 60" fill="none">
                        <path d="M30 3L55.98 18V48L30 57L4.02 48V18L30 3Z" fill="#2D6A4F"/>
                        <line x1="16" y1="35" x2="32" y2="16" stroke="#C8852A" strokeWidth="4" strokeLinecap="round"/>
                        <line x1="22" y1="42" x2="42" y2="18" stroke="#C8852A" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                      <span className="font-display text-xl text-white" style={{ fontWeight: 800 }}>feldhub</span>
                    </div>
                    <div className="text-white/60 text-xs">Zentrale Plattform</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-fh-500"></div>
                    <div className="w-px h-6 bg-fh-500"></div>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-st-200">
                    <span className="material-symbols-outlined text-fh-700 icon-filled">smartphone</span>
                    <div>
                      <div className="font-semibold text-tx text-sm">Außendienst & Mobile App</div>
                      <div className="text-xs text-tx-m">Teams, GPS, Fotos, Offline</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white rounded-lg p-3 border border-st-200">
                    <span className="material-symbols-outlined text-fh-600 icon-filled text-lg">sync</span>
                    <div className="text-xs text-tx-m mt-1">Echtzeit-Sync</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-st-200">
                    <span className="material-symbols-outlined text-fh-600 icon-filled text-lg">lock</span>
                    <div className="text-xs text-tx-m mt-1">DSGVO-konform</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="order-1 md:order-2">
              <p className="text-am-600 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Was ist Feldhub?</p>
              <h2 className="font-display text-tx leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
                Ein System.<br/>Für Ihren gesamten Betrieb.
              </h2>
              <p className="text-tx-m text-base leading-relaxed mb-5">
                Feldhub ist kein Standardsoftwarepaket, das zu 60% passt. Wir bauen für Sie ein digitales Betriebssystem, das auf Ihre Prozesse, Ihre Mitarbeiter und Ihre Branche zugeschnitten ist.
              </p>
              <p className="text-tx-m text-base leading-relaxed mb-8">
                Zentrale Verwaltung im Browser. Mobile App für den Außendienst — offline-fähig, damit auch schlechte Netzabdeckung kein Problem ist. Alles aus einer Hand: Aufbau, Hosting, Support und Weiterentwicklung.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined icon-filled text-fh-600 text-xl flex-shrink-0">check_circle</span>
                  <span className="text-tx font-medium">Maßgeschneidert — keine &ldquo;von der Stange&rdquo;-Lösung</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined icon-filled text-fh-600 text-xl flex-shrink-0">check_circle</span>
                  <span className="text-tx font-medium">2–4 Wochen bis zur ersten Live-Version</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined icon-filled text-fh-600 text-xl flex-shrink-0">check_circle</span>
                  <span className="text-tx font-medium">Laufender Support und Weiterentwicklung inklusive</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined icon-filled text-fh-600 text-xl flex-shrink-0">check_circle</span>
                  <span className="text-tx font-medium">Tomek und sein Team — nicht ein anonymes Ticketsystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LEISTUNGEN / FEATURES
      ═══════════════════════════════════════════════════════ */}
      <section id="leistungen" className="bg-st-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-am-600 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Was Ihr System kann</p>
            <h2 className="font-display text-tx leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800 }}>
              Alles, was Außendienst-Betriebe<br/>wirklich brauchen.
            </h2>
            <p className="text-tx-m text-lg max-w-xl mx-auto">
              Kein Feature-Überfluss. Nur was Sie täglich nutzen werden.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card bg-white rounded-xl p-7 border border-st-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-fh-100 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-fh-700 text-2xl">assignment</span>
              </div>
              <h3 className="font-display text-xl text-tx mb-3" style={{ fontWeight: 700 }}>Auftragsmanagement</h3>
              <p className="text-tx-m text-sm leading-relaxed">
                Aufträge anlegen, Teams zuweisen, Status verfolgen — von der ersten Anfrage bis zur finalen Abnahme. Übersichtlich, lückenlos, digital.
              </p>
            </div>
            <div className="feature-card bg-white rounded-xl p-7 border border-st-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-fh-100 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-fh-700 text-2xl">smartphone</span>
              </div>
              <h3 className="font-display text-xl text-tx mb-3" style={{ fontWeight: 700 }}>Mobile App</h3>
              <p className="text-tx-m text-sm leading-relaxed">
                Offline-fähig für Android und iOS. Funktioniert auch ohne Mobilnetz im Wald, auf der Baustelle oder im Keller. Synchronisiert automatisch, sobald Netz vorhanden.
              </p>
            </div>
            <div className="feature-card bg-white rounded-xl p-7 border border-st-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-fh-100 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-fh-700 text-2xl">map</span>
              </div>
              <h3 className="font-display text-xl text-tx mb-3" style={{ fontWeight: 700 }}>Echtzeit-Überblick</h3>
              <p className="text-tx-m text-sm leading-relaxed">
                Karte und Statusboard zeigen live, wo Ihre Teams arbeiten und welche Aufgaben abgeschlossen sind. Nie wieder nachfragen per Telefon.
              </p>
            </div>
            <div className="feature-card bg-white rounded-xl p-7 border border-st-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-fh-100 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-fh-700 text-2xl">photo_camera</span>
              </div>
              <h3 className="font-display text-xl text-tx mb-3" style={{ fontWeight: 700 }}>Felddokumentation</h3>
              <p className="text-tx-m text-sm leading-relaxed">
                Fotos, Berichte und Unterschriften direkt aus der App — revisionssicher gespeichert. Keine WhatsApp-Fotos mehr, die in keinem System landen.
              </p>
            </div>
            <div className="feature-card bg-white rounded-xl p-7 border border-st-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-fh-100 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-fh-700 text-2xl">schedule</span>
              </div>
              <h3 className="font-display text-xl text-tx mb-3" style={{ fontWeight: 700 }}>Arbeitszeiterfassung</h3>
              <p className="text-tx-m text-sm leading-relaxed">
                Digital, genau, nachvollziehbar. Keine Stundenzettel mehr abtippen. Zeiten werden in der App erfasst und automatisch zusammengeführt.
              </p>
            </div>
            <div className="feature-card bg-fh-800 rounded-xl p-7 border border-fh-700 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-fh-700 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-am-400 text-2xl">tune</span>
              </div>
              <h3 className="font-display text-xl text-white mb-3" style={{ fontWeight: 700 }}>Maßgeschneidert für Sie</h3>
              <p className="text-fh-300 text-sm leading-relaxed">
                Kein Template das irgendwie passt. Wir konfigurieren Ihr System exakt für Ihre Branche, Ihre Teams und Ihre Prozesse. Feldhub passt sich Ihnen an — nicht umgekehrt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BRANCHEN
      ═══════════════════════════════════════════════════════ */}
      <section id="branchen" className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-am-600 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Branchen</p>
            <h2 className="font-display text-tx leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800 }}>
              Für Betriebe, die draußen arbeiten.
            </h2>
            <p className="text-tx-m text-lg max-w-xl mx-auto">
              Feldhub wurde für Außendienst-Betriebe gebaut — nicht für Büros. Wenn Ihre Mitarbeiter draußen arbeiten, ist Feldhub das richtige System.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="branch-card rounded-xl p-6 border border-st-200 cursor-default" style={{ background: '#F8F5EF' }}>
              <span className="material-symbols-outlined branch-icon text-fh-700 text-3xl icon-filled">forest</span>
              <div className="branch-label font-display text-tx text-xl mt-3 mb-1" style={{ fontWeight: 700 }}>Forstwirtschaft</div>
              <div className="branch-sub text-tx-m text-sm">Aufforstung, Pflege, Schutzmaßnahmen</div>
            </div>
            <div className="branch-card rounded-xl p-6 border border-st-200 cursor-default" style={{ background: '#F8F5EF' }}>
              <span className="material-symbols-outlined branch-icon text-fh-700 text-3xl icon-filled">yard</span>
              <div className="branch-label font-display text-tx text-xl mt-3 mb-1" style={{ fontWeight: 700 }}>Landschaftsbau</div>
              <div className="branch-sub text-tx-m text-sm">Garten, Grünflächen, Pflege</div>
            </div>
            <div className="branch-card rounded-xl p-6 border border-st-200 cursor-default" style={{ background: '#F8F5EF' }}>
              <span className="material-symbols-outlined branch-icon text-fh-700 text-3xl icon-filled">construction</span>
              <div className="branch-label font-display text-tx text-xl mt-3 mb-1" style={{ fontWeight: 700 }}>Tief- & Straßenbau</div>
              <div className="branch-sub text-tx-m text-sm">Erdarbeiten, Infrastruktur, Kanalbau</div>
            </div>
            <div className="branch-card rounded-xl p-6 border border-st-200 cursor-default" style={{ background: '#F8F5EF' }}>
              <span className="material-symbols-outlined branch-icon text-fh-700 text-3xl icon-filled">agriculture</span>
              <div className="branch-label font-display text-tx text-xl mt-3 mb-1" style={{ fontWeight: 700 }}>Landwirtschaft</div>
              <div className="branch-sub text-tx-m text-sm">Ackerbau, Viehwirtschaft, Agrar</div>
            </div>
            <div className="branch-card rounded-xl p-6 border border-st-200 cursor-default" style={{ background: '#F8F5EF' }}>
              <span className="material-symbols-outlined branch-icon text-fh-700 text-3xl icon-filled">cleaning_services</span>
              <div className="branch-label font-display text-tx text-xl mt-3 mb-1" style={{ fontWeight: 700 }}>Gebäudereinigung</div>
              <div className="branch-sub text-tx-m text-sm">Facility, Unterhaltsreinigung</div>
            </div>
            <div className="branch-card rounded-xl p-6 border border-st-200 cursor-default" style={{ background: '#F8F5EF' }}>
              <span className="material-symbols-outlined branch-icon text-fh-700 text-3xl icon-filled">handyman</span>
              <div className="branch-label font-display text-tx text-xl mt-3 mb-1" style={{ fontWeight: 700 }}>Handwerk & Montage</div>
              <div className="branch-sub text-tx-m text-sm">Installation, Wartung, Service</div>
            </div>
          </div>
          <p className="text-center text-tx-m text-sm mt-6">
            Ihre Branche ist nicht dabei? <a href="#kontakt" className="text-fh-700 font-semibold hover:underline">Sprechen Sie uns an</a> — wir haben bereits für unterschiedlichste Außendienst-Betriebe gebaut.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          REFERENZ KOCH AUFFORSTUNG
      ═══════════════════════════════════════════════════════ */}
      <section id="referenz" className="hero-bg furrow-texture py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-am-400 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Referenzprojekt</p>
              <h2 className="font-display text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
                Koch Aufforstung GmbH:<br/>
                <span className="text-fh-500">Vom Papierordner<br/>zum digitalen Betrieb.</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Koch Aufforstung GmbH betreibt Forstdienstleistungen in Bayern — Pflanzung, Pflege, Schutzmaßnahmen, Erstaufforstungen. Mit wachsendem Team wurde die Koordination über Papier und Telefon zur täglichen Belastung.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Heute nutzen sie den <strong className="text-white">ForstManager</strong> — ein von Feldhub aufgebautes Betriebssystem mit Web-Oberfläche, mobiler App für Gruppenführer und Außendienstmitarbeiter, Echtzeit-Karte und Kundenportal.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(82,168,126,0.12)', border: '1px solid rgba(82,168,126,0.2)' }}>
                  <div className="font-display text-3xl text-am-400 mb-1" style={{ fontWeight: 900 }}>100%</div>
                  <div className="text-white/60 text-xs uppercase tracking-wide">Auftragsabwicklung digital</div>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(82,168,126,0.12)', border: '1px solid rgba(82,168,126,0.2)' }}>
                  <div className="font-display text-3xl text-am-400 mb-1" style={{ fontWeight: 900 }}>0</div>
                  <div className="text-white/60 text-xs uppercase tracking-wide">Stundenzettel auf Papier</div>
                </div>
              </div>
              {/* Quote */}
              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="blockquote-mark mb-2">&ldquo;</div>
                <p className="text-white/85 text-base italic leading-relaxed">
                  Wir hätten nie gedacht, dass der Umstieg so schnell geht. Feldhub hat alles eingerichtet, erklärt, und ist auch danach erreichbar wenn etwas ist.
                </p>
                <footer className="mt-4 text-white/50 text-sm font-semibold not-italic">
                  — Koch Aufforstung GmbH · Forstdienstleister, Bayern
                </footer>
              </div>
            </div>

            {/* Right: What was built */}
            <div className="space-y-4">
              <h3 className="font-display text-white text-xl uppercase tracking-wide mb-4" style={{ fontWeight: 700 }}>Was gebaut wurde:</h3>
              <div className="rounded-xl p-5 flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(82,168,126,0.2)' }}>
                <span className="material-symbols-outlined text-fh-500 text-2xl flex-shrink-0 icon-filled">computer</span>
                <div>
                  <div className="font-display text-white text-lg mb-1" style={{ fontWeight: 700 }}>Web-Oberfläche (ForstManager)</div>
                  <div className="text-white/60 text-sm leading-relaxed">Zentrale Verwaltung für Büro — Aufträge, Mitarbeiter, Reviere, Berichte, Karten.</div>
                </div>
              </div>
              <div className="rounded-xl p-5 flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(82,168,126,0.2)' }}>
                <span className="material-symbols-outlined text-fh-500 text-2xl flex-shrink-0 icon-filled">smartphone</span>
                <div>
                  <div className="font-display text-white text-lg mb-1" style={{ fontWeight: 700 }}>Mobile App (Expo/React Native)</div>
                  <div className="text-white/60 text-sm leading-relaxed">Für Gruppenführer und Außendienst — offline-fähig, GPS, Fotos, Abnahmen, Unterschrift.</div>
                </div>
              </div>
              <div className="rounded-xl p-5 flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(82,168,126,0.2)' }}>
                <span className="material-symbols-outlined text-fh-500 text-2xl flex-shrink-0 icon-filled">language</span>
                <div>
                  <div className="font-display text-white text-lg mb-1" style={{ fontWeight: 700 }}>Website mit Kundenportal</div>
                  <div className="text-white/60 text-sm leading-relaxed">Öffentliche Website inkl. Kundenportal für Auftraggeber — Projektstatus, Dokumente, Angebote.</div>
                </div>
              </div>
              <div className="rounded-xl p-5 flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(82,168,126,0.2)' }}>
                <span className="material-symbols-outlined text-fh-500 text-2xl flex-shrink-0 icon-filled">support_agent</span>
                <div>
                  <div className="font-display text-white text-lg mb-1" style={{ fontWeight: 700 }}>Laufender Betrieb & Support</div>
                  <div className="text-white/60 text-sm leading-relaxed">Feldhub hostet, wartet, aktualisiert und entwickelt das System kontinuierlich weiter.</div>
                </div>
              </div>
              <a href="https://ka-forstmanager.vercel.app" target="_blank" rel="noopener" className="flex items-center gap-2 text-am-400 hover:text-am-600 font-semibold text-sm transition-colors mt-2">
                <span className="material-symbols-outlined text-base">open_in_new</span>
                ForstManager live ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABLAUF / PROZESS
      ═══════════════════════════════════════════════════════ */}
      <section id="ablauf" className="bg-st-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-am-600 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>So läuft es ab</p>
            <h2 className="font-display text-tx leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800 }}>
              Von der ersten Anfrage<br/>bis zum laufenden Betrieb.
            </h2>
            <p className="text-tx-m text-lg max-w-lg mx-auto">
              Kein monatelanger Einführungsprozess. Kein teures Beratungsprojekt. Direkt, ehrlich, schnell.
            </p>
          </div>

          <div className="space-y-0">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-fh-800 flex items-center justify-center font-display text-white text-lg shadow-md z-10" style={{ fontWeight: 900 }}>01</div>
                <div className="w-px flex-1 min-h-12" style={{ borderLeft: '2px dashed #C8852A', marginTop: '4px', marginBottom: '4px' }}></div>
              </div>
              <div className="pb-12">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-2xl text-tx" style={{ fontWeight: 700 }}>Erstgespräch & Analyse</h3>
                  <span className="bg-fh-100 text-fh-700 text-xs font-semibold px-3 py-1 rounded-full">Kostenlos</span>
                </div>
                <p className="text-tx-m leading-relaxed mb-4">
                  Wir lernen Ihren Betrieb kennen: Wie viele Mitarbeiter? Welche Prozesse? Was nervt am meisten? Welche Systeme nutzen Sie heute? 30 Minuten reichen für ein klares Bild — und ehrlich gesagt verstehen wir in diesen 30 Minuten oft schon, was Sie brauchen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">Videocall oder Vor-Ort</span>
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">30–45 Minuten</span>
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">Unverbindlich</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-fh-800 flex items-center justify-center font-display text-white text-lg shadow-md z-10" style={{ fontWeight: 900 }}>02</div>
                <div className="w-px flex-1 min-h-12" style={{ borderLeft: '2px dashed #C8852A', marginTop: '4px', marginBottom: '4px' }}></div>
              </div>
              <div className="pb-12">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-2xl text-tx" style={{ fontWeight: 700 }}>Angebot & Konfiguration</h3>
                  <span className="bg-am-100 text-am-600 text-xs font-semibold px-3 py-1 rounded-full">2–4 Wochen</span>
                </div>
                <p className="text-tx-m leading-relaxed mb-4">
                  Sie erhalten ein klares Angebot mit Einmalkosten und monatlicher Gebühr. Nach Beauftragung konfigurieren wir Ihr System — basierend auf unserem bewährten Template, angepasst an Ihre Prozesse. Sie sehen Fortschritte, können Feedback geben, und am Ende starten Sie mit einem System, das zu Ihrem Betrieb passt.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">Setup-Fee einmalig</span>
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">Monatliche Nutzungsgebühr</span>
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">Transparent & fair</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-am-600 flex items-center justify-center font-display text-white text-lg shadow-md z-10" style={{ fontWeight: 900 }}>03</div>
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-2xl text-tx" style={{ fontWeight: 700 }}>Go Live & dauerhafter Support</h3>
                  <span className="bg-fh-100 text-fh-700 text-xs font-semibold px-3 py-1 rounded-full">Dauerhaft</span>
                </div>
                <p className="text-tx-m leading-relaxed mb-4">
                  Sie arbeiten — wir kümmern uns ums System. Hosting, Updates, neue Funktionen, technische Probleme: Das ist unser Job. Sie bekommen keine Handbücher und keine Tickets ins Nirgendwo. Sie haben einen direkten Ansprechpartner.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">Persönlicher Ansprechpartner</span>
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">Laufende Weiterentwicklung</span>
                  <span className="bg-white border border-st-200 text-tx-m text-xs px-3 py-1 rounded-full">Hosting inklusive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PREISMODELL
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-am-600 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Preismodell</p>
            <h2 className="font-display text-tx leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800 }}>
              Klar, fair, ohne Überraschungen.
            </h2>
            <p className="text-tx-m text-lg max-w-lg mx-auto">
              Wir nennen Ihnen nach dem ersten Gespräch einen konkreten Preis — abgestimmt auf Ihren Betrieb und den Umfang des Systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Setup Fee */}
            <div className="rounded-2xl p-8 border-2 border-st-200" style={{ background: '#F8F5EF' }}>
              <div className="w-12 h-12 rounded-xl bg-st-200 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-tx text-2xl">build</span>
              </div>
              <h3 className="font-display text-2xl text-tx mb-2" style={{ fontWeight: 700 }}>Einmalige Setup-Fee</h3>
              <p className="text-tx-m leading-relaxed mb-5 text-sm">
                Deckung der Konfiguration, Einrichtung, Schulung und initialen Entwicklung. Einmalig. Kein monatliches Abo.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-tx">
                  <span className="material-symbols-outlined icon-filled text-fh-600 text-base">check_circle</span>
                  Systemkonfiguration für Ihren Betrieb
                </li>
                <li className="flex items-center gap-2 text-sm text-tx">
                  <span className="material-symbols-outlined icon-filled text-fh-600 text-base">check_circle</span>
                  Einrichtung Web + Mobile App
                </li>
                <li className="flex items-center gap-2 text-sm text-tx">
                  <span className="material-symbols-outlined icon-filled text-fh-600 text-base">check_circle</span>
                  Schulung Ihres Teams
                </li>
                <li className="flex items-center gap-2 text-sm text-tx">
                  <span className="material-symbols-outlined icon-filled text-fh-600 text-base">check_circle</span>
                  Go-Live-Support
                </li>
              </ul>
            </div>
            {/* Monthly */}
            <div className="rounded-2xl p-8 border-2 border-fh-700 bg-fh-800 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-am-600 text-white text-xs px-3 py-1 rounded-full" style={{ fontWeight: 700 }}>Monatlich</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-fh-700 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-am-400 text-2xl">repeat</span>
              </div>
              <h3 className="font-display text-2xl text-white mb-2" style={{ fontWeight: 700 }}>Nutzungsgebühr</h3>
              <p className="text-fh-300 leading-relaxed mb-5 text-sm">
                Deckung von Hosting, laufendem Support, Updates und Weiterentwicklung. Monatlich kündbar — kein Jahresvertrag.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-white">
                  <span className="material-symbols-outlined icon-filled text-am-400 text-base">check_circle</span>
                  Hosting & Infrastruktur
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <span className="material-symbols-outlined icon-filled text-am-400 text-base">check_circle</span>
                  Laufende Updates & Sicherheit
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <span className="material-symbols-outlined icon-filled text-am-400 text-base">check_circle</span>
                  Persönlicher Support-Kontakt
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <span className="material-symbols-outlined icon-filled text-am-400 text-base">check_circle</span>
                  Weiterentwicklung nach Bedarf
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-tx-m text-sm mt-8">
            Konkrete Preise nach dem ersten Gespräch — fair und transparent. <a href="#kontakt" className="text-fh-700 font-semibold hover:underline">Jetzt anfragen →</a>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ÜBER UNS
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-st-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-am-600 text-sm uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Über Feldhub</p>
              <h2 className="font-display text-tx leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800 }}>
                Kein anonymes SaaS-Unternehmen.<br/>Ein Team, das mitdenkt.
              </h2>
              <p className="text-tx-m leading-relaxed mb-5">
                Feldhub ist ein spezialisiertes Software-Studio, das digitale Betriebssysteme für Außendienst-Unternehmen baut. Wir sind kein großes Unternehmen mit Salesteam und Call-Center — und das ist Absicht.
              </p>
              <p className="text-tx-m leading-relaxed">
                Sie bekommen einen direkten Draht. Wenn Sie anrufen, landet das nicht in einem Queue. Wir kennen Ihr System, wir kennen Ihren Betrieb, und wir entwickeln langfristig mit Ihnen weiter.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-start gap-4 border border-st-200">
                <span className="material-symbols-outlined icon-filled text-fh-600 text-2xl flex-shrink-0">location_on</span>
                <div>
                  <div className="font-semibold text-tx mb-1">Made in Germany</div>
                  <div className="text-tx-m text-sm">DSGVO-konform, deutschsprachiger Support, Server in Deutschland.</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-start gap-4 border border-st-200">
                <span className="material-symbols-outlined icon-filled text-fh-600 text-2xl flex-shrink-0">handshake</span>
                <div>
                  <div className="font-semibold text-tx mb-1">Langfristige Partnerschaft</div>
                  <div className="text-tx-m text-sm">Wir wachsen mit Ihrem Betrieb — keine einmaligen Projekte, keine Übergabe und Tschüss.</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-start gap-4 border border-st-200">
                <span className="material-symbols-outlined icon-filled text-fh-600 text-2xl flex-shrink-0">workspace_premium</span>
                <div>
                  <div className="font-semibold text-tx mb-1">Branchenerfahrung</div>
                  <div className="text-tx-m text-sm">Nicht Theorie aus dem Lehrbuch — sondern echte Erfahrung aus laufenden Kundenprojekten.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINALER CTA / KONTAKT
      ═══════════════════════════════════════════════════════ */}
      <section id="kontakt" className="hero-bg furrow-texture py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-am-400 text-sm uppercase tracking-widest mb-4" style={{ fontWeight: 700 }}>Jetzt starten</p>
          <h2 className="font-display text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900 }}>
            Bereit, Ihren Betrieb<br/>zu digitalisieren?
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            In 30 Minuten zeigen wir Ihnen, wie ein digitales Betriebssystem für Ihr Unternehmen konkret aussehen kann — kostenlos, unverbindlich, ehrlich.
          </p>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 text-left shadow-xl">
            <h3 className="font-display text-xl text-tx mb-6" style={{ fontWeight: 700 }}>Demo anfragen</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-tx mb-2">Ihr Name *</label>
                  <input type="text" placeholder="Max Müller" className="w-full border border-st-200 rounded-lg px-4 py-3 text-tx text-sm focus:outline-none focus:border-fh-700 focus:ring-2 focus:ring-fh-100 transition-colors bg-st-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-tx mb-2">Unternehmen *</label>
                  <input type="text" placeholder="Müller Forstbetrieb GmbH" className="w-full border border-st-200 rounded-lg px-4 py-3 text-tx text-sm focus:outline-none focus:border-fh-700 focus:ring-2 focus:ring-fh-100 transition-colors bg-st-50" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-tx mb-2">E-Mail *</label>
                  <input type="email" placeholder="max@forstbetrieb.de" className="w-full border border-st-200 rounded-lg px-4 py-3 text-tx text-sm focus:outline-none focus:border-fh-700 focus:ring-2 focus:ring-fh-100 transition-colors bg-st-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-tx mb-2">Branche</label>
                  <select className="w-full border border-st-200 rounded-lg px-4 py-3 text-tx text-sm focus:outline-none focus:border-fh-700 focus:ring-2 focus:ring-fh-100 transition-colors bg-st-50 appearance-none">
                    <option value="">Bitte wählen...</option>
                    <option>Forstwirtschaft</option>
                    <option>Garten- & Landschaftsbau</option>
                    <option>Tief- & Straßenbau</option>
                    <option>Landwirtschaft</option>
                    <option>Gebäudereinigung</option>
                    <option>Handwerk & Montage</option>
                    <option>Andere</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-tx mb-2">Was ist Ihr größtes Problem im Außendienst?</label>
                <textarea rows={3} placeholder="z.B. Wir haben 15 Mitarbeiter im Außendienst und koordinieren alles noch per Telefon und Papier..." className="w-full border border-st-200 rounded-lg px-4 py-3 text-tx text-sm focus:outline-none focus:border-fh-700 focus:ring-2 focus:ring-fh-100 transition-colors bg-st-50 resize-none"></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-fh-800 hover:bg-fh-700 text-white font-display text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-md" style={{ fontWeight: 700 }}>
                  Anfrage absenden
                  <span className="material-symbols-outlined">send</span>
                </button>
                <p className="text-tx-m text-sm">oder direkt: <a href="mailto:kontakt@feldhub.de" className="text-fh-700 font-semibold hover:underline">kontakt@feldhub.de</a></p>
              </div>
              <p className="text-tx-m text-xs">* Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht weitergegeben. Datenschutzerklärung.</p>
            </form>
          </div>

          {/* Additional trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="material-symbols-outlined icon-filled text-fh-500 text-base">verified_user</span>
              Kostenlos & unverbindlich
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="material-symbols-outlined icon-filled text-fh-500 text-base">schedule</span>
              Antwort innerhalb 24h
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="material-symbols-outlined icon-filled text-fh-500 text-base">lock</span>
              DSGVO-konform
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════ */}
      <footer className="bg-fh-900 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-white/10">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-4">
                <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
                  <path d="M30 3L55.98 18V48L30 57L4.02 48V18L30 3Z" fill="#2D6A4F"/>
                  <line x1="16" y1="35" x2="32" y2="16" stroke="#C8852A" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="22" y1="42" x2="42" y2="18" stroke="#C8852A" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <span className="font-display text-xl text-white" style={{ fontWeight: 800 }}>feldhub</span>
              </a>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Digitale Betriebssysteme für Unternehmen im Außendienst. Maßgeschneidert. Modern. Zuverlässig.
              </p>
              <p className="text-white/30 text-xs mt-4 italic">&ldquo;Digitale Systeme. Für echte Arbeit.&rdquo;</p>
            </div>
            {/* Links */}
            <div>
              <h4 className="font-display text-white text-sm uppercase tracking-widest mb-4" style={{ fontWeight: 700 }}>Leistungen</h4>
              <ul className="space-y-2">
                <li><a href="#leistungen" className="text-white/50 hover:text-white text-sm transition-colors">Auftragsmanagement</a></li>
                <li><a href="#leistungen" className="text-white/50 hover:text-white text-sm transition-colors">Mobile App</a></li>
                <li><a href="#leistungen" className="text-white/50 hover:text-white text-sm transition-colors">Felddokumentation</a></li>
                <li><a href="#branchen"   className="text-white/50 hover:text-white text-sm transition-colors">Alle Branchen</a></li>
                <li><a href="#referenz"   className="text-white/50 hover:text-white text-sm transition-colors">Referenzprojekte</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="font-display text-white text-sm uppercase tracking-widest mb-4" style={{ fontWeight: 700 }}>Kontakt</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="material-symbols-outlined text-fh-500 text-base">mail</span>
                  kontakt@feldhub.de
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="material-symbols-outlined text-fh-500 text-base">language</span>
                  feldhub.de
                </li>
                <li className="mt-4">
                  <a href="#kontakt" className="inline-flex items-center gap-2 bg-am-600 hover:bg-am-400 text-white text-sm font-semibold px-4 py-2 rounded transition-colors">
                    Demo anfragen
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">© 2026 Feldhub. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Impressum</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Datenschutz</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
