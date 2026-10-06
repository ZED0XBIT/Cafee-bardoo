import React, { useState } from 'react';
import { X, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { ReservationRequest, Language } from '../types';
import { getTranslation } from '../data/translations';
import reservationImage from '../assets/images/downtown_storefront_main.jpg';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedLocation?: string;
  language?: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  preselectedLocation = 'Bardo',
  language = 'en'
}) => {
  const currentLang: Language = language as Language;
  const t = getTranslation(currentLang).reservationModal;

  const [formData, setFormData] = useState<ReservationRequest>({
    location: preselectedLocation,
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 2,
    name: '',
    phone: '',
    seatingArea: 'Indoor Lounge',
    notes: ''
  });

  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const randomCode = `DT-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedCode(randomCode);
  };

  const handleReset = () => {
    setConfirmedCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#160b06]/90 backdrop-blur-md p-4 flex items-center justify-center animate-fade overflow-y-auto">
      <div className="bg-[#fffaf1] text-[#1c1108] border-4 border-[#1c1108] rounded-3xl overflow-hidden max-w-xl w-full relative shadow-2xl my-8">
        <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b-4 border-[#1c1108]">
          <img
            src={reservationImage}
            alt="DOWNTOWN Lounge Table Reservation"
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf1] via-transparent to-black/40" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#1c1108]/80 text-[#f7ede0] p-2 hover:bg-[#1c1108] rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
        {confirmedCode ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center font-bold shadow-lg">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="font-oswald text-xs uppercase tracking-widest text-[#6c190e]">
              Table Confirmed
            </span>

            <h3 className="font-alfa text-3xl text-[#1c1108]">
              Table Reserved at {formData.location}!
            </h3>

            <p className="text-sm text-[#4a3527] max-w-md mx-auto">
              We look forward to welcoming you, <strong className="text-[#1c1108]">{formData.name}</strong>.
              Your table for <strong className="text-[#1c1108]">{formData.guests} guests</strong> is booked for{' '}
              <strong className="text-[#1c1108]">{formData.date} at {formData.time}</strong> ({formData.seatingArea}).
            </p>

            <div className="bg-[#f7ede0] p-4 rounded-2xl border-2 border-dashed border-[#1c1108]/30 max-w-xs mx-auto my-4">
              <span className="text-xs font-oswald text-[#4a3527] uppercase">Booking Code</span>
              <div className="font-alfa text-2xl text-[#6c190e] tracking-widest mt-1">
                {confirmedCode}
              </div>
            </div>

            <p className="text-xs text-[#4a3527]">
              Need to modify or cancel? Call us at{' '}
              <a href="tel:+21624387243" className="underline font-bold text-[#6c190e]">
                +216 24 387 243
              </a>
            </p>

            <button
              onClick={handleReset}
              className="mt-4 font-oswald text-sm font-semibold tracking-wider uppercase bg-[#6c190e] text-[#f7ede0] border-2 border-[#1c1108] px-8 py-3 rounded-full hover:bg-[#8a2418] transition-colors"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="font-oswald text-xs font-semibold uppercase tracking-widest text-[#6c190e] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> DOWNTOWN Tunis
              </div>
              <h3 className="font-alfa text-2xl sm:text-3xl text-[#1c1108] mt-1">
                {t.title}
              </h3>
            </div>

            {/* Location Selector */}
            <div>
              <label className="block font-oswald text-xs uppercase font-semibold text-[#1c1108] mb-1">
                {t?.selectLocation || 'Select Location'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Bardo', 'El Aouina'].map(loc => (
                  <button
                    type="button"
                    key={loc}
                    onClick={() => setFormData({ ...formData, location: loc })}
                    className={`font-oswald text-sm font-bold uppercase py-2.5 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
                      formData.location === loc
                        ? 'bg-[#6c190e] text-[#f7ede0] border-[#1c1108]'
                        : 'bg-white text-[#1c1108] border-[#1c1108]/20 hover:border-[#1c1108]'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>DOWNTOWN {loc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-oswald text-xs uppercase font-semibold text-[#1c1108] mb-1">
                  {t?.dateLabel || 'Date'}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border-2 border-[#1c1108] bg-white text-sm focus:outline-none focus:border-[#6c190e]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-oswald text-xs uppercase font-semibold text-[#1c1108] mb-1">
                  {t?.timeLabel || 'Time'} (06:30 – 23:30)
                </label>
                <select
                  value={formData.time}
                  onChange={e => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[#1c1108] bg-white text-sm focus:outline-none focus:border-[#6c190e]"
                >
                  <option value="07:00">07:00 AM — Morning Coffee</option>
                  <option value="09:00">09:00 AM — Breakfast Rush</option>
                  <option value="11:30">11:30 AM — Late Morning</option>
                  <option value="13:00">01:00 PM — Lunch &amp; Grill</option>
                  <option value="15:30">03:30 PM — Afternoon Coffee</option>
                  <option value="18:00">06:00 PM — Sunset Tea</option>
                  <option value="19:30">07:30 PM — Evening Lounge</option>
                  <option value="21:00">09:00 PM — Pizza &amp; Shisha</option>
                  <option value="22:30">10:30 PM — Late Night Lounge</option>
                </select>
              </div>
            </div>

            {/* Guests & Seating Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-oswald text-xs uppercase font-semibold text-[#1c1108] mb-1">
                  {t?.guestsLabel || 'Guests'}
                </label>
                <select
                  value={formData.guests}
                  onChange={e => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[#1c1108] bg-white text-sm focus:outline-none focus:border-[#6c190e]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(n => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-oswald text-xs uppercase font-semibold text-[#1c1108] mb-1">
                  {t?.notesLabel || 'Seating Preference'}
                </label>
                <select
                  value={formData.seatingArea}
                  onChange={e => setFormData({ ...formData, seatingArea: e.target.value as any })}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[#1c1108] bg-white text-sm focus:outline-none focus:border-[#6c190e]"
                >
                  <option value="Indoor Lounge">Indoor Lounge</option>
                  <option value="Terrace">Sunlit Outdoor Terrace</option>
                  <option value="Shisha Area">Shisha Lounge Area</option>
                  <option value="Non-Smoking">Non-Smoking Zone</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-oswald text-xs uppercase font-semibold text-[#1c1108] mb-1">
                  {t?.nameLabel || 'Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t?.namePlaceholder || 'e.g. Mohamed Ben Ali'}
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[#1c1108] bg-white text-sm focus:outline-none focus:border-[#6c190e]"
                />
              </div>

              <div>
                <label className="block font-oswald text-xs uppercase font-semibold text-[#1c1108] mb-1">
                  {t?.phoneLabel || 'Phone'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t?.phonePlaceholder || '+216 -- --- ---'}
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[#1c1108] bg-white text-sm focus:outline-none focus:border-[#6c190e]"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block font-oswald text-xs uppercase font-semibold text-[#1c1108] mb-1">
                {t?.notesLabel || 'Special Requests'}
              </label>
              <input
                type="text"
                placeholder={t?.notesPlaceholder || 'e.g. Birthday table, high chair...'}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border-2 border-[#1c1108] bg-white text-sm focus:outline-none focus:border-[#6c190e]"
              />
            </div>

            <button
              type="submit"
              className="w-full font-oswald text-base font-bold tracking-wider uppercase bg-[#6c190e] text-[#f7ede0] border-2 border-[#1c1108] py-4 rounded-xl hover:bg-[#8a2418] transition-colors shadow-lg mt-2"
            >
              {t?.confirmBtn || 'Confirm Table Reservation'}
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
};
