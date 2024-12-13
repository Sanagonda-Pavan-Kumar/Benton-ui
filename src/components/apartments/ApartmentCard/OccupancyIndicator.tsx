import React from 'react';
import { Home } from 'lucide-react';

interface OccupancyIndicatorProps {
  occupiedFlats: number;
  totalFlats: number;
}

export default function OccupancyIndicator({ occupiedFlats, totalFlats }: OccupancyIndicatorProps) {
  const occupancyPercentage = (occupiedFlats / totalFlats) * 100;
  
  return (
    <div className="space-y-3">
      <div className="flex items-center">
        <div className="p-1 rounded-md group-hover:bg-indigo-100 transition-colors duration-200">
          <Home className="h-4 w-4 text-gray-400 group-hover:text-indigo-500" />
        </div>
        <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
          {occupiedFlats} / {totalFlats} occupied
        </span>
      </div>
      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden group-hover:bg-gray-200 transition-colors duration-200">
        <div 
          className="bg-indigo-600 rounded-full h-2 transition-all duration-500 ease-out"
          style={{ width: `${occupancyPercentage}%` }}
        />
      </div>
    </div>
  );
}