import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Plus, Building2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import FlatTable from '../components/flats/FlatTable';
import FlatForm from '../components/flats/FlatForm';
import Modal from '../components/common/Modal';
import { generateId } from '../utils/generateId';
import type { Flat } from '../types';

export default function ApartmentDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { apartments, addFlat } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState<Flat | null>(null);

  const apartment = apartments.find(a => a.id === id);

  if (!apartment) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Apartment not found</p>
        <button
          onClick={() => navigate('/apartments')}
          className="mt-4 text-indigo-600 hover:text-indigo-500"
        >
          Go back to apartments
        </button>
      </div>
    );
  }

  const handleCreateFlat = (flatData: Omit<Flat, 'id' | 'tenant'>) => {
    const newFlat: Flat = {
      ...flatData,
      id: generateId(),
    };
    
    addFlat(newFlat);
    setIsModalOpen(false);
  };

  const handleEditFlat = (flat: Flat) => {
    setSelectedFlat(flat);
    setIsModalOpen(true);
  };

  const flatsForTable = apartment.flats.map(flat => ({
    number: flat.flatNumber,
    rent: flat.rentAmount,
    status: flat.occupancyStatus
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/apartments')}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="h-5 w-5 text-gray-500" />
        </button>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{apartment.name}</h2>
          <p className="text-sm text-gray-500">{apartment.location}</p>
        </div>
        <button
          onClick={() => {
            setSelectedFlat(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Flat
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Flats ({apartment.flats.length})
              </h3>
              <p className="text-sm text-gray-500">
                Manage all flats in this apartment
              </p>
            </div>
          </div>

          <FlatTable flats={flatsForTable} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedFlat ? 'Edit Flat' : 'Add New Flat'}
      >
        <FlatForm
          apartmentId={apartment.id}
          onSubmit={handleCreateFlat}
          onCancel={() => setIsModalOpen(false)}
          initialData={selectedFlat || undefined}
        />
      </Modal>
    </div>
  );
}