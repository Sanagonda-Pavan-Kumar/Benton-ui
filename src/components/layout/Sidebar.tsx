import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  LayoutDashboard,
  Building2,
  ChevronRight,
  PlusCircle,
  Menu
} from 'lucide-react';
import { SidebarNavItem } from './sidebar/SidebarNavItem';
import { SidebarSubmenu } from './sidebar/SidebarSubmenu';

export interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [expanded, setExpanded] = useState(false);
  const [showPropertySubmenu, setShowPropertySubmenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col transition-all duration-300 bg-white border-r shadow-sm",
        expanded ? "w-64" : "w-16",
        className
      )}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false);
        setShowPropertySubmenu(false);
      }}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <span className={cn("overflow-hidden transition-all", expanded ? "w-32" : "w-0")}>
          PropManager
        </span>
        <Menu className="w-6 h-6" />
      </div>

      <nav className="flex-1 flex flex-col gap-2 p-4">
        <SidebarNavItem
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          onClick={() => navigate('/')}
          expanded={expanded}
        />

        <SidebarSubmenu
          icon={<Building2 className="w-5 h-5" />}
          label="Properties"
          expanded={expanded}
          showSubmenu={showPropertySubmenu}
          onToggle={() => expanded && setShowPropertySubmenu(!showPropertySubmenu)}
          items={[
            {
              icon: <Building2 className="w-4 h-4" />,
              label: "View All",
              onClick: () => navigate('/properties')
            },
            {
              icon: <PlusCircle className="w-4 h-4" />,
              label: "Add Property",
              onClick: () => navigate('/properties/add')
            }
          ]}
        />
      </nav>
    </div>
  );
};