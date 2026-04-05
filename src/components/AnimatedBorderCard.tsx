import { ReactNode } from 'react';

interface AnimatedBorderCardProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  speed?: number;
}

const AnimatedBorderCard = ({
  children,
  className = '',
  borderWidth = 3,
  speed = 4,
}: AnimatedBorderCardProps) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden group/border ${className}`} style={{ padding: `${borderWidth}px` }}>
      {/* Spinning gradient - always visible */}
      <div className="spinning-gradient" />
      {/* Hover glow */}
      <div className="spinning-gradient-glow group-hover/border:opacity-100" />
      {/* Inner card */}
      <div
        className="relative z-10 h-full rounded-[calc(1rem-2px)] overflow-hidden"
        style={{ background: 'hsl(var(--card))' }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorderCard;
