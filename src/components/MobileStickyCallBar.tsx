import { Phone, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

interface MobileStickyCallBarProps {
  onOpenQuoteModal: () => void;
}

export function MobileStickyCallBar({ onOpenQuoteModal }: MobileStickyCallBarProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 shadow-lg flex items-center gap-2.5">
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        id="mobile-sticky-call-btn"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-emerald-400 fill-emerald-400" />
        <span>Call Now</span>
      </a>

      <button
        onClick={onOpenQuoteModal}
        id="mobile-sticky-quote-btn"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 text-white font-bold text-sm shadow-sm active:scale-95 transition-transform cursor-pointer"
      >
        <FileText className="w-4 h-4" />
        <span>Free Quote</span>
      </button>
    </div>
  );
}
