import { Shield, DollarSign, Building, Wrench } from 'lucide-react';
import { TRUST_POINTS } from '../data/plumbingData';

const icons = [Shield, DollarSign, Building, Wrench];

export function TrustBar() {
  return (
    <section className="bg-slate-900 text-white py-8 border-y border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_POINTS.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 transition-all hover:bg-slate-800/80 hover:border-sky-500/40"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white tracking-tight">{point.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
