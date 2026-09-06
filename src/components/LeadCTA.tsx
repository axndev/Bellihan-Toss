import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

interface LeadCTAProps {
  onOpenQuoteModal: () => void;
}

export function LeadCTA({ onOpenQuoteModal }: LeadCTAProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Subtle pipe blueprint grid background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
          <span>Fast Turnaround • Upfront Pricing</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Have a Plumbing Problem?
          </h2>
          <p className="text-lg sm:text-xl text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
            Let&apos;s get it sorted. Tell us what you need and we&apos;ll help you find the right
            solution.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenQuoteModal}
            id="lead-cta-quote-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            id="lead-cta-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-xs shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            </div>
            <span>Call Now: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <p className="text-xs text-slate-400">
          Emergency response & scheduled appointments available for residential & commercial properties.
        </p>
      </div>
    </section>
  );
}
