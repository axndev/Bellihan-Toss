import { Users, ExternalLink, ThumbsUp, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';
import vanServiceImage from '../assets/images/van_service_badge_1788723371851.jpg';

export function FacebookSocialProof() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <ThumbsUp className="w-3.5 h-3.5 fill-blue-600" />
                <span>Community & Social Proof</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Active in Our Community on Facebook
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Bellihan Toss maintains an active local presence, connecting directly with homeowners
                  and local businesses across social media. With over{' '}
                  <strong className="text-slate-900 font-bold">500+ Facebook followers</strong>, we
                  share helpful maintenance tips, job updates, and direct community communication.
                </p>
              </div>

              {/* Stat Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-sky-600 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="text-xl font-black text-slate-900">
                      {BUSINESS_INFO.facebookFollowers}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Facebook Followers</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xl font-black text-slate-900">Active</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Community Updates</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xl font-black text-slate-900">Verified</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Local Presence</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-sm shadow-sm transition-all hover:shadow hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Visit Us on Facebook</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                  Follow for seasonal plumbing reminders and recent local project showcases.
                </span>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src={vanServiceImage}
                  alt="Bellihan Toss service van on local residential call"
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                      Bellihan Toss Local Fleet
                    </div>
                    <div className="text-base font-bold">
                      Equipped for Fast Residential & Commercial Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
