import { Star, ShieldCheck, MessageSquarePlus } from 'lucide-react';
import { REVIEWS } from '../data/plumbingData';

interface ReviewsSectionProps {
  onOpenQuoteModal: () => void;
}

export function ReviewsSection({ onOpenQuoteModal }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Honest feedback from residential and commercial plumbing projects. Structured for real
            customer reviews and ratings.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">5.0</span>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold text-sky-700">
                  {review.serviceType}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Verified Label */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.author}</h4>
                  <p className="text-xs text-slate-500 font-medium">{review.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Project</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Replacement Notice / Call to Action */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <MessageSquarePlus className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Real Customer Reviews Ready
              </p>
              <p className="text-sm font-medium text-slate-700">
                Are you a recent customer? We appreciate honest feedback on your experience.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shrink-0 cursor-pointer"
          >
            Request Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
