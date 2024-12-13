import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import ApartmentCard from '../components/apartments/ApartmentCard';
import ApartmentForm from '../components/apartments/ApartmentForm';
import Modal from '../components/common/Modal';
import { generateId } from '../utils/generateId';
import type { Apartment } from '../types';

export default function Apartments() {
  const { apartments, addApartment, updateApartment } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  const handleSubmit = (apartmentData: Omit<Apartment, 'id'>) => {
    if (selectedApartment) {
      updateApartment(selectedApartment.id, apartmentData);
    } else {
      const newApartment: Apartment = {
        ...apartmentData,
        id: generateId(),
        flats: apartmentData.flats.map(flat => ({
          ...flat,
          apartmentId: generateId()
        }))
      };
      addApartment(newApartment);
    }
    setIsModalOpen(false);
    setSelectedApartment(null);
  };

  const handleEdit = (apartment: Apartment) => {
    setSelectedApartment(apartment);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Apartments</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your apartment buildings and units
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedApartment(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Apartment
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onEdit={handleEdit}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedApartment(null);
        }}
        title={selectedApartment ? 'Edit Apartment' : 'Add New Apartment'}
      >
        <ApartmentForm
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedApartment(null);
          }}
          initialData={selectedApartment || undefined}
        />
      </Modal>
    </div>
  );
}