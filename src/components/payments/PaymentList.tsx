import type { RentPayment } from '../../types';
import PaymentListItem from './PaymentListItem';

interface PaymentListProps {
  payments: RentPayment[];
  onEditPayment: (payment: RentPayment) => void;
}

export default function PaymentList({ payments, onEditPayment }: PaymentListProps) {
  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <PaymentListItem
          key={payment.id}
          payment={payment}
          onEdit={onEditPayment}
        />
      ))}
    </div>
  );
}