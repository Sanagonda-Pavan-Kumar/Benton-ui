import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your application preferences
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <SettingsIcon className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                General Settings
              </h3>
              <p className="text-sm text-gray-500">
                Configure your application settings
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Add settings options here */}
            <p className="text-sm text-gray-500">Settings coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}