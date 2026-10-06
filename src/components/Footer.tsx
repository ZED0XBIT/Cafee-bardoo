import React from 'react';
import { Phone, Instagram, Facebook, Clock, ChevronUp } from 'lucide-react';
import { DowntownLogo } from './DowntownLogo';
import { Language } from '../types';
import { getTranslation } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = getTranslation(language).footer;
  const navT = getTranslation(language).nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#160b06] text-[#f7ede0] pt-20 pb-12 border-t-4 border-[#1c1108]">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b-2 border-[#f7ede0]/15">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <DowntownLogo size="lg" />
              <div>
                <b className="font-alfa text-2xl text-[#f7ede0]">DOWNTOWN</b>
                <span className="font-oswald text-xs block text-[#e07a52] uppercase tracking-widest">
                  {navT.locationsShort}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#d9c2a8] leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/downtown_lounge_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#241209] border border-[#f7ede0]/30 hover:bg-[#6c190e] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#f7ede0]" />
              </a>
              <a
                href="https://www.facebook.com/downtown.lounge.laouina/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#241209] border border-[#f7ede0]/30 hover:bg-[#6c190e] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#f7ede0]" />
              </a>
            </div>
          </div>

          {/* Location 1: Bardo */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-oswald text-xs font-bold uppercase tracking-widest text-[#e07a52]">
              DOWNTOWN Le Bardo
            </h4>
            <p className="text-sm text-[#d9c2a8] leading-snug">
              {t.bardoShort}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#f7ede0] font-semibold mt-1">
              <Phone className="w-4 h-4 text-[#e07a52]" />
              <a href="tel:+21624387243" className="hover:underline">
                +216 24 387 243
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#d9c2a8] mt-1">
              <Clock className="w-3.5 h-3.5 text-[#e07a52]" />
              <span>{t.hoursMonSun}: {t.hoursTime}</span>
            </div>
          </div>

          {/* Location 2: El Aouina */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-oswald text-xs font-bold uppercase tracking-widest text-[#e07a52]">
              DOWNTOWN L&apos;Aouina
            </h4>
            <p className="text-sm text-[#d9c2a8] leading-snug">
              {t.elAouinaShort}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#f7ede0] font-semibold mt-1">
              <Phone className="w-4 h-4 text-[#e07a52]" />
              <a href="tel:+21671760110" className="hover:underline">
                71 760 110
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#d9c2a8] mt-1">
              <Clock className="w-3.5 h-3.5 text-[#e07a52]" />
              <span>{t.hoursMonSun}: {t.hoursTime}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-2 font-oswald text-sm font-semibold uppercase tracking-wider">
            <h4 className="text-xs font-bold tracking-widest text-[#e07a52] mb-1">
              {t.quickLinks}
            </h4>
            <a href="#menu" className="text-[#d9c2a8] hover:text-[#f7ede0] transition-colors">
              {navT.menu}
            </a>
            <a href="#story" className="text-[#d9c2a8] hover:text-[#f7ede0] transition-colors">
              {navT.story}
            </a>
            <a href="#locations" className="text-[#d9c2a8] hover:text-[#f7ede0] transition-colors">
              {navT.locations}
            </a>
            <a href="#gallery" className="text-[#d9c2a8] hover:text-[#f7ede0] transition-colors">
              {navT.gallery}
            </a>
            <a href="#reviews" className="text-[#d9c2a8] hover:text-[#f7ede0] transition-colors">
              {navT.reviews}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d9c2a8]">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 font-oswald uppercase tracking-wider text-[#e07a52] hover:text-[#f7ede0]"
          >
            <span>Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
