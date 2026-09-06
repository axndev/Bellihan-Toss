import { Check, Phone, ArrowRight } from 'lucide-react';
import { ABOUT_CHECKLIST, BUSINESS_INFO } from '../data/plumbingData';
import aboutPlumberImage from '../assets/images/about_plumber_team_1788723356999.jpg';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export function AboutSection({ onOpenQuoteModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with authentic service callout */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Clean Frame Card */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100">
                <img
                  src={aboutPlumberImage}
                  alt="Bellihan Toss plumber dedicated to quality craftsmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-[420px] object-cover object-center"
                />
              </div>

              {/* Authentic Values Card */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl border border-slate-800 max-w-xs hidden sm:block">
                <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-1">
                  Our Core Commitment
                </p>
                <p className="text-sm font-semibold text-slate-100 leading-snug">
                  Treating every home and business with the highest level of care and respect.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Copy & Checklist */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
                About Bellihan Toss
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Dependable Local Plumbing Centered on Honest Service
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 font-normal leading-relaxed">
              <p>
                Bellihan Toss provides dependable residential and commercial plumbing services. We
                focus on doing what matters most to our customers: delivering quality workmanship,
                charging fair and reasonable prices, and treating every client with genuine respect.
              </p>
              <p>
                When plumbing issues arise, you need clear communication, accurate assessments, and a
                technician who shows up ready to solve the problem without unnecessary upselling or
                hidden fees. We take pride in clean results that stand the test of daily use.
              </p>
            </div>

            {/* Required Checklist */}
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Why Customers Choose Bellihan Toss
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_CHECKLIST.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm font-semibold text-slate-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-sm transition-all cursor-pointer text-center"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all text-center"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Us Today</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
