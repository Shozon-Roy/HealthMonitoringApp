import React from 'react';
import { cn } from '@/lib/utils';

interface IconBubbleProps {
  icon: string;
  color: 'primary' | 'secondary' | 'green';
  className?: string;
}

const colorMap = {
  primary: 'bg-primary',
  secondary: 'bg-[#7f65e6]',
  green: 'bg-green-400'
};

const IconBubble: React.FC<IconBubbleProps> = ({ icon, color, className }) => {
  return (
    <div className={cn(
      'w-12 h-12 rounded-full flex items-center justify-center',
      colorMap[color],
      className
    )}>
      <span className="material-icons-outlined text-white">{icon}</span>
    </div>
  );
};

export default IconBubble;
