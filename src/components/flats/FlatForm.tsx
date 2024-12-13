import React, { useState } from 'react';
import type { Flat } from '../../types';

interface FlatFormProps {
  apartmentId: string;
  onSubmit: (flat: Omit<Flat, 'id' | 'tenant'>) => void;
  onCancel: () => void;
  initialData?: Omit<Flat, 'tenant'>;
}

export default function FlatForm({ apartmentId, onSubmit, onCancel, initialData }: FlatFormProps) {
  const [formData, setFormData] = useState({
    flatNumber: initialData?.flatNumber || '',
    rentAmount: initialData?.rentAmount || 0,
    occupancyStatus: initialData?.occupancyStatus || 'Vacant' as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      apartmentId,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="flatNumber" className="block text-sm font-medium text-gray-700">
          Flat Number
        </label>
        <input
          type="text"
          id="flatNumber"
          value={formData.flatNumber}
          onChange={(e) => setFormData(prev => ({ ...prev, flatNumber: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="rentAmount" className="block text-sm font-medium text-gray-700">
          Monthly Rent Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            id="rentAmount"
            min="0"
            value={formData.rentAmount}
            onChange={(e) => setFormData(prev => ({ ...prev, rentAmount: Number(e.target.value) }))}
            className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="occupancyStatus" className="block text-sm font-medium text-gray-700">
          Occupancy Status
        </label>
        <select
          id="occupancyStatus"
          value={formData.occupancyStatus}
          onChange={(e) => setFormData(prev => ({ 
            ...prev, 
            occupancyStatus: e.target.value as 'Occupied' | 'Vacant'
          }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="Vacant">Vacant</option>
          <option value="Occupied">Occupied</option>
        </select>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          {initialData ? 'Update Flat' : 'Add Flat'}
        </button>
      </div>
    </form>
  );
}