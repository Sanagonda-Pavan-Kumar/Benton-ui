import React from 'react';

interface FlatOption {
  flatId: string;
  tenantId: string;
  flatNumber: string;
  apartmentName: string;
  tenantName: string;
  status: 'Occupied' | 'Vacant';
}

interface PaymentFlatSelectProps {
  value: string;
  onChange: (flatId: string, tenantId: string) => void;
  options: FlatOption[];
}

export default function PaymentFlatSelect({ value, onChange, options }: PaymentFlatSelectProps) {
  return (
    <div>
      <label htmlFor="flatId" className="block text-sm font-medium text-gray-700">
        Flat
      </label>
      <select
        id="flatId"
        value={value}
        onChange={(e) => {
          const flat = options.find(f => f.flatId === e.target.value);
          onChange(e.target.value, flat?.tenantId || '');
        }}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required
      >
        <option value="">Select a flat</option>
        {options.map((flat) => (
          <option 
            key={flat.flatId} 
            value={flat.flatId}
            className={flat.status === 'Vacant' ? 'text-gray-500' : ''}
          >
            {flat.apartmentName} - Flat {flat.flatNumber} ({flat.status})
          </option>
        ))}
      </select>
    </div>
  );
}