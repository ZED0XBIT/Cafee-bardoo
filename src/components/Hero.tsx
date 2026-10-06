import React from 'react';
import { ThemeMode, Language } from '../types';
import { Clock, MapPin, ChevronRight } from 'lucide-react';
import { DowntownLogo } from './DowntownLogo';
import { getTranslation } from '../data/translations';
import storefrontImg from '../assets/images/downtown_real_storefront_1789858082265.jpg';
import nightStorefrontImg from '../assets/images/night_lounge_storefront_1785166362526.jpg';

interface HeroProps {
  themeMode: ThemeMode;
  language: Language;
  onToggleTheme: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  themeMode,
  language,
  onToggleTheme,
  onOpenReservation
}) => {
  const t = getTranslation(language).hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden w-full max-w-[100vw] bg-[#6c190e] text-[#f7ede0] transition-colors duration-700">
      {/* Background dot grid effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(247,237,224,0.18) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-[1220px] mx-auto px-3.5 sm:px-4 md:px-8 relative z-10 w-full overflow-hidden">
        {/* Top Eyebrow & Mode Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
          <div className="font-oswald font-semibold text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#f7ede0] flex items-center gap-2 sm:gap-3">
            <span className="text-[#e07a52]">◆</span>
            <span>{t.eyebrow}</span>
            <span className="text-[#e07a52]">◆</span>
          </div>

          <div
            onClick={onToggleTheme}
            className="inline-flex items-center gap-1 bg-[#160b06]/40 border-2 border-[#f7ede0]/40 rounded-full p-1 cursor-pointer select-none transition-all hover:border-[#f7ede0]"
            role="button"
            title="Toggle Day / Night Vibe"
          >
            <span
              className={`font-oswald text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all ${
                themeMode === 'day'
                  ? 'bg-[#f7ede0] text-[#6c190e] shadow-md font-bold'
                  : 'text-[#f7ede0]/70 hover:text-[#f7ede0]'
              }`}
            >
              {t.morningLabel}
            </span>
            <span
              className={`font-oswald text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all ${
                themeMode === 'night'
                  ? 'bg-[#e07a52] text-[#160b06] shadow-md font-bold'
                  : 'text-[#f7ede0]/70 hover:text-[#f7ede0]'
              }`}
            >
              {t.midnightLabel}
            </span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="mb-4 inline-block">
              <DowntownLogo size="lg" />
            </div>

            <h1 className="font-alfa text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-[#f7ede0] drop-shadow-[3px_3px_0px_#1c1108]">
              {t.headingPart1}<br />
              {t.headingPart2}{' '}
              <em className="not-italic text-[#e07a52] underline decoration-4 underline-offset-8">
                {t.headingHighlight}
              </em>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#e7d8bd] leading-relaxed max-w-xl font-normal">
              {t.paragraph}
            </p>

            {/* Meta Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              <div className="border-2 border-[#f7ede0]/40 rounded-xl p-3.5 bg-[#160b06]/20 backdrop-blur-sm">
                <div className="font-oswald text-[11px] font-semibold uppercase tracking-widest text-[#e07a52] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {t.badgeHoursLabel}
                </div>
                <div className="font-oswald text-base font-semibold text-[#f7ede0] mt-1">
                  {t.badgeHoursValue}
                </div>
              </div>

              <div className="border-2 border-[#f7ede0]/40 rounded-xl p-3.5 bg-[#160b06]/20 backdrop-blur-sm">
                <div className="font-oswald text-[11px] font-semibold uppercase tracking-widest text-[#e07a52] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {t.badgeBardoLabel}
                </div>
                <div className="font-oswald text-base font-semibold text-[#f7ede0] mt-1">
                  {t.badgeBardoValue}
                </div>
              </div>

              <div className="border-2 border-[#f7ede0]/40 rounded-xl p-3.5 bg-[#160b06]/20 backdrop-blur-sm">
                <div className="font-oswald text-[11px] font-semibold uppercase tracking-widest text-[#e07a52] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {t.badgeElAouinaLabel}
                </div>
                <div className="font-oswald text-base font-semibold text-[#f7ede0] mt-1">
                  {t.badgeElAouinaValue}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#menu"
                className="font-oswald text-sm sm:text-base font-semibold tracking-wider uppercase bg-[#f7ede0] text-[#6c190e] border-2 border-[#1c1108] px-8 py-4 rounded-full shadow-[inset_0_0_0_2px_#6c190e] transition-all hover:bg-[#e7d8bd] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>{t.ctaMenu}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenReservation}
                className="font-oswald text-sm sm:text-base font-semibold tracking-wider uppercase bg-transparent text-[#f7ede0] border-2 border-[#f7ede0] px-8 py-4 rounded-full shadow-[inset_0_0_0_2px_#4a1109] transition-all hover:bg-[#f7ede0] hover:text-[#6c190e] hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.ctaReserve}
              </button>
            </div>
          </div>

          {/* Right Image Frame with Vintage Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-h-[560px] mx-auto rounded-2xl overflow-hidden border-4 border-[#1c1108] shadow-[0_0_0_4px_#f7ede0] bg-[#160b06]">
              <img
                src={themeMode === 'night' ? nightStorefrontImg : storefrontImg}
                alt="DOWNTOWN Lounge and Pizza storefront in Tunis"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  filter: themeMode === 'night' ? 'brightness(0.9) contrast(1.05)' : 'none'
                }}
              />

              {/* Live status badge inside photo */}
              <div className="absolute top-4 left-4 bg-[#1c1108]/80 backdrop-blur-md border border-[#f7ede0]/30 rounded-full px-4 py-1.5 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-oswald text-xs font-semibold tracking-wider uppercase text-[#f7ede0]">
                  Open Now • Tunis
                </span>
              </div>
            </div>

            {/* Rotating Stamp Emblem */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 pointer-events-none drop-shadow-2xl">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="circlePathHero" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                </defs>
                <circle cx="100" cy="100" r="96" fill="#1c1108" />
                <circle cx="100" cy="100" r="88" fill="#6c190e" stroke="#f7ede0" strokeWidth="3" />
                <circle cx="100" cy="100" r="46" fill="none" stroke="#f7ede0" strokeWidth="2" />
                <text fontFamily="Oswald, sans-serif" fontSize="13" fontWeight="600" letterSpacing="2" fill="#f7ede0">
                  <textPath href="#circlePathHero" startOffset="0%">
                    OPEN DAILY ★ 06:30 – MIDNIGHT ★{' '}
                  </textPath>
                </text>
                <text x="100" y="94" textAnchor="middle" fontFamily="Alfa Slab One, serif" fontSize="20" fill="#f7ede0">
                  EST.
                </text>
                <text x="100" y="118" textAnchor="middle" fontFamily="Alfa Slab One, serif" fontSize="20" fill="#f7ede0">
                  TUNIS
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
