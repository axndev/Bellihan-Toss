import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO, PLUMBING_SERVICES } from '../data/plumbingData';

interface FooterProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export function Footer({ onOpenQuoteModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Dependable residential and commercial plumbing services. Focused on quality
              workmanship, honest and fair pricing, and reliable service you can count on every time.
            </p>

            {/* Facebook Link Badge */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50 transition-all text-xs font-semibold"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Follow Bellihan Toss on Facebook (500+ followers)</span>
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-sky-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About Bellihan Toss
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  Plumbing FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Plumbing Services
            </h4>
            <ul className="space-y-2 text-xs">
              {PLUMBING_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="hover:text-sky-400 transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <a href="#services" className="text-sky-400 font-semibold hover:underline">
                  View All Services &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-sky-400 font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.email}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.serviceArea}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.fullName}. All rights reserved.
            Reliable plumbing, fair prices, and quality workmanship.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
