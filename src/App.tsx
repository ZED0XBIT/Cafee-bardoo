import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { LocationsSection } from './components/LocationsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { ThemeMode, Language, MenuItem, CartItem } from './types';
import { getTranslation } from './data/translations';

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('day');
  const [language, setLanguage] = useState<Language>('en');
  const [reservationOpen, setReservationOpen] = useState(false);
  const [reservationLocation, setReservationLocation] = useState('Bardo');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const tCta = getTranslation(language).ctaBanner;

  // Sync theme mode with document body
  useEffect(() => {
    if (themeMode === 'night') {
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
    }
  }, [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode(prev => (prev === 'day' ? 'night' : 'day'));
  };

  const handleOpenReservation = (locName?: string) => {
    if (locName) {
      setReservationLocation(locName);
    }
    setReservationOpen(true);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(c => c.item.id === item.id);
      if (existing) {
        return prev.map(c =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateCartQty = (itemId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(c => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, c) => acc + c.quantity, 0);

  return (
    <div className={`min-h-screen w-full max-w-[100vw] overflow-x-hidden transition-colors duration-700 ${themeMode === 'night' ? 'bg-[#160b06] text-[#f7ede0]' : 'bg-[#f7ede0] text-[#1c1108]'}`}>
      {/* Fixed Navigation Header */}
      <Header
        themeMode={themeMode}
        onToggleTheme={handleToggleTheme}
        language={language}
        onSelectLanguage={setLanguage}
        onOpenReservation={() => handleOpenReservation()}
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="w-full max-w-[100vw] overflow-x-hidden">
        <Hero
          themeMode={themeMode}
          language={language}
          onToggleTheme={handleToggleTheme}
          onOpenReservation={() => handleOpenReservation()}
        />

        <StorySection themeMode={themeMode} language={language} />

        <MenuSection
          language={language}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
          onUpdateCartQty={handleUpdateCartQty}
          onOpenCart={() => setCartDrawerOpen(true)}
        />

        <LocationsSection language={language} onOpenReservation={handleOpenReservation} />

        <GallerySection language={language} />

        <ReviewsSection language={language} />

        {/* CTA Banner Strip */}
        <section className="bg-[#1c1108] text-[#f7ede0] text-center py-20 border-t-2 border-[#f7ede0]/20">
          <div className="max-w-[1220px] mx-auto px-4">
            <div className="font-oswald text-xs font-semibold uppercase tracking-[0.2em] text-[#e07a52] flex items-center justify-center gap-2 mb-3">
              <span>◆</span>
              <span>{tCta.eyebrow}</span>
              <span>◆</span>
            </div>

            <h2 className="font-alfa text-3xl sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-tight">
              {tCta.headingPart1}<br />{tCta.headingPart2}
            </h2>

            <p className="mt-4 text-[#d9c2a8] text-base max-w-xl mx-auto">
              {tCta.paragraph}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                href="tel:+21624387243"
                className="font-oswald text-sm font-semibold tracking-wider uppercase bg-[#6c190e] hover:bg-[#8a2418] text-[#f7ede0] border-2 border-[#1c1108] px-8 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
              >
                {tCta.callBardo}
              </a>

              <a
                href="tel:+21671760110"
                className="font-oswald text-sm font-semibold tracking-wider uppercase bg-transparent hover:bg-[#f7ede0] hover:text-[#1c1108] text-[#f7ede0] border-2 border-[#f7ede0] px-8 py-4 rounded-full transition-all"
              >
                {tCta.callElAouina}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
        preselectedLocation={reservationLocation}
        language={language}
      />

      {/* Table Bill Estimator Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateCartQty={handleUpdateCartQty}
        onClearCart={handleClearCart}
        onOpenReservation={() => handleOpenReservation()}
        language={language}
      />
    </div>
  );
}
