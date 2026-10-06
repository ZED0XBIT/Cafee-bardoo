import React, { useState } from 'react';
import { Review, Language } from '../types';
import { INITIAL_REVIEWS } from '../data/locationsData';
import { Star, MessageSquarePlus, X, Check } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [modalOpen, setModalOpen] = useState(false);
  const [filterLocation, setFilterLocation] = useState<'All' | 'Bardo' | 'El Aouina'>('All');

  const t = getTranslation(language).reviews;

  // New review state
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState<'Bardo' | 'El Aouina'>('Bardo');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author,
      location,
      rating,
      comment,
      date: 'Today'
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setAuthor('');
      setComment('');
      setRating(5);
    }, 1500);
  };

  const filteredReviews = reviews.filter(
    r => filterLocation === 'All' || r.location === filterLocation || r.location === 'General'
  );

  return (
    <section id="reviews" className="py-24 bg-[#6c190e] text-[#f7ede0] relative overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-oswald font-semibold text-xs md:text-sm tracking-[0.2em] uppercase text-[#e7d8bd] flex items-center gap-2">
              <span>◆</span>
              <span>{t.eyebrow}</span>
              <span>◆</span>
            </div>
            <h2 className="font-alfa text-3xl sm:text-5xl md:text-6xl text-[#f7ede0] mt-3 leading-tight">
              {t.heading}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter Buttons */}
            <div className="flex items-center bg-[#160b06]/40 p-1 rounded-full border border-[#f7ede0]/30">
              {(['All', 'Bardo', 'El Aouina'] as const).map(loc => (
                <button
                  key={loc}
                  onClick={() => setFilterLocation(loc)}
                  className={`font-oswald text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all ${
                    filterLocation === loc
                      ? 'bg-[#f7ede0] text-[#6c190e]'
                      : 'text-[#f7ede0]/70 hover:text-[#f7ede0]'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="font-oswald text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#f7ede0] text-[#6c190e] border-2 border-[#1c1108] px-5 py-2.5 rounded-full hover:bg-[#e7d8bd] transition-all flex items-center gap-2 shrink-0"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Avis / Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(rev => (
            <div
              key={rev.id}
              className="bg-[#160b06]/30 backdrop-blur-md p-6 rounded-2xl border-2 border-[#f7ede0]/30 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#e07a52] mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'fill-[#e07a52] text-[#e07a52]' : 'text-[#f7ede0]/30'
                      }`}
                    />
                  ))}
                </div>

                <p className="font-oswald text-lg sm:text-xl font-medium text-[#f7ede0] leading-snug">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f7ede0]/15 flex items-center justify-between text-xs">
                <div>
                  <span className="font-oswald font-semibold uppercase tracking-wider text-[#e7d8bd] block">
                    — {rev.author}
                  </span>
                  <span className="text-[#f7ede0]/60 font-medium">
                    {rev.location} Regular
                  </span>
                </div>
                <span className="text-[#f7ede0]/50 font-oswald uppercase">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leave Review Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 bg-[#160b06]/90 backdrop-blur-md p-4 flex items-center justify-center">
            <div className="bg-[#fffaf1] text-[#1c1108] border-4 border-[#1c1108] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-[#1c1108] p-2 hover:bg-[#1c1108]/10 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-alfa text-2xl text-[#1c1108]">Merci beaucoup!</h3>
                  <p className="text-sm text-[#4a3527]">
                    Your review has been added to the DOWNTOWN table board.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="font-oswald text-xs uppercase tracking-widest text-[#6c190e]">
                    Avis / Feedback
                  </div>
                  <h3 className="font-alfa text-2xl sm:text-3xl text-[#1c1108]">
                    Partagez votre expérience
                  </h3>

                  <div>
                    <label className="block text-xs font-oswald uppercase text-[#4a3527] font-bold mb-1">
                      Nom / Name
                    </label>
                    <input
                      type="text"
                      required
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1c1108]/30 text-sm focus:outline-none focus:border-[#6c190e]"
                      placeholder="e.g. Youssef B."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-oswald uppercase text-[#4a3527] font-bold mb-1">
                      Café Location
                    </label>
                    <select
                      value={location}
                      onChange={e => setLocation(e.target.value as 'Bardo' | 'El Aouina')}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1c1108]/30 text-sm focus:outline-none focus:border-[#6c190e]"
                    >
                      <option value="Bardo">DOWNTOWN Bardo</option>
                      <option value="El Aouina">DOWNTOWN El Aouina</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-oswald uppercase text-[#4a3527] font-bold mb-1">
                      Rating
                    </label>
                    <div className="flex gap-2 text-[#e07a52]">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= rating ? 'fill-[#e07a52] text-[#e07a52]' : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-oswald uppercase text-[#4a3527] font-bold mb-1">
                      Comment / Commentaire
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1c1108]/30 text-sm focus:outline-none focus:border-[#6c190e]"
                      placeholder="Comment s'est passée votre visite ?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-oswald text-sm font-semibold tracking-wider uppercase bg-[#6c190e] text-[#f7ede0] py-3.5 rounded-xl border-2 border-[#1c1108] hover:bg-[#8a2418]"
                  >
                    Publier l&apos;Avis
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
