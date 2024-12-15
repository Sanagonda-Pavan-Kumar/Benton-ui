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
        "flex items-center cursor-pointer gap-2 p-2 hover:text-[#fff] rounded-lg transition-all",
        !expanded && "justify-center"
      )}
    >
      {icon}
      <span className={cn("overflow-hidden transition-all text-[#fff] hover:text-[#eb6e34]", expanded ? "w-32" : "w-0")}>
        {label}
      </span>
    </button>
  );
};