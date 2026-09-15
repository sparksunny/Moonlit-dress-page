import React from 'react';

/**
 * Delicate floral and botanical line-art elements inspired by the reference image
 */
export const BotanicalBranch: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 85 C 35 70, 50 50, 75 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Delicate leaves */}
      <path
        d="M32 72 C 24 64, 25 54, 34 57 C 37 62, 38 68, 32 72 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path
        d="M45 58 C 43 47, 52 44, 55 50 C 53 56, 48 60, 45 58 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path
        d="M58 42 C 50 34, 53 25, 61 29 C 64 34, 62 39, 58 42 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path
        d="M68 28 C 69 18, 79 17, 81 24 C 77 28, 72 30, 68 28 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Small buds */}
      <circle cx="26" cy="62" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="56" cy="32" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="80" cy="18" r="2.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
};

export const DelicateSparkle: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" opacity="0.85" />
    </svg>
  );
};

export const DelicateHeart: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

export const OrnamentalDivider: React.FC<{ className?: string; label?: string }> = ({
  className = '',
  label
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-[#DFD3C3]" />
      <span className="text-[#C5A880] text-sm">✧</span>
      {label && (
        <span className="text-xs uppercase tracking-[0.25em] text-[#8C7662] font-medium px-1">
          {label}
        </span>
      )}
      <span className="text-[#C5A880] text-sm">✧</span>
      <div className="h-[1px] w-12 sm:w-20 bg-[#DFD3C3]" />
    </div>
  );
};
