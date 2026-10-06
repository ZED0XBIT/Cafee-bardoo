import React from 'react';

interface DowntownLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const DowntownLogo: React.FC<DowntownLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Height map for quick sizing
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12 md:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-32',
  }[size];

  return (
    <div className={`inline-flex items-center justify-center ${heightClass} ${className}`}>
      <svg
        viewBox="0 0 320 180"
        className="w-auto h-full overflow-visible drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="DOWNTOWN Lounge Logo"
      >
        <defs>
          {/* Subtle gradient for depth */}
          <radialGradient id="dtLogoBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7a1f16" />
            <stop offset="70%" stopColor="#5e1310" />
            <stop offset="100%" stopColor="#480c0a" />
          </radialGradient>

          {/* Filter for text shadow */}
          <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Outer Black Ellipse Rim */}
        <ellipse cx="160" cy="90" rx="155" ry="85" fill="#100504" />

        {/* Outer White Ring */}
        <ellipse cx="160" cy="90" rx="151" ry="81" fill="none" stroke="#ffffff" strokeWidth="5" />

        {/* Inner Black Divider Ring */}
        <ellipse cx="160" cy="90" rx="146" ry="76" fill="none" stroke="#100504" strokeWidth="3" />

        {/* Main Maroon Oval Background */}
        <ellipse cx="160" cy="90" rx="144" ry="74" fill="url(#dtLogoBg)" />

        {/* DOWNTOWN Text */}
        <text
          x="160"
          y="102"
          textAnchor="middle"
          fill="#ffffff"
          stroke="#100504"
          strokeWidth="8"
          paintOrder="stroke fill"
          strokeLinejoin="round"
          style={{
            fontFamily: "'Oswald', 'Alfa Slab One', 'Arial Black', sans-serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: '52px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
          filter="url(#textGlow)"
        >
          DOWNTOWN
        </text>

        {/* LOUNGE Subtext */}
        <text
          x="160"
          y="138"
          textAnchor="middle"
          fill="#ffffff"
          stroke="#100504"
          strokeWidth="2"
          paintOrder="stroke fill"
          style={{
            fontFamily: "'Oswald', 'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            letterSpacing: '7px',
            textTransform: 'uppercase',
          }}
        >
          LOUNGE
        </text>
      </svg>
    </div>
  );
};
