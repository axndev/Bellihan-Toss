import { useState, useEffect, type FormEvent } from 'react';
import { X, CheckCircle2, Phone, Send, AlertCircle, Wrench } from 'lucide-react';
import { BUSINESS_INFO, PLUMBING_SERVICES } from '../data/plumbingData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export function QuoteModal({ isOpen, onClose, preSelectedService }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    serviceNeeded: preSelectedService || '',
    urgency: 'standard',
    propertyType: 'residential',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: preSelectedService }));
    }
  }, [preSelectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleCloseAndReset = () => {
    setIsSuccess(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleCloseAndReset}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold tracking-tight">Request a Free Quote</h3>
              <p className="text-xs text-slate-400">Bellihan Toss Plumbing • No Hidden Fees</p>
            </div>
          </div>

          <button
            onClick={handleCloseAndReset}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Quote Request Received!</h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. We will review your request regarding{' '}
                <strong>{formData.serviceNeeded || 'your plumbing needs'}</strong> and call you at{' '}
                <strong>{formData.phone}</strong> with honest pricing.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleCloseAndReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
                >
                  Done
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-500 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Property Type Radio */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Property Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      formData.propertyType === 'residential'
                        ? 'bg-sky-50 border-sky-500 text-sky-700'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Residential Home / Apt
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      formData.propertyType === 'commercial'
                        ? 'bg-sky-50 border-sky-500 text-sky-700'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Commercial Property
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              {/* Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Plumbing Service
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="">Select service...</option>
                    {PLUMBING_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other / Diagnostic</option>
                  </select>
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">How urgent is this?</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'emergency', label: 'Urgent / Burst' },
                    { id: 'standard', label: 'Within 24-48h' },
                    { id: 'flexible', label: 'Flexible / Next week' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: u.id as any })}
                      className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer ${
                        formData.urgency === u.id
                          ? 'bg-sky-600 border-sky-600 text-white'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Plumbing Problem Description
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Where is the leak located? Any model info for water heaters?"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get Free Clear Quote</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
