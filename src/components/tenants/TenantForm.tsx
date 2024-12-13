import React, { useState } from 'react';
import type { Tenant } from '../../types';

interface TenantFormProps {
  onSubmit: (tenant: Omit<Tenant, 'id'>) => void;
  onCancel: () => void;
  initialData?: Tenant;
  availableFlats: Array<{ 
    id: string; 
    flatNumber: string; 
    apartmentName: string;
    status: 'Occupied' | 'Vacant';
  }>;
}

export default function TenantForm({ onSubmit, onCancel, initialData, availableFlats }: TenantFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    moveInDate: initialData?.moveInDate || new Date().toISOString().split('T')[0],
    flatId: initialData?.flatId || '',
    idProofUrl: initialData?.idProofUrl || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="moveInDate" className="block text-sm font-medium text-gray-700">
          Move-in Date
        </label>
        <input
          type="date"
          id="moveInDate"
          value={formData.moveInDate}
          onChange={(e) => setFormData(prev => ({ ...prev, moveInDate: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="flatId" className="block text-sm font-medium text-gray-700">
          Assign Flat
        </label>
        {availableFlats.length > 0 ? (
          <select
            id="flatId"
            value={formData.flatId}
            onChange={(e) => setFormData(prev => ({ ...prev, flatId: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select a flat</option>
            {availableFlats.map((flat) => (
              <option key={flat.id} value={flat.id}>
                {flat.apartmentName} - Flat {flat.flatNumber} ({flat.status.toLowerCase()})
              </option>
            ))}
          </select>
        ) : (
          <div className="mt-1 text-sm text-red-600">
            No vacant flats available. Please add new flats or wait for existing ones to become vacant.
          </div>
        )}
      </div>

      <div>
        <label htmlFor="idProof" className="block text-sm font-medium text-gray-700">
          ID Proof
        </label>
        <input
          type="file"
          id="idProof"
          accept="image/*,.pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setFormData(prev => ({ ...prev, idProofUrl: reader.result as string }));
              };
              reader.readAsDataURL(file);
            }
          }}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-medium
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
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
          {initialData ? 'Update Tenant' : 'Add Tenant'}
        </button>
      </div>
    </form>
  );
}