import React, { useState } from 'react';
import { LOCATIONS_DATA } from '../data/locationsData';
import { MapPin, Phone, Clock, Navigation, ExternalLink, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../data/translations';

interface LocationsSectionProps {
  language: Language;
  onOpenReservation: (locationName?: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ language, onOpenReservation }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('bardo');

  const t = getTranslation(language).locations;
  const selectedLoc = LOCATIONS_DATA.find(l => l.id === selectedLocationId) || LOCATIONS_DATA[0];

  return (
    <section id="locations" className="py-24 bg-[#241209] text-[#f7ede0]">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-oswald font-semibold text-xs md:text-sm tracking-[0.2em] uppercase text-[#e07a52] flex items-center gap-2">
              <span>◆</span>
              <span>{t.eyebrow}</span>
              <span>◆</span>
            </div>
            <h2 className="font-alfa text-3xl sm:text-5xl md:text-6xl text-[#f7ede0] mt-3 leading-tight">
              {t.heading}
            </h2>
          </div>

          <p className="max-w-md text-[#d9c2a8] text-base sm:text-lg leading-relaxed">
            {t.paragraph}
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex items-center gap-4 mb-8 border-b border-[#f7ede0]/20 pb-4">
          {LOCATIONS_DATA.map(loc => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocationId(loc.id)}
              className={`font-oswald text-base sm:text-lg font-bold tracking-wider uppercase px-6 py-3 rounded-xl border-2 transition-all flex items-center gap-2 ${
                selectedLocationId === loc.id
                  ? 'bg-[#6c190e] border-[#f7ede0] text-[#f7ede0] shadow-lg'
                  : 'bg-[#160b06]/60 border-transparent text-[#f7ede0]/60 hover:text-[#f7ede0]'
              }`}
            >
              <MapPin className="w-4 h-4 text-[#e07a52]" />
              <span>{loc.name}</span>
            </button>
          ))}
        </div>

        {/* Active Location Detail Card */}
        <div className="bg-[#160b06] border-4 border-[#1c1108] rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Information Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="font-oswald text-xs font-semibold uppercase tracking-widest text-[#e07a52]">
                {selectedLocationId === 'bardo' ? t.bardoTag : t.elAouinaTag}
              </div>
              <h3 className="font-alfa text-3xl sm:text-4xl md:text-5xl text-[#f7ede0] mt-1">
                DOWNTOWN {selectedLoc.name}
              </h3>
            </div>

            <div className="space-y-4 border-y border-[#f7ede0]/15 py-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e07a52] shrink-0 mt-1" />
                <div>
                  <div className="font-oswald text-xs uppercase tracking-wider text-[#e07a52]">Adresse</div>
                  <div className="text-base font-semibold text-[#f7ede0]">
                    {selectedLocationId === 'bardo' ? t.bardoAddress : t.elAouinaAddress}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#e07a52] shrink-0 mt-1" />
                <div>
                  <div className="font-oswald text-xs uppercase tracking-wider text-[#e07a52]">Horaires</div>
                  <div className="text-base font-semibold text-[#f7ede0]">
                    {selectedLocationId === 'bardo' ? t.bardoHours : t.elAouinaHours}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#e07a52] shrink-0 mt-1" />
                <div>
                  <div className="font-oswald text-xs uppercase tracking-wider text-[#e07a52]">{t.callTable}</div>
                  <div className="text-base font-semibold text-[#f7ede0]">
                    <a href={`tel:${selectedLoc.phone.replace(/\s+/g, '')}`} className="underline hover:text-[#e07a52]">
                      {selectedLocationId === 'bardo' ? t.bardoPhone : t.elAouinaPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-[#e07a52] shrink-0 mt-1" />
                <div>
                  <div className="font-oswald text-xs uppercase tracking-wider text-[#e07a52]">Repère / Landmark</div>
                  <div className="text-sm text-[#d9c2a8]">{selectedLoc.near}</div>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div>
              <div className="font-oswald text-xs font-semibold uppercase tracking-widest text-[#e07a52] mb-3">
                Highlights
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedLoc.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#f7ede0]">
                    <CheckCircle className="w-4 h-4 text-[#e07a52] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={selectedLoc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-oswald text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#6c190e] hover:bg-[#8a2418] text-[#f7ede0] px-6 py-3.5 rounded-full border-2 border-[#1c1108] shadow-md flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <span>{t.getDirections}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenReservation(selectedLoc.name)}
                className="font-oswald text-xs sm:text-sm font-semibold tracking-wider uppercase bg-transparent text-[#f7ede0] border-2 border-[#f7ede0] hover:bg-[#f7ede0] hover:text-[#1c1108] px-6 py-3.5 rounded-full transition-all"
              >
                {t.callTable} ({selectedLoc.name})
              </button>
            </div>
          </div>

          {/* Location Image Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#f7ede0]/20 shadow-2xl">
              <img
                src={selectedLoc.image}
                alt={`DOWNTOWN ${selectedLoc.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160b06] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#160b06]/90 backdrop-blur-md border border-[#f7ede0]/20 text-center">
                <p className="font-oswald text-sm font-semibold uppercase text-[#f7ede0]">
                  Open 7/7 • 06:30 AM — 00:00 AM
                </p>
                <p className="text-xs text-[#d9c2a8] mt-1">
                  Bardo &amp; El Aouina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
