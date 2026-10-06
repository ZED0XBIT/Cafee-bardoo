import React from 'react';
import { ThemeMode, Language } from '../types';
import { Coffee, Flame } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface StorySectionProps {
  themeMode: ThemeMode;
  language: Language;
}

export const StorySection: React.FC<StorySectionProps> = ({ language }) => {
  const t = getTranslation(language).story;

  return (
    <section id="story" className="py-24 transition-colors duration-700 bg-emerald-950/5 border-y border-[#1c1108]/10">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Header Column */}
          <div className="lg:col-span-5">
            <div className="font-oswald font-semibold text-xs md:text-sm tracking-[0.2em] uppercase text-[#6c190e] dark:text-[#e07a52] flex items-center gap-2">
              <span>◆</span>
              <span>{t.eyebrow}</span>
              <span>◆</span>
            </div>

            <h2 className="font-alfa text-3xl sm:text-4xl md:text-5xl mt-4 leading-tight text-[#1c1108]">
              {t.heading}
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/60 border border-[#1c1108]/10 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#6c190e] text-[#f7ede0] shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-oswald text-xs font-semibold uppercase tracking-wider text-[#6c190e]">06:30 — 12:00</div>
                  <div className="font-semibold text-sm text-[#1c1108]">{t.feat1Title}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-[#1c1108]/10 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#4a1109] text-[#f7ede0] shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-oswald text-xs font-semibold uppercase tracking-wider text-[#6c190e]">12:00 — 00:30</div>
                  <div className="font-semibold text-sm text-[#1c1108]">{t.feat2Title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-[#4a3527] font-normal">
              {t.paragraph1}
            </p>

            <p className="text-lg leading-relaxed text-[#4a3527] font-normal">
              {t.paragraph2}
            </p>

            {/* Figures Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="w-full aspect-square rounded-full border-4 border-[#1c1108] bg-[#6c190e] text-[#f7ede0] shadow-[inset_0_0_0_3px_#f7ede0] flex flex-col items-center justify-center text-center p-3">
                <div className="font-alfa text-xl sm:text-2xl">06:30</div>
                <div className="font-oswald text-[10px] uppercase tracking-wider text-[#e7d8bd] mt-1">Open</div>
              </div>

              <div className="w-full aspect-square rounded-full border-4 border-[#1c1108] bg-[#6c190e] text-[#f7ede0] shadow-[inset_0_0_0_3px_#f7ede0] flex flex-col items-center justify-center text-center p-3">
                <div className="font-alfa text-xl sm:text-2xl">2</div>
                <div className="font-oswald text-[10px] uppercase tracking-wider text-[#e7d8bd] mt-1">Spots</div>
              </div>

              <div className="w-full aspect-square rounded-full border-4 border-[#1c1108] bg-[#6c190e] text-[#f7ede0] shadow-[inset_0_0_0_3px_#f7ede0] flex flex-col items-center justify-center text-center p-3">
                <div className="font-alfa text-xl sm:text-2xl">00:30</div>
                <div className="font-oswald text-[10px] uppercase tracking-wider text-[#e7d8bd] mt-1">Midnight</div>
              </div>

              <div className="w-full aspect-square rounded-full border-4 border-[#1c1108] bg-[#6c190e] text-[#f7ede0] shadow-[inset_0_0_0_3px_#f7ede0] flex flex-col items-center justify-center text-center p-3">
                <div className="font-alfa text-xl sm:text-2xl">7/7</div>
                <div className="font-oswald text-[10px] uppercase tracking-wider text-[#e7d8bd] mt-1">7 Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
