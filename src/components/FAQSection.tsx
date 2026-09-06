import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/plumbingData';

interface FAQSectionProps {
  onOpenQuoteModal: () => void;
}

export function FAQSection({ onOpenQuoteModal }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Plumbing Questions Answered
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Clear answers to common questions about our services, response times, and quotes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-sky-200 shadow-sm'
                    : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-sky-100 text-sky-700 rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Have Another Question?
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Call or request a quote for tailored guidance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
