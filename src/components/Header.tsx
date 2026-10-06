import React, { useState, useEffect } from 'react';
import { Sun, Moon, MapPin, Calendar, Menu as MenuIcon, X, ShoppingBag, Phone, Languages } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { DowntownLogo } from './DowntownLogo';
import { getTranslation } from '../data/translations';

interface HeaderProps {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenReservation: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  themeMode,
  onToggleTheme,
  language,
  onSelectLanguage,
  onOpenReservation,
  cartCount,
  onOpenCart
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = getTranslation(language).nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-[100vw] ${
        scrolled
          ? 'bg-[#4a1109] py-2.5 sm:py-3 shadow-[0_2px_0_#1c1108]'
          : 'bg-[#4a1109]/95 md:bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-2.5 sm:px-4 md:px-8 w-full">
        <nav className="flex items-center justify-between w-full max-w-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group text-left shrink min-w-0">
            <DowntownLogo size={scrolled ? 'sm' : 'md'} />
            <div className="flex flex-col min-w-0">
              <b className="font-alfa text-base sm:text-lg md:text-xl text-[#f7ede0] tracking-wide leading-none group-hover:text-[#e7d8bd] transition-colors truncate">
                DOWNTOWN
              </b>
              <span className="font-oswald text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.18em] text-[#e07a52] uppercase mt-0.5 sm:mt-1 truncate">
                {t.locationsShort}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-oswald text-base font-semibold tracking-wider uppercase text-[#f7ede0]">
            <a href="#menu" className="hover:text-[#e7d8bd] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c94a35] hover:after:w-full after:transition-all">
              {t.menu}
            </a>
            <a href="#story" className="hover:text-[#e7d8bd] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c94a35] hover:after:w-full after:transition-all">
              {t.story}
            </a>
            <a href="#locations" className="hover:text-[#e7d8bd] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c94a35] hover:after:w-full after:transition-all">
              {t.locations}
            </a>
            <a href="#gallery" className="hover:text-[#e7d8bd] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c94a35] hover:after:w-full after:transition-all">
              {t.gallery}
            </a>
            <a href="#reviews" className="hover:text-[#e7d8bd] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c94a35] hover:after:w-full after:transition-all">
              {t.reviews}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#160b06]/60 border border-[#f7ede0]/30 rounded-full p-0.5 sm:p-1 text-[#f7ede0] gap-0.5 sm:gap-1 shadow-inner">
              <Languages className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1 text-[#e07a52]" />
              <button
                type="button"
                onClick={() => onSelectLanguage('en')}
                className={`px-1.5 sm:px-2 py-0.5 rounded-full font-oswald text-[10px] sm:text-[11px] font-bold uppercase transition-all ${
                  language === 'en'
                    ? 'bg-[#6c190e] text-[#f7ede0] shadow-sm'
                    : 'text-[#f7ede0]/70 hover:text-[#f7ede0]'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onSelectLanguage('fr')}
                className={`px-1.5 sm:px-2 py-0.5 rounded-full font-oswald text-[10px] sm:text-[11px] font-bold uppercase transition-all ${
                  language === 'fr'
                    ? 'bg-[#6c190e] text-[#f7ede0] shadow-sm'
                    : 'text-[#f7ede0]/70 hover:text-[#f7ede0]'
                }`}
                title="Français"
              >
                FR
              </button>
            </div>

            {/* Quick Cart / Estimator Toggle */}
            <button
              onClick={onOpenCart}
              className="relative p-2 sm:p-2.5 rounded-full bg-[#160b06]/50 border border-[#f7ede0]/30 text-[#f7ede0] hover:bg-[#6c190e] transition-colors shrink-0"
              title={t.billEstimator}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c94a35] text-[#f7ede0] font-oswald text-[10px] sm:text-[11px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-[#1c1108]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Theme / Time Mode Button (Visible on all viewports) */}
            <button
              onClick={onToggleTheme}
              className="p-2 sm:p-2.5 rounded-full bg-[#160b06]/50 border border-[#f7ede0]/30 text-[#f7ede0] hover:bg-[#6c190e] transition-colors flex items-center justify-center gap-1 sm:px-3 shrink-0"
              title={themeMode === 'day' ? t.switchToNight : t.switchToDay}
              aria-label={themeMode === 'day' ? t.switchToNight : t.switchToDay}
            >
              {themeMode === 'day' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span className="font-oswald text-xs uppercase font-semibold tracking-wide hidden sm:inline">{t.dayMode}</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-orange-400" />
                  <span className="font-oswald text-xs uppercase font-semibold tracking-wide hidden sm:inline">{t.nightMode}</span>
                </>
              )}
            </button>

            {/* Reserve Table Button (Desktop) */}
            <button
              onClick={onOpenReservation}
              className="hidden lg:inline-flex items-center gap-2 font-oswald text-xs md:text-sm font-semibold tracking-wider uppercase bg-[#6c190e] hover:bg-[#8a2418] text-[#f7ede0] px-5 py-2.5 rounded-full border-2 border-[#1c1108] shadow-[inset_0_0_0_2px_#f7ede0] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.reserve}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 sm:p-2.5 rounded-full bg-[#160b06]/50 text-[#f7ede0] border border-[#f7ede0]/30 shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 px-4 bg-[#241209] rounded-2xl border-2 border-[#1c1108] shadow-2xl text-[#f7ede0] flex flex-col gap-3.5 font-oswald uppercase text-sm sm:text-base font-semibold tracking-wider w-full max-w-full overflow-hidden">
            {/* Mobile Language Switcher Row */}
            <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#160b06] border border-[#f7ede0]/20 normal-case">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#f7ede0]">
                <Languages className="w-4 h-4 text-[#e07a52]" />
                <span>Language / Langue</span>
              </div>
              <div className="flex items-center bg-[#241209] p-1 rounded-lg border border-[#f7ede0]/20 gap-1 font-oswald uppercase">
                <button
                  onClick={() => onSelectLanguage('en')}
                  className={`px-2.5 py-1 rounded font-oswald text-xs font-bold transition-colors ${
                    language === 'en' ? 'bg-[#6c190e] text-[#f7ede0]' : 'text-[#f7ede0]/60'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => onSelectLanguage('fr')}
                  className={`px-2.5 py-1 rounded font-oswald text-xs font-bold transition-colors ${
                    language === 'fr' ? 'bg-[#6c190e] text-[#f7ede0]' : 'text-[#f7ede0]/60'
                  }`}
                >
                  Français
                </button>
              </div>
            </div>

            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f7ede0]/10 hover:text-[#e07a52]"
            >
              {t.menuExplorer}
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f7ede0]/10 hover:text-[#e07a52]"
            >
              {t.story}
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f7ede0]/10 hover:text-[#e07a52]"
            >
              {t.locationsFull}
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f7ede0]/10 hover:text-[#e07a52]"
            >
              {t.photoGallery}
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f7ede0]/10 hover:text-[#e07a52]"
            >
              {t.reviews}
            </a>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  onToggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#160b06] border border-[#f7ede0]/20 text-[#f7ede0]"
              >
                {themeMode === 'day' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-orange-400" />}
                <span>{themeMode === 'day' ? t.switchToNight : t.switchToDay}</span>
              </button>

              <button
                onClick={() => {
                  onOpenReservation();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#6c190e] text-[#f7ede0] border-2 border-[#1c1108]"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookTable}</span>
              </button>

              <a
                href="tel:+21624387243"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-transparent border border-[#f7ede0]/30 text-[#f7ede0]"
              >
                <Phone className="w-4 h-4" />
                <span>{t.callBardo}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
