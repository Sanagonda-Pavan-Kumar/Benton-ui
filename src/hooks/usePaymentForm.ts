import { useState } from 'react';
import type { RentPayment } from '../types';
import { generateInvoicePDF } from '../utils/generatePDF';

interface TenantFlat {
  flatId: string;
  tenantId: string;
  flatNumber: string;
  apartmentName: string;
  tenantName: string;
}

interface UsePaymentFormProps {
  initialData?: RentPayment;
  tenantFlats: TenantFlat[];
  onSubmit: (payment: Omit<RentPayment, 'id'>) => void;
}

export function usePaymentForm({ initialData, tenantFlats, onSubmit }: UsePaymentFormProps) {
  const [formData, setFormData] = useState({
    flatId: initialData?.flatId || '',
    tenantId: initialData?.tenantId || '',
    amount: initialData?.amount || 0,
    dueDate: initialData?.dueDate || new Date().toISOString().split('T')[0],
    status: initialData?.status || 'Unpaid' as const,
    paidAt: initialData?.paidAt || '',
    invoiceUrl: initialData?.invoiceUrl || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let invoiceUrl = formData.invoiceUrl;
    if (formData.status === 'Paid' && !invoiceUrl) {
      const flat = tenantFlats.find(f => f.flatId === formData.flatId);
      if (flat) {
        invoiceUrl = generateInvoicePDF(
          { ...formData, id: initialData?.id || 'temp' } as RentPayment,
          flat.apartmentName,
          flat.flatNumber,
          flat.tenantName
        );
      }
    }

    onSubmit({
      ...formData,
      invoiceUrl,
      paidAt: formData.status === 'Paid' ? (formData.paidAt || new Date().toISOString()) : undefined,
    });
  };

  return {
    formData,
    setFormData,
    handleSubmit,
  };
}