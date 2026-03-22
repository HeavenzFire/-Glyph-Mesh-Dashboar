import React from 'react';

export const GlyphGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-8 gap-1 w-full aspect-square">
      {Array.from({ length: 64 }).map((_, i) => {
        const isActive = Math.random() > 0.7;
        const isGolden = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63].includes(i);
        return (
          <div 
            key={i} 
            className={`
              aspect-square border border-white/5 flex items-center justify-center text-[8px] font-mono
              ${isActive ? 'bg-mesh-cyan/20 text-mesh-cyan' : 'text-white/10'}
              ${isGolden && isActive ? 'bg-mesh-gold/20 text-mesh-gold border-mesh-gold/30' : ''}
              transition-all duration-500
            `}
          >
            {isActive ? (isGolden ? 'Φ' : '1') : '0'}
          </div>
        );
      })}
    </div>
  );
};
