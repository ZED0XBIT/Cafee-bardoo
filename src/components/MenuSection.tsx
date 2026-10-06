import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategory, Language } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { Search, Plus, Minus, Filter } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface MenuSectionProps {
  language: Language;
  onAddToCart: (item: MenuItem) => void;
  cartItems: { item: MenuItem; quantity: number }[];
  onUpdateCartQty: (itemId: string, delta: number) => void;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  language,
  onAddToCart,
  cartItems,
  onUpdateCartQty,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('breakfast');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const t = getTranslation(language).menu;

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'breakfast', label: t.catBreakfast },
    { id: 'pizza', label: t.catPizza },
    { id: 'coffee', label: t.catCoffee },
    { id: 'lounge', label: t.catLounge },
    { id: 'desserts', label: t.catDesserts }
  ];

  const allTags = useMemo(() => {
    const set = new Set<string>();
    MENU_ITEMS.forEach(item => {
      item.tags?.forEach(tag => set.add(tag));
    });
    return Array.from(set);
  }, []);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = item.category === activeCategory;
      const itemName = language === 'fr' && item.nameFr ? item.nameFr : item.name;
      const itemDesc = language === 'fr' && item.descriptionFr ? item.descriptionFr : item.description;

      const matchesSearch =
        itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        itemDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        selectedTag === 'all' || (item.tags && item.tags.includes(selectedTag));
      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag, language]);

  const getItemQuantity = (itemId: string) => {
    const found = cartItems.find(c => c.item.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-24 bg-[#f7ede0]">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8">
        {/* Section Header */}
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

          <p className="max-w-md text-[#4a3527] text-base sm:text-lg leading-relaxed">
            {t.paragraph}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedTag('all');
              }}
              className={`font-oswald text-xs sm:text-sm font-semibold tracking-wider uppercase px-5 py-3 rounded-full border-2 border-[#1c1108] whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#6c190e] text-[#f7ede0] shadow-[inset_0_0_0_2px_#f7ede0]'
                  : 'bg-transparent text-[#1c1108] hover:bg-[#1c1108]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 p-4 rounded-2xl bg-[#fffaf1] border-2 border-[#1c1108] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a3527]" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#1c1108]/20 text-sm text-[#1c1108] placeholder:text-[#4a3527]/60 focus:outline-none focus:border-[#6c190e]"
            />
          </div>

          {/* Tags Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
            <span className="text-xs font-oswald uppercase tracking-wider text-[#4a3527] font-semibold flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setSelectedTag('all')}
              className={`text-xs font-oswald uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                selectedTag === 'all'
                  ? 'bg-[#1c1108] text-[#f7ede0] border-[#1c1108]'
                  : 'bg-white text-[#1c1108] border-[#1c1108]/20 hover:border-[#1c1108]'
              }`}
            >
              {t.allCategories}
            </button>
            {allTags.slice(0, 5).map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-xs font-oswald uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-[#6c190e] text-[#f7ede0] border-[#6c190e]'
                    : 'bg-white text-[#1c1108] border-[#1c1108]/20 hover:border-[#1c1108]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredItems.map(item => {
            const qty = getItemQuantity(item.id);
            const displayName = language === 'fr' && item.nameFr ? item.nameFr : item.name;
            const displayDesc = language === 'fr' && item.descriptionFr ? item.descriptionFr : item.description;

            return (
              <div
                key={item.id}
                className="bg-[#fffaf1] rounded-2xl p-5 border-2 border-[#1c1108] hover:shadow-lg transition-all flex flex-col sm:flex-row gap-5 relative group"
              >
                {/* Photo Thumbnail */}
                <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden border border-[#1c1108]/20 shrink-0 bg-[#160b06]/10 relative">
                  <img
                    src={item.image}
                    alt={displayName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isSignature && (
                    <span className="absolute top-2 left-2 bg-[#6c190e] text-[#f7ede0] text-[9px] font-oswald uppercase tracking-wider px-2 py-0.5 rounded-md font-bold shadow-md">
                      {t.badgeSignature}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-oswald text-xl font-bold text-[#1c1108]">
                        {displayName}
                      </h3>
                      <div className="font-alfa text-lg text-[#6c190e] whitespace-nowrap">
                        {item.price} DT
                      </div>
                    </div>

                    <p className="text-sm text-[#4a3527] mt-1.5 leading-relaxed font-normal">
                      {displayDesc}
                    </p>

                    {/* Item Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.tags.map(t => (
                          <span
                            key={t}
                            className="text-[10px] font-oswald uppercase tracking-wider bg-[#f7ede0] text-[#6c190e] px-2 py-0.5 rounded border border-[#6c190e]/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Order / Quantity Button */}
                  <div className="mt-4 pt-3 border-t border-dashed border-[#1c1108]/20 flex items-center justify-between">
                    <span className="text-xs text-[#4a3527] font-medium">
                      Table Estimator
                    </span>

                    {qty > 0 ? (
                      <div className="flex items-center gap-2 bg-[#6c190e] text-[#f7ede0] rounded-full p-1 border border-[#1c1108]">
                        <button
                          onClick={() => onUpdateCartQty(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-[#f7ede0] text-[#6c190e] flex items-center justify-center font-bold hover:bg-[#e7d8bd]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-oswald text-sm font-bold px-2">
                          {qty}
                        </span>
                        <button
                          onClick={() => onUpdateCartQty(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-[#f7ede0] text-[#6c190e] flex items-center justify-center font-bold hover:bg-[#e7d8bd]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToCart(item)}
                        className="font-oswald text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-transparent hover:bg-[#6c190e] text-[#6c190e] hover:text-[#f7ede0] border border-[#6c190e] transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" /> {t.addToEstimator}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#fffaf1] rounded-2xl border-2 border-dashed border-[#1c1108]/30 mt-8">
            <p className="font-oswald text-lg text-[#1c1108] uppercase">
              No items match your search or filter
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('all');
              }}
              className="mt-4 text-xs font-oswald uppercase tracking-wider underline text-[#6c190e]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
