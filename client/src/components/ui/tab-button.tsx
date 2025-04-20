import React from 'react';
import { cn } from '@/lib/utils';

interface TabButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => {
  return (
    <div 
      className={cn(
        'flex-1 text-center py-1 text-sm rounded-full cursor-pointer',
        active ? 'bg-primary text-white' : ''
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default TabButton;
