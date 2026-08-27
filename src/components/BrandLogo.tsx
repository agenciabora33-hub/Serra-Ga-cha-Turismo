import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem';
  className?: string;
  theme?: 'light' | 'dark' | 'green';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  theme = 'light',
  size = 'md',
}) => {
  // Size mapping
  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.25em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.3em]',
    lg: 'text-[12px] tracking-[0.35em]',
    xl: 'text-[14px] tracking-[0.4em]',
  };

  // Color mapping
  const textColor = theme === 'dark' || theme === 'green' ? 'text-[#143D34]' : 'text-white';
  const subtitleColor = theme === 'dark' || theme === 'green' ? 'text-[#1B4A3F]/80' : 'text-white/90';
  const strokeColor = theme === 'dark' || theme === 'green' ? '#143D34' : '#FFFFFF';

  // Exact vector reproduction of the Serra Gaúcha Araucária and Hill Valleys emblem
  const EmblemSvg = (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${emblemSizes[size]} shrink-0 transition-transform duration-300`}
    >
      {/* Outer Circle Frame */}
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke={strokeColor}
        strokeWidth="3.5"
      />

      {/* Decorative side ticks on the circle rim */}
      <circle cx="8" cy="100" r="2.5" fill={strokeColor} />
      <circle cx="192" cy="100" r="2.5" fill={strokeColor} />

      {/* Araucária (Pine) Trees Group */}
      <g id="araucarias" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Center Main Araucária */}
        <line x1="100" y1="56" x2="100" y2="108" strokeWidth="3" />
        {/* Crown Canopy Top */}
        <path d="M85 58 C85 45, 115 45, 115 58 C118 64, 112 68, 100 68 C88 68, 82 64, 85 58 Z" fill={strokeColor} />
        {/* Branches */}
        <path d="M88 72 C92 70, 98 74, 100 78 C102 74, 108 70, 112 72" strokeWidth="2.5" />
        <path d="M83 66 C89 62, 95 68, 100 72 C105 68, 111 62, 117 66" strokeWidth="2.5" />
        {/* Side umbrella clusters */}
        <circle cx="82" cy="65" r="5" fill={strokeColor} />
        <circle cx="118" cy="65" r="5" fill={strokeColor} />
        <circle cx="75" cy="74" r="4" fill={strokeColor} />
        <circle cx="125" cy="74" r="4" fill={strokeColor} />

        {/* Left Araucária */}
        <line x1="82" y1="74" x2="82" y2="114" strokeWidth="2.5" />
        <path d="M72 73 C72 63, 92 63, 92 73 C94 77, 88 80, 82 80 C76 80, 70 77, 72 73 Z" fill={strokeColor} />
        <circle cx="68" cy="78" r="3.5" fill={strokeColor} />
        <circle cx="94" cy="78" r="3.5" fill={strokeColor} />

        {/* Right Araucária */}
        <line x1="118" y1="74" x2="118" y2="114" strokeWidth="2.5" />
        <path d="M108 73 C108 63, 128 63, 128 73 C130 77, 124 80, 118 80 C112 80, 106 77, 108 73 Z" fill={strokeColor} />
        <circle cx="106" cy="78" r="3.5" fill={strokeColor} />
        <circle cx="132" cy="78" r="3.5" fill={strokeColor} />

        {/* Small Far-Left Araucária */}
        <line x1="68" y1="86" x2="68" y2="118" strokeWidth="2" />
        <circle cx="68" cy="85" r="5" fill={strokeColor} />

        {/* Small Far-Right Araucária */}
        <line x1="132" y1="86" x2="132" y2="118" strokeWidth="2" />
        <circle cx="132" cy="85" r="5" fill={strokeColor} />
      </g>

      {/* Undulating Mountain & Terrace Lines */}
      <g id="valleys" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" fill="none">
        {/* Line 1 - Horizon baseline */}
        <path d="M12 100 C30 94, 55 106, 95 108 C135 110, 165 94, 188 100" />
        
        {/* Line 2 - Main rolling crest */}
        <path d="M10 112 C35 104, 65 118, 100 118 C135 118, 165 104, 190 112" />
        
        {/* Line 3 - Left hill curve */}
        <path d="M12 124 C30 116, 60 126, 90 130 C125 134, 160 116, 188 124" />
        
        {/* Line 4 - Terraced vineyard wave */}
        <path d="M16 136 C45 128, 75 140, 105 140 C140 140, 168 128, 184 136" />
        
        {/* Line 5 - Center valley contour */}
        <path d="M24 148 C50 142, 80 152, 110 150 C145 148, 165 140, 176 148" />

        {/* Line 6 - Lower tier */}
        <path d="M34 160 C65 154, 95 162, 125 160 C148 158, 160 154, 166 160" />

        {/* Line 7 - Bottom slope */}
        <path d="M48 172 C75 168, 105 172, 135 169 C145 168, 150 167, 152 172" />

        {/* Line 8 - Deepest bottom curve */}
        <path d="M66 182 C90 179, 115 181, 134 182" />
      </g>
    </svg>
  );

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {EmblemSvg}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {EmblemSvg}
        <div className="mt-4 flex flex-col items-center">
          <span className={`font-bold tracking-tight leading-none ${titleSizes[size]} ${textColor}`} style={{ fontFamily: 'var(--font-sans), Montserrat, sans-serif' }}>
            Serra Gaúcha
          </span>
          <span className={`uppercase font-semibold mt-1.5 ${subtitleSizes[size]} ${subtitleColor}`}>
            TURISMO
          </span>
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {EmblemSvg}
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight leading-none ${titleSizes[size]} ${textColor}`} style={{ fontFamily: 'var(--font-sans), Montserrat, sans-serif' }}>
          Serra Gaúcha
        </span>
        <span className={`uppercase font-semibold mt-1 ${subtitleSizes[size]} ${subtitleColor}`}>
          TURISMO
        </span>
      </div>
    </div>
  );
};
