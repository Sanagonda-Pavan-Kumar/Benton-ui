import React from 'react';
import { cn } from '../../../lib/utils';

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  expanded: boolean;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon,
  label,
  onClick,
  expanded
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-all",
        !expanded && "justify-center"
      )}
    >
      {icon}
      <span className={cn("overflow-hidden transition-all", expanded ? "w-32" : "w-0")}>
        {label}
      </span>
    </button>
  );
};