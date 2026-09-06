import { useState, type FormEvent } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO, PLUMBING_SERVICES } from '../data/plumbingData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  onSubmittedSuccess?: () => void;
}

export function ContactSection({ initialService, onSubmittedSuccess }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    serviceNeeded: initialService || '',
    message: '',
  });

  const [urgency, setUrgency] = useState<'normal' | 'emergency'>('normal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and a contact phone number so we can reach you.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSubmittedSuccess) {
        onSubmittedSuccess();
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceNeeded: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Bellihan Toss Plumbing
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Ready to fix a leak, schedule a water heater service, or get a clear quote? Reach out by
            phone or submit the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info, Hours, Area, Facebook */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5 fill-emerald-400/20" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Fast Phone Response
                  </p>
                  <p className="text-xl font-extrabold text-white">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Call directly for emergency water leaks or quick scheduled appointments.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Us</p>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
                <p className="text-xs text-slate-500 mt-0.5">
                  Send photos or project details for quick review.
                </p>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Service Area
                </p>
                <p className="text-sm font-semibold text-slate-800">{BUSINESS_INFO.serviceArea}</p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Business Hours
                </p>
                <p className="text-sm font-semibold text-slate-800">{BUSINESS_INFO.businessHours}</p>
              </div>
            </div>

            {/* Facebook Link Card */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    Facebook Community
                  </p>
                  <p className="text-sm font-bold text-slate-900">Bellihan Toss on Facebook</p>
                  <p className="text-xs text-slate-600 mt-0.5">Over 500+ local followers</p>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1877F2] hover:underline shrink-0 pt-1"
              >
                <span>View Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your plumbing inquiry. A member of Bellihan Toss will review
                    your request and contact you at <strong className="text-slate-900">{formData.phone}</strong> promptly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="px-6 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-500 transition-colors"
                    >
                      Call Directly: {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Send a Message or Request a Quote
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out this quick form and we&apos;ll get back to you with clear information.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Urgency Toggle */}
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-xs font-bold text-slate-700">Urgency:</span>
                    <button
                      type="button"
                      onClick={() => setUrgency('normal')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        urgency === 'normal'
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Standard Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('emergency')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        urgency === 'emergency'
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Urgent / Emergency
                    </button>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Smith"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Service Needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a plumbing service...</option>
                        {PLUMBING_SERVICES.map((svc) => (
                          <option key={svc.id} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                        <option value="Other">Other / Diagnostic</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Tell Us What&apos;s Going On
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what is leaking, clogged, or what fixture needs attention..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-btn"
                    className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Plumbing Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    We respect your privacy. No spam. We only use your information to contact you
                    regarding your plumbing needs.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
