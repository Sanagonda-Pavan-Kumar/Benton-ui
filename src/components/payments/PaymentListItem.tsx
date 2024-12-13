import React from 'react';
import { DollarSign, Calendar, Download } from 'lucide-react';
import { format } from 'date-fns';
import type { RentPayment } from '../../types';
import PaymentStatus from './PaymentStatus';

interface PaymentListItemProps {
  payment: RentPayment;
  onEdit: (payment: RentPayment) => void;
  flatDetails?: {
    apartmentName: string;
    flatNumber: string;
    status: 'Occupied' | 'Vacant';
  };
}

export default function PaymentListItem({ payment, onEdit, flatDetails }: PaymentListItemProps) {
  const handleDownloadInvoice = () => {
    if (payment.invoiceUrl) {
      const link = document.createElement('a');
      link.href = payment.invoiceUrl;
      link.download = `invoice-${payment.id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <PaymentStatus status={payment.status} />
          <div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-sm font-medium text-gray-900">
                ${payment.amount}
              </span>
            </div>
            {flatDetails && (
              <p className="text-sm text-gray-500 mt-1">
                {flatDetails.apartmentName} - Flat {flatDetails.flatNumber} ({flatDetails.status})
              </p>
            )}
            <div className="flex items-center mt-1">
              <Calendar className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-sm text-gray-500">
                Due: {format(new Date(payment.dueDate), 'MMM d, yyyy')}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {payment.status === 'Paid' && payment.paidAt && (
            <div className="text-sm text-gray-500">
              Paid on {format(new Date(payment.paidAt), 'MMM d, yyyy')}
            </div>
          )}
          <div className="flex gap-2">
            {payment.invoiceUrl && (
              <button
                onClick={handleDownloadInvoice}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
                title="Download Invoice"
              >
                <Download className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={() => onEdit(payment)}
              className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 rounded-full"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}