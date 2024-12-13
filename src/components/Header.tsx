import React from 'react';
import { Building2, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-3 text-xl font-semibold text-gray-900">
              Apartment Manager
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}