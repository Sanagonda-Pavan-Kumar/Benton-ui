import { useState } from 'react';
import { Plus, DollarSign } from 'lucide-react';
import { useStore } from '../store/useStore';
import PaymentList from '../components/payments/PaymentList';
import PaymentForm from '../components/payments/PaymentForm';
import Modal from '../components/common/Modal';
import { generateId } from '../utils/generateId';
import type { RentPayment } from '../types';

export default function Payments() {
  const { rentPayments, apartments, addRentPayment } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<RentPayment | null>(null);

  // Map all flats, including vacant ones
  const allFlats = apartments.flatMap(apartment =>
    apartment.flats.map(flat => ({
      flatId: flat.id,
      tenantId: flat.tenant?.id || '',
      flatNumber: flat.flatNumber,
      apartmentName: apartment.name,
      tenantName: flat.tenant?.name || 'Vacant',
      status: flat.occupancyStatus
    }))
  );

  const handleCreatePayment = (paymentData: Omit<RentPayment, 'id'>) => {
    const newPayment: RentPayment = {
      ...paymentData,
      id: generateId(),
    };
    
    addRentPayment(newPayment);
    setIsModalOpen(false);
  };

  const handleEditPayment = (payment: RentPayment) => {
    setSelectedPayment(payment);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Rent Payments</h2>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage rent payments for all flats
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedPayment(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Payment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <DollarSign className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                All Payments ({rentPayments.length})
              </h3>
              <p className="text-sm text-gray-500">
                View and manage rent payments for all flats
              </p>
            </div>
          </div>

          <PaymentList
            payments={rentPayments}
            onEditPayment={handleEditPayment}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedPayment ? 'Edit Payment' : 'Add New Payment'}
      >
        <PaymentForm
          onSubmit={handleCreatePayment}
          onCancel={() => setIsModalOpen(false)}
          initialData={selectedPayment || undefined}
          tenantFlats={allFlats}
        />
      </Modal>
    </div>
  );
}