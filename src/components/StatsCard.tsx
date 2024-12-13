import React from 'react';
import { Home } from 'lucide-react';

interface StatsCardProps {
  title: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  color: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  count,
  isActive,
  onClick,
  color,
  icon,
}) => {
  return (
    <div
      className={`${color} p-6 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
        isActive ? 'ring-4 ring-blue-400 scale-105' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-sm font-medium mb-1">{title}</p>
          <h3 className="text-white text-3xl font-bold">{count}</h3>
        </div>
        <div className="text-white opacity-80">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;