import React, { useState } from 'react';
import type { Apartment } from '../../types';

interface ApartmentFormProps {
  onSubmit: (apartment: Omit<Apartment, 'id'>) => void;
  onCancel: () => void;
  initialData?: Apartment;
}

export default function ApartmentForm({ onSubmit, onCancel, initialData }: ApartmentFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    mobileNumber: initialData?.mobileNumber || '',
    location: initialData?.location || '',
    numberOfFlats: initialData?.numberOfFlats || 1,
    flats: initialData?.flats || []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Apartment Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobileNumber"
          value={formData.mobileNumber}
          onChange={(e) => setFormData(prev => ({ ...prev, mobileNumber: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="numberOfFlats" className="block text-sm font-medium text-gray-700">
          Number of Flats
        </label>
        <input
          type="number"
          id="numberOfFlats"
          min="1"
          value={formData.numberOfFlats}
          onChange={(e) => setFormData(prev => ({ ...prev, numberOfFlats: parseInt(e.target.value, 10) }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
          disabled={!!initialData}
        />
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
          {initialData ? 'Update Apartment' : 'Create Apartment'}
        </button>
      </div>
    </form>
  );
}