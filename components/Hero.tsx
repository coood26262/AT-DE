import React from 'react';
import { Star, Video } from 'lucide-react';

export const Hero: React.FC = () => {
  // Determine affiliate link based on URL path
  const getAffiliateLink = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/ca' || path === '/ca/') {
        return 'https://trksy.org/aff_c?offer_id=3530&aff_id=2609';
      }
    }
    return 'https://trksy.org/aff_c?offer_id=3530&aff_id=2609';
  };

  const affiliateLink = getAffiliateLink();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden pb-20">
      {/* Hero-Bereich */}
      <div className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Haupttitel */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Verdiene <span className="text-green-500">300€+</span> pro Tag
            <br />
            durch Videos schauen
          </h1>

          {/* Untertitel */}
          <p className="text-lg sm:text-xl text-slate-400 mb-6 max-w-3xl mx-auto">
            Werde bezahlt für das Bewerten von Videos, Testen von Apps und Umfragen. Schau <span className="font-semibold text-white">5 Min</span> und verdiene bis zu{' '}
            <span className="font-semibold text-green-500">18€</span>.
          </p>

          {/* Sternebewertung */}
          <div className="flex items-center justify-center gap-2 mb-8 bg-white/5 border border-white/10 rounded-full px-6 py-3 inline-flex mx-auto">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-green-500 fill-green-500" />
              ))}
            </div>
            <span className="text-white font-bold text-lg ml-2">4.9</span>
            <span className="text-slate-400 ml-1">(6.000+ Bewertungen)</span>
          </div>

          {/* CTA-Button */}
          <a
            href={affiliateLink}
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).ttq) {
                (window as any).ttq.track('ClickButton', {
                  content_name: 'Start Earning Now - Hero',
                  content_category: 'CTA'
                });
              }
            }}
            className="inline-block bg-green-600 hover:bg-green-700 text-black font-bold text-lg px-12 py-5 rounded-xl transition-all shadow-2xl shadow-green-500/40 active:scale-95 transform duration-100 mb-12"
          >
            JETZT GELD VERDIENEN
          </a>

          {/* Statistik-Bereich */}
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-12 mt-8">
            <div className="flex flex-col items-center">
              <div className="text-xs text-green-500 font-bold uppercase tracking-wide mb-1">INSGESAMT AUSGEZAHLT</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">88 Millionen €</div>
              <div className="text-xs text-slate-500">an Nutzer</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <div className="text-xs text-green-500 font-bold uppercase tracking-wide mb-1">VERTRAUT VON</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">17 Millionen</div>
              <div className="text-xs text-slate-500">verifizierten Nutzern</div>
            </div>
          </div>
        </div>
      </div>

      {/* Empfohlene Videos */}
      <div className="relative px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Bereichsüberschrift */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Video className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">Empfohlene Videos</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 text-sm font-semibold">Live verdienen</span>
            </div>
          </div>

          {/* Video-Karten - horizontales Scrollen */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4">
            {/* ASMR-Karte */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-pink-900/20 to-green-900/20 overflow-hidden">
                <img
                  src="/asmr.gif"
                  alt="ASMR-Video"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Kategorie-Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    ASMR
                  </span>
                </div>

                {/* Abspielen-Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-pink-500/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">Entspannendes ASMR</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Möglicher Verdienst</div>
                  <div className="text-2xl font-bold text-green-500">
                    2,30€ <span className="text-sm text-slate-400">/ Video</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - ASMR Video',
                        content_category: 'Video Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Ansehen
                </a>
              </div>
            </div>

            {/* Trending-Karte */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-orange-900/20 to-red-900/20 overflow-hidden">
                <img
                  src="/dance-viral.gif"
                  alt="Trendiges Tanzvideo"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Kategorie-Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                    IM TREND
                  </span>
                </div>

                {/* Abspielen-Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">Virale Tanz-Challenges</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Möglicher Verdienst</div>
                  <div className="text-2xl font-bold text-green-500">
                    2,95€ <span className="text-sm text-slate-400">/ Video</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - Trending Dance Video',
                        content_category: 'Video Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Ansehen
                </a>
              </div>
            </div>

            {/* Tanz-Karte */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-blue-900/20 to-green-900/20 overflow-hidden">
                <img
                  src="/dance-moves.gif"
                  alt="Tanzbewegungen und Vibes"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Kategorie-Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    TANZ
                  </span>
                </div>

                {/* Abspielen-Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">Neue Moves & Vibes</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Möglicher Verdienst</div>
                  <div className="text-2xl font-bold text-green-500">
                    1,65€ <span className="text-sm text-slate-400">/ Video</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - Dance Moves Video',
                        content_category: 'Video Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Ansehen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
