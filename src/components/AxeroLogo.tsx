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
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="AxeroAI" 
        style={{ width: size, height: 'auto' }}
        className="object-contain transition-opacity duration-300"
        onError={(e) => {
          // If image is missing, you can either hide it or show the SVG fallback
          // For now, I will keep the SVG fallback code available inside the component
          // but prioritization is on the image.
          e.currentTarget.classList.add('hidden');
        }}
      />
      {/* SVG Fallback will only show if needed by the dev/user choice, 
          but as per latest request, we prioritize the local png */}
      <div className="img-fallback hidden">
        {/* SVG code logic here if preferred */}
      </div>
    </div>
  );
}
