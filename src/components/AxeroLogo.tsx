import React from 'react';

interface AxeroLogoProps {
  className?: string;
  size?: number;
}

/**
 * AXEROAI LOGO COMPONENT
 * This component displays the logo image from /public/logo.png
 * Recommended size for logo.png: 1024x1024px, Transparent PNG, White color.
 */
export default function AxeroLogo({ className = "", size = 120 }: AxeroLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="AxeroAI Logo" 
        style={{ width: size, height: 'auto' }}
        className="object-contain"
        onError={(e) => {
          // Fallback if image is missing
          e.currentTarget.src = "https://placehold.co/400x400/000000/ffffff?text=AxeroAI";
        }}
      />
    </div>
  );
}
