import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesGrid } from './components/ServicesGrid';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { FacebookSocialProof } from './components/FacebookSocialProof';
import { ReviewsSection } from './components/ReviewsSection';
import { LeadCTA } from './components/LeadCTA';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MobileStickyCallBar } from './components/MobileStickyCallBar';
import { PlumbingService } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (service: PlumbingService) => {
    setSelectedServiceTitle(service.title);
    setIsQuoteModalOpen(true);
  };

  const handleContactSubmitted = () => {
    setToastMessage('Inquiry submitted! We will call you back shortly.');
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-500 selection:text-white pb-16 sm:pb-0">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Trust Bar */}
        <TrustBar />

        {/* Services Grid */}
        <ServicesGrid onSelectServiceForQuote={handleSelectService} />

        {/* About Section */}
        <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* How It Works (3 Steps) */}
        <HowItWorks onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Facebook Social Proof */}
        <FacebookSocialProof />

        {/* Reviews Section */}
        <ReviewsSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Full-width Lead CTA */}
        <LeadCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Contact Section */}
        <ContactSection
          initialService={selectedServiceTitle}
          onSubmittedSuccess={handleContactSubmitted}
        />

        {/* FAQ Section */}
        <FAQSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preSelectedService={selectedServiceTitle}
      />

      {/* Mobile Sticky Tap-to-Call Bar */}
      <MobileStickyCallBar onOpenQuoteModal={() => handleOpenQuoteModal()} />
    </div>
  );
}
