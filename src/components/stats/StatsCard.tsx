import React from 'react';

interface StatsCardProps {
  title: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  color: string;
  icon: React.ReactNode;
  countColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  count,
  isActive,
  countColor,
  onClick,
  icon,
}) => {
  return (
    <div
      className={`bg-card flex flex-col items-center m-[1px_10px] p-[5px_0] rounded-lg text-white border-none shadow-none transition-all duration-400 ease-in-out cursor-pointer transform hover:scale-105 ${isActive ? 'ring-2 ring-[#eb6e34] scale-105' : ''
        }`}

      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xl font-bold mb-2">{title}</div>
          <div className={`text-xl font-semibold ${countColor}`}>{count}</div>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
}

export default StatsCard;