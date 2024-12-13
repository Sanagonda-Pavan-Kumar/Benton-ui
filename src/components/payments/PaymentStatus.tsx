import { Check, X } from 'lucide-react';

interface PaymentStatusProps {
  status: 'Paid' | 'Unpaid';
}

export default function PaymentStatus({ status }: PaymentStatusProps) {
  return (
    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
      status === 'Paid' ? 'bg-green-100' : 'bg-red-100'
    }`}>
      {status === 'Paid' ? (
        <Check className="h-5 w-5 text-green-600" />
      ) : (
        <X className="h-5 w-5 text-red-600" />
      )}
    </div>
  );
}