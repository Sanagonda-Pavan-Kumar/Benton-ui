import React from 'react';

interface PaymentDateInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (date: string) => void;
  required?: boolean;
}

export default function PaymentDateInput({ id, label, value, onChange, required }: PaymentDateInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="date"
        id={id}
        value={value.split('T')[0]}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required={required}
      />
    </div>
  );
}