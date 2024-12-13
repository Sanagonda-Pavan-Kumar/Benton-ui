import React from 'react';

export const StatusCell = (cellData: any) => {
  const status = cellData.value;
  const colorClass = status === 'occupied' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};