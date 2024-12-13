import React from 'react';

interface PaymentStatusSelectProps {
  value: 'Paid' | 'Unpaid';
  onChange: (status: 'Paid' | 'Unpaid') => void;
}

export default function PaymentStatusSelect({ value, onChange }: PaymentStatusSelectProps) {
  return (
    <div>
      <label htmlFor="status" className="block text-sm font-medium text-gray-700">
        Payment Status
      </label>
      <select
        id="status"
        value={value}
        onChange={(e) => onChange(e.target.value as 'Paid' | 'Unpaid')}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="Unpaid">Unpaid</option>
        <option value="Paid">Paid</option>
      </select>
    </div>
  );
}