interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'badge';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export function BrandLogo({ variant = 'dark', size = 'md', showSubtitle = true }: BrandLogoProps) {
  const isLightText = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Plumbing Emblem Icon */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 ${
          isLightText
            ? 'bg-white/10 text-sky-400 border border-white/20 shadow-inner'
            : 'bg-slate-900 text-sky-400 border border-slate-800'
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4"
        >
          {/* Stylized Pipe & Wrench Joint */}
          <path
            d="M8 8C8 6.89543 8.89543 6 10 6H16C17.1046 6 18 6.89543 18 8V11H8V8Z"
            fill="currentColor"
          />
          <path
            d="M8 11H18V19C18 20.6569 16.6569 22 15 22H11C9.34315 22 8 20.6569 8 19V11Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M18 13H26C27.1046 13 28 13.8954 28 15V19C28 20.1046 27.1046 21 26 21H18V13Z"
            fill="#38BDF8"
          />
          {/* Water Droplet */}
          <path
            d="M13 23C13 23 9 27.5 9 29.5C9 31.7091 10.7909 33.5 13 33.5C15.2091 33.5 17 31.7091 17 29.5C17 27.5 13 23 13 23Z"
            fill="#38BDF8"
          />
          {/* Wrench Jaw Accent */}
          <path
            d="M23 10L27 6M27 6L29 8L25 12"
            stroke={isLightText ? '#FFFFFF' : '#0284C7'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-black tracking-tight uppercase ${textSizes[size]} ${
            isLightText ? 'text-white' : 'text-slate-900'
          }`}
        >
          Bellihan <span className="text-sky-500">Toss</span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase ${
              isLightText ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Plumbing Services
          </span>
        )}
      </div>
    </div>
  );
}
