import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconRendererProps {
  iconName: string;
  size?: number;
  className?: string;
}

export default function IconRenderer({ iconName, size = 24, className = "" }: IconRendererProps) {
  const IconComponent = (LucideIcons as any)[iconName];
  
  if (!IconComponent) {
    return <LucideIcons.Box size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
}
