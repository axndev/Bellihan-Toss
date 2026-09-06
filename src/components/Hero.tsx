import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';
import heroPlumberImage from '../assets/images/hero_plumber_water_heater_1788723341685.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200/60"
    >
      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Conversion Copy & Action */}
          <div className="lg:col-span-7 space-y-8">
            {/* Trust Pill / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Residential & Commercial Plumbing</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Reliable Plumbing.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                  Fair Prices.
                </span>{' '}
                Quality Work.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                Dependable residential and commercial plumbing services you can count on.
                Professional workmanship, honest service, and solutions that get the job done right.
              </p>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                id="hero-quote-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                id="hero-call-btn"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                </div>
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Proof Points */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Upfront Clear Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Fast Local Response</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Clean & Tidy Job Sites</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Imagery & Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative soft glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-2xl blur-xl" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                <img
                  src={heroPlumberImage}
                  alt="Bellihan Toss professional plumber servicing water heater"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Badge: Residential & Commercial */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Residential & Commercial</span>
                </div>

                {/* Bottom Trust Strip */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Bellihan Toss Plumbing
                      </div>
                      <div className="text-sm font-extrabold text-slate-900">
                        Honest Service. Clean Results.
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>Prompt Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill: Dependable Plumbing Solutions */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-200 p-3 hidden sm:flex items-center gap-3 animate-in fade-in">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    Dependable Solutions
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">You can count on!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
