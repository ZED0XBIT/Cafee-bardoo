import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../data/translations';
import storefrontImg from '../assets/images/downtown_storefront_main.jpg';
import nightStorefrontImg from '../assets/images/night_lounge_storefront_1785166362526.jpg';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'breakfast' | 'pizza' | 'atmosphere' | 'lounge';
}

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const t = getTranslation(language).gallery;

  const images: GalleryItem[] = [
    {
      id: 'g-0',
      src: storefrontImg,
      title: 'DOWNTOWN Lounge Storefront',
      category: 'atmosphere'
    },
    {
      id: 'g-night',
      src: nightStorefrontImg,
      title: 'DOWNTOWN Lounge at Night',
      category: 'lounge'
    },
    {
      id: 'g-1',
      src: 'https://lh3.googleusercontent.com/place-photos/AG9NLjD5dTNx8gq_9SmWimzr8aGR7vZUyqij5irgPeS1-eo573sLMqQwwd4eeM4lAuXO00UCRcIzZaZziRuToRDk8rOUiU3tNH2C-RvYCz4O9bV8zmO3WN1181JqXjgOzm6UOnJ5pkDpkIMeLr-pO2BfJnbS3w=s1000-w800-h1000',
      title: 'DOWNTOWN Morning Breakfast Table',
      category: 'breakfast'
    },
    {
      id: 'g-2',
      src: 'https://lh3.googleusercontent.com/place-photos/AG9NLjBv1C-zlnuExQBt7y9ZftV_2j2DgRa9fXjOgTef6hvqQFqOLi9bbch9Rjbo-KIlspGupBW8EHWnoOA6gARnZFrWgLWg2ruhlgKlFJx-8R0yDUcbxTxz_qearrusjwrwB81fkwyB7f22r-j9IN8=s800-w800-h600',
      title: 'Warm Interior & Lounge Seating',
      category: 'atmosphere'
    },
    {
      id: 'g-3',
      src: 'https://lh3.googleusercontent.com/place-photos/AG9NLjAFDG891DxYli8VFNwV-cvowyf_zpybpJtBWs4yfd3uPZQoc8jvVVnKm376M6ZmGBkd-ezrQqgi7RSyGQeJpVghfpyNtUolUlKQ34o29DziBg000z0r3iM4ueqUCiOIwYVF4ehudsYmE-9f=s800-w800-h600',
      title: 'Wood-Fired Pizza & Dishes',
      category: 'pizza'
    },
    {
      id: 'g-4',
      src: 'https://lh3.googleusercontent.com/place-photos/AG9NLjAiBcnej367bb1gYCLBwCeOCCKT1DgfVbXs-dhqdJrTxJq8quvPC7Z2yPmVjYoGkE4_DlSiQre_H4DbIkxERcO1KtCUqyLPwhP1HCE6Ypk824vRuhS6Qx7cX-fbM6RQq0g4H_dXv1skuCA_oy_JoiDz=s800-w800-h600',
      title: 'Evening Atmosphere & Shisha',
      category: 'lounge'
    },
    {
      id: 'g-5',
      src: 'https://lh3.googleusercontent.com/place-photos/AG9NLjDB6sEbVu0-1p2raG6j1Rfp8f8Pv7BdJTvC5VyFcln8OoZCxwNr_zLM4QmeL2ghc3URE1gZGf-fSlaIykRozXG6y33a3-E6AkqOIfmxgsAS_KG9akwmcmTtF3PdkaULmvXlN1EBBURV9igBbQw7o_Z60Q=s800-w800-h600',
      title: 'Signature Mocktails & Coffee Craft',
      category: 'breakfast'
    }
  ];

  const filteredImages = images.filter(
    img => activeFilter === 'all' || img.category === activeFilter
  );

  return (
    <section id="gallery" className="py-24 bg-[#f7ede0]">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-oswald font-semibold text-xs md:text-sm tracking-[0.2em] uppercase text-[#6c190e] flex items-center gap-2">
              <span>◆</span>
              <span>{t.eyebrow}</span>
              <span>◆</span>
            </div>
            <h2 className="font-alfa text-3xl sm:text-5xl md:text-6xl text-[#1c1108] mt-3 leading-tight">
              {t.heading}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: t.filterAll },
              { id: 'atmosphere', label: t.filterFacade },
              { id: 'pizza', label: t.filterFood },
              { id: 'breakfast', label: t.filterCoffee },
              { id: 'lounge', label: t.filterLounge }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`font-oswald text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#6c190e] text-[#f7ede0] border-[#1c1108]'
                    : 'bg-white text-[#1c1108] border-[#1c1108]/20 hover:border-[#1c1108]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img)}
              className={`group relative overflow-hidden rounded-2xl border-3 border-[#1c1108] bg-[#160b06] cursor-pointer aspect-square ${
                idx === 0 ? 'sm:col-span-2 sm:row-span-2 sm:aspect-auto min-h-[320px]' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160b06]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-oswald text-xs uppercase tracking-widest text-[#e07a52]">
                  {img.category}
                </span>
                <h4 className="font-oswald text-lg font-semibold text-[#f7ede0] flex items-center justify-between gap-2">
                  <span>{img.title}</span>
                  <ZoomIn className="w-5 h-5 text-[#f7ede0]" />
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 bg-[#160b06]/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-[#f7ede0] p-3 rounded-full bg-[#6c190e] border-2 border-[#1c1108] hover:bg-[#8a2418] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl border-4 border-[#1c1108] shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="font-oswald text-xs uppercase tracking-widest text-[#e07a52]">
                  DOWNTOWN {lightboxImage.category}
                </span>
                <h3 className="font-alfa text-xl sm:text-2xl text-[#f7ede0] mt-1">
                  {lightboxImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
