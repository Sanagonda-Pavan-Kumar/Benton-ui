import React from 'react';
import type { RentPayment } from '../../types';
import { usePaymentForm } from '../../hooks/usePaymentForm';
import PaymentFlatSelect from './form/PaymentFlatSelect';
import PaymentAmountInput from './form/PaymentAmountInput';
import PaymentDateInput from './form/PaymentDateInput';
import PaymentStatusSelect from './form/PaymentStatusSelect';

interface PaymentFormProps {
  onSubmit: (payment: Omit<RentPayment, 'id'>) => void;
  onCancel: () => void;
  initialData?: RentPayment;
  tenantFlats: Array<{
    flatId: string;
    tenantId: string;
    flatNumber: string;
    apartmentName: string;
    tenantName: string;
  }>;
}

export default function PaymentForm({ onSubmit, onCancel, initialData, tenantFlats }: PaymentFormProps) {
  const { formData, setFormData, handleSubmit } = usePaymentForm({
    initialData,
    tenantFlats,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentFlatSelect
        value={formData.flatId}
        onChange={(flatId, tenantId) => 
          setFormData(prev => ({ ...prev, flatId, tenantId }))
        }
        options={tenantFlats}
      />

      <PaymentAmountInput
        value={formData.amount}
        onChange={(amount) => setFormData(prev => ({ ...prev, amount }))}
      />

      <PaymentDateInput
        id="dueDate"
        label="Due Date"
        value={formData.dueDate}
        onChange={(dueDate) => setFormData(prev => ({ ...prev, dueDate }))}
        required
      />

      <PaymentStatusSelect
        value={formData.status}
        onChange={(status) => setFormData(prev => ({ 
          ...prev, 
          status,
          paidAt: status === 'Paid' ? new Date().toISOString() : undefined
        }))}
      />

      {formData.status === 'Paid' && (
        <PaymentDateInput
          id="paidAt"
          label="Payment Date"
          value={formData.paidAt || new Date().toISOString()}
          onChange={(paidAt) => setFormData(prev => ({ ...prev, paidAt }))}
          required
        />
      )}

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
          {initialData ? 'Update Payment' : 'Add Payment'}
        </button>
      </div>
    </form>
  );
}