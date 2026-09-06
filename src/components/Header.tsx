import { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/plumbingData';

interface HeaderProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar for Availability & Quick Contact */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-300">
              Emergency & Scheduled Service Available
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-400">Residential & Commercial</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 font-bold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group" id="header-logo-link">
            <BrandLogo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call & Quote Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              id="header-call-btn"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-sky-600 hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight hidden xl:block">
                <span className="block text-[11px] font-medium text-slate-600 uppercase">
                  Direct Line
                </span>
                <span className="font-bold text-slate-900">{BUSINESS_INFO.phone}</span>
              </div>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              id="header-quote-btn"
              className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-sm transition-all hover:shadow hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Actions: Tap-to-Call + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-sm"
              aria-label="Call Bellihan Toss"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-600"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-sm cursor-pointer"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
