import React from 'react';
import { cn } from '../../lib/utils';

interface StatusBadgeProps {
  status: 'occupied' | 'vacant';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  return (
    <span
      className={cn(
        'px-2 py-1 rounded-full text-xs font-medium',
        status === 'occupied' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
        className
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};