import React, { useState } from 'react';
import { X, Plus, Minus, Copy, Check, ShoppingBag } from 'lucide-react';
import { CartItem, Language } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateCartQty: (itemId: string, delta: number) => void;
  onClearCart: () => void;
  onOpenReservation: () => void;
  language?: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateCartQty,
  language = 'en'
}) => {
  const currentLang: Language = language as Language;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalDT = cartItems.reduce(
    (sum, c) => sum + c.item.price * c.quantity,
    0
  );

  const handleCopySummary = () => {
    if (cartItems.length === 0) return;
    const summaryLines = cartItems.map(
      c => {
        const itemName = language === 'fr' && c.item.nameFr ? c.item.nameFr : c.item.name;
        return `• ${c.quantity}x ${itemName} (${c.item.price * c.quantity} DT)`;
      }
    );
    const text = `DOWNTOWN Table Order Summary:\n${summaryLines.join(
      '\n'
    )}\n-------------------\nTotal Estimated: ${totalDT} DT`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#160b06]/80 backdrop-blur-md flex justify-end animate-fade">
      <div className="w-full max-w-md bg-[#fffaf1] text-[#1c1108] h-full shadow-2xl border-l-4 border-[#1c1108] flex flex-col justify-between">
        {/* Drawer Header */}
        <div className="p-6 border-b-2 border-[#1c1108] flex items-center justify-between bg-[#f7ede0]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#6c190e]" />
            <h3 className="font-alfa text-xl text-[#1c1108]">
              {language === 'fr' ? 'Estimateur d\'Addition' : 'Table Bill Estimator'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#1c1108]/10 text-[#1c1108]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-[#4a3527]">
              <ShoppingBag className="w-12 h-12 mx-auto text-[#1c1108]/30 mb-3" />
              <p className="font-oswald text-lg font-bold uppercase">
                {language === 'fr' ? 'Votre estimateur est vide' : 'Your Table Estimator is Empty'}
              </p>
              <p className="text-xs mt-1 max-w-xs mx-auto">
                {language === 'fr'
                  ? 'Sélectionnez des articles dans le menu pour estimer votre addition chez DOWNTOWN.'
                  : 'Select items from the menu to calculate your estimated table bill at DOWNTOWN.'}
              </p>
            </div>
          ) : (
            cartItems.map(({ item, quantity }) => {
              const displayName = language === 'fr' && item.nameFr ? item.nameFr : item.name;
              return (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl border-2 border-[#1c1108] flex items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <h4 className="font-oswald font-bold text-base text-[#1c1108]">
                      {displayName}
                    </h4>
                    <div className="text-xs text-[#6c190e] font-semibold">
                      {item.price} DT
                    </div>
                  </div>

                  {/* Qty Controls */}
                  <div className="flex items-center gap-2 bg-[#f7ede0] px-2 py-1 rounded-lg border border-[#1c1108]">
                    <button
                      onClick={() => onUpdateCartQty(item.id, -1)}
                      className="w-5 h-5 rounded bg-white text-[#1c1108] font-bold flex items-center justify-center text-xs"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-oswald text-sm font-bold w-4 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateCartQty(item.id, 1)}
                      className="w-5 h-5 rounded bg-white text-[#1c1108] font-bold flex items-center justify-center text-xs"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="font-alfa text-base text-[#1c1108] w-14 text-right">
                    {item.price * quantity} DT
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t-2 border-[#1c1108] bg-[#f7ede0] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-oswald text-sm font-semibold uppercase text-[#4a3527]">
                {language === 'fr' ? 'Total Estimé' : 'Estimated Total'}
              </span>
              <span className="font-alfa text-2xl text-[#6c190e]">
                {totalDT} DT
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleCopySummary}
                className="font-oswald text-xs font-bold uppercase py-3 rounded-xl border-2 border-[#1c1108] bg-white hover:bg-gray-50 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'fr' ? 'Copié !' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{language === 'fr' ? 'Copier Résumé' : 'Copy Summary'}</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="font-oswald text-xs font-bold uppercase py-3 rounded-xl border-2 border-[#1c1108] bg-[#6c190e] text-[#f7ede0] hover:bg-[#8a2418] transition-colors"
              >
                {language === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
