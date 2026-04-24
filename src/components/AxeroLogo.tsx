import React from 'react';

interface AxeroLogoProps {
  className?: string;
  size?: number;
  showSymbol?: boolean;
  vertical?: boolean;
}

/**
 * AXEROAI LOGO COMPONENT
 * Recreates the stylized futuristic identity from the provided image using SVG.
 * Letters: A (Λ), X, E (≡), R, O, A (Λ), I.
 */
export default function AxeroLogo({ 
  className = "", 
  size = 40, 
  showSymbol = true,
  vertical = true
}: AxeroLogoProps) {
  // Scale factor based on base size 120
  const scale = size / 120;
  
  return (
    <div className={`flex items-center gap-4 ${vertical ? 'flex-col' : 'flex-row'} ${className}`}>
      {/* 1. The Symbol (Stylized Circle + A-shape) */}
      {showSymbol && (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 1024 1024" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Stylized Outer Curve (C-shape / Partial Circle) */}
          <path 
            d="M624 200C520 120 380 140 300 240C220 340 220 500 300 600C380 700 520 720 624 640" 
            stroke="white" 
            strokeWidth="60" 
            strokeLinecap="round" 
            transform="translate(0, 50)"
          />
          
          {/* Outer Ring path similar to the image */}
          <path d="M633.923 194.231C504.615 110.769 330 146.538 246.538 275.846C163.077 405.154 198.846 579.769 328.154 663.231C457.462 746.692 632.077 710.923 715.538 581.615" stroke="white" strokeWidth="65" strokeLinecap="round" />
          
          {/* Inner stylized A / Geometric peaks */}
          <path d="M350 530L550 210L750 530" stroke="white" strokeWidth="65" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M430 460L650 460" stroke="white" strokeWidth="65" strokeLinecap="round" />
        </svg>
      )}

      {/* 2. The Stylized Wordmark: AXEROAI */}
      <div className="flex items-center gap-[0.2em]" style={{ height: size * 0.25 }}>
        <svg 
          height="100%" 
          viewBox="0 0 850 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* A (Λ) */}
          <path d="M20 90L70 10L120 90" stroke="white" strokeWidth="15" strokeLinecap="square" />
          
          {/* X */}
          <path d="M150 10L230 90M150 90L230 10" stroke="white" strokeWidth="15" strokeLinecap="square" />
          
          {/* E (≡) */}
          <path d="M260 20H340M260 55H340M260 90H340" stroke="white" strokeWidth="15" strokeLinecap="square" />
          
          {/* R */}
          <path d="M370 90V10H430C460 10 480 30 480 50C480 70 460 90 430 90H370M420 50L480 90" stroke="white" strokeWidth="15" strokeLinecap="square" strokeLinejoin="round" />
          
          {/* O */}
          <circle cx="560" cy="50" r="40" stroke="white" strokeWidth="15" />
          
          {/* A (Λ) */}
          <path d="M630 90L680 10L730 90" stroke="white" strokeWidth="15" strokeLinecap="square" />
          
          {/* I */}
          <path d="M780 10V90" stroke="white" strokeWidth="15" strokeLinecap="square" />
        </svg>
      </div>
    </div>
  );
}
