import { useState } from 'react';
import { Plus, Users } from 'lucide-react';
import { useStore } from '../store/useStore';
import TenantList from '../components/tenants/TenantList';
import TenantForm from '../components/tenants/TenantForm';
import Modal from '../components/common/Modal';
import { generateId } from '../utils/generateId';
import type { Tenant } from '../types';

export default function Tenants() {
  const { tenants, apartments, addTenant, updateTenant } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);

  const availableFlats = apartments.flatMap(apartment => 
    apartment.flats.map(flat => ({
      id: flat.id,
      flatNumber: flat.flatNumber,
      apartmentName: apartment.name,
      status: flat.occupancyStatus
    }))
  );

  const handleCreateTenant = (tenantData: Omit<Tenant, 'id'>) => {
    if (selectedTenant) {
      updateTenant(selectedTenant.id, tenantData);
    } else {
      const newTenant: Tenant = {
        ...tenantData,
        id: generateId(),
      };
      addTenant(newTenant);
    }
    setIsModalOpen(false);
    setSelectedTenant(null);
  };

  const handleEditTenant = (tenant: Tenant) => {
    setSelectedTenant(tenant);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tenants</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your tenants and their flat assignments
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedTenant(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Tenant
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Users className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                All Tenants ({tenants.length})
              </h3>
              <p className="text-sm text-gray-500">
                View and manage tenant information
              </p>
            </div>
          </div>

          <TenantList
            tenants={tenants}
            onEditTenant={handleEditTenant}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTenant(null);
        }}
        title={selectedTenant ? 'Edit Tenant' : 'Add New Tenant'}
      >
        <TenantForm
          onSubmit={handleCreateTenant}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedTenant(null);
          }}
          initialData={selectedTenant || undefined}
          availableFlats={availableFlats}
        />
      </Modal>
    </div>
  );
}