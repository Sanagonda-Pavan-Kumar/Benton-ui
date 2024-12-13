import { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import IssueList from '../components/issues/IssueList';
import IssueForm from '../components/issues/IssueForm';
import Modal from '../components/common/Modal';
import { generateId } from '../utils/generateId';
import type { Issue } from '../types';

export default function Issues() {
  const { issues, apartments, addIssue, updateIssue } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const tenantFlats = apartments.flatMap(apartment =>
    apartment.flats.map(flat => ({
      flatId: flat.id,
      flatNumber: flat.flatNumber,
      apartmentName: apartment.name,
      status: flat.occupancyStatus
    }))
  );

  const handleCreateIssue = (issueData: Omit<Issue, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (selectedIssue) {
      updateIssue(selectedIssue.id, {
        ...issueData,
        updatedAt: new Date().toISOString()
      });
    } else {
      const now = new Date().toISOString();
      const newIssue: Issue = {
        ...issueData,
        id: generateId(),
        createdAt: now,
        updatedAt: now,
      };
      addIssue(newIssue);
    }
    setIsModalOpen(false);
    setSelectedIssue(null);
  };

  const handleEditIssue = (issue: Issue) => {
    setSelectedIssue(issue);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Issues</h2>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage maintenance issues
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedIssue(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Report Issue
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <AlertCircle className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                All Issues ({issues.length})
              </h3>
              <p className="text-sm text-gray-500">
                View and manage reported issues
              </p>
            </div>
          </div>

          <IssueList
            issues={issues}
            onEditIssue={handleEditIssue}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedIssue(null);
        }}
        title={selectedIssue ? 'Edit Issue' : 'Report New Issue'}
      >
        <IssueForm
          onSubmit={handleCreateIssue}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedIssue(null);
          }}
          initialData={selectedIssue || undefined}
          tenantFlats={tenantFlats}
        />
      </Modal>
    </div>
  );
}