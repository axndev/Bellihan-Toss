import { useState, type ComponentType } from 'react';
import {
  AlertTriangle,
  Droplet,
  Flame,
  RotateCcw,
  Wrench,
  Settings,
  Sparkles,
  Home,
  Building2,
  ArrowRight,
  Phone,
  Check,
} from 'lucide-react';
import { PLUMBING_SERVICES, BUSINESS_INFO } from '../data/plumbingData';
import { PlumbingService } from '../types';

interface ServicesGridProps {
  onSelectServiceForQuote: (service: PlumbingService) => void;
}

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Droplet,
  Flame,
  RotateCcw,
  Wrench,
  Settings,
  Sparkles,
  Home,
  Building2,
};

export function ServicesGrid({ onSelectServiceForQuote }: ServicesGridProps) {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'emergency'>('all');

  const filteredServices = PLUMBING_SERVICES.filter((svc) => {
    if (filter === 'all') return true;
    if (filter === 'emergency') return svc.category === 'emergency';
    if (filter === 'residential') return svc.category === 'residential' || svc.category === 'both';
    if (filter === 'commercial') return svc.category === 'commercial' || svc.category === 'both';
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Comprehensive Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Plumbing Services Built on Quality & Trust
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are facing an urgent midnight leak or planning a hot water tank upgrade,
            Bellihan Toss delivers experienced workmanship and honest, upfront pricing.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'emergency', label: 'Emergency Response' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            const isEmergency = service.id === 'emergency-plumbing';

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md border ${
                  isEmergency
                    ? 'border-rose-200 ring-1 ring-rose-100 bg-gradient-to-b from-rose-50/30 via-white to-white'
                    : 'border-slate-200/80 hover:border-sky-300'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon & Category pill */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isEmergency
                          ? 'bg-rose-50 text-rose-600 border border-rose-200'
                          : 'bg-sky-50 text-sky-600 border border-sky-100'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {isEmergency ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-rose-700 bg-rose-100/70 px-2.5 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
                        Urgent Dispatch
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                        {service.category === 'both' ? 'Res & Comm' : service.category}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForQuote(service)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors group cursor-pointer"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  {isEmergency && (
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner within Services */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Don&apos;t See Your Specific Plumbing Issue?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl">
              From specialty valves to unique fixture configurations, we diagnose and solve complex
              plumbing challenges promptly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() =>
                onSelectServiceForQuote(PLUMBING_SERVICES[0])
              }
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer text-center"
            >
              Request a Custom Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
