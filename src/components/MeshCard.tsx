import React from 'react';
import { cn } from '@/src/lib/utils';

interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  accentColor?: 'cyan' | 'gold' | 'red';
}

export const MeshCard: React.FC<CardProps> = ({ title, subtitle, children, className, accentColor = 'cyan' }) => {
  const accentClasses = {
    cyan: 'border-mesh-cyan/30 text-mesh-cyan',
    gold: 'border-mesh-gold/30 text-mesh-gold',
    red: 'border-mesh-red/30 text-mesh-red',
  };

  return (
    <div className={cn(
      "bg-mesh-card border border-mesh-border rounded-lg p-4 flex flex-col gap-3 relative overflow-hidden group",
      className
    )}>
      <div className={cn("absolute top-0 left-0 w-1 h-full bg-current opacity-50", accentClasses[accentColor])} />
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest opacity-60">{title}</h3>
          {subtitle && <p className="font-mono text-[10px] opacity-40 uppercase">{subtitle}</p>}
        </div>
        <div className={cn("w-2 h-2 rounded-full animate-pulse-glow", 
          accentColor === 'cyan' ? 'bg-mesh-cyan' : accentColor === 'gold' ? 'bg-mesh-gold' : 'bg-mesh-red'
        )} />
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};
