import React from 'react';

interface PaymentAmountInputProps {
  value: number;
  onChange: (amount: number) => void;
}

export default function PaymentAmountInput({ value, onChange }: PaymentAmountInputProps) {
  return (
    <div>
      <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
        Amount
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          id="amount"
          min="0"
          step="0.01"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
    </div>
  );
}