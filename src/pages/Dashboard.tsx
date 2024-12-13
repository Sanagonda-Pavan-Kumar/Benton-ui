import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center justify-center h-[60vh] text-gray-500">
        <p className="text-lg">Welcome to PropManager! Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};