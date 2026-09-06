import { MessageSquare, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/plumbingData';

interface HowItWorksProps {
  onOpenQuoteModal: () => void;
}

const stepIcons = [MessageSquare, FileText, CheckCircle];

export function HowItWorks({ onOpenQuoteModal }: HowItWorksProps) {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-sky-400 text-xs font-extrabold uppercase tracking-widest bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How Getting Service Works
          </h2>
          <p className="text-slate-300 text-base font-normal">
            No confusion, no guesswork. A straightforward three-step process to get your plumbing
            restored properly.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={item.step}
                className="relative bg-slate-800/60 rounded-2xl p-7 border border-slate-700 flex flex-col justify-between hover:border-sky-500/40 transition-all hover:bg-slate-800"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-700 select-none">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center text-xs font-semibold text-sky-400">
                  <span>Step {index + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Start Step 1: Tell Us What You Need</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
