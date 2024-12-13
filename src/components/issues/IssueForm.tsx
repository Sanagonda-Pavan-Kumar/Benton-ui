import React, { useState } from 'react';
import type { Issue } from '../../types';
import FileUpload from '../common/FileUpload';
import { fileToBase64 } from '../../utils/file';

interface IssueFormProps {
  onSubmit: (issue: Omit<Issue, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
  initialData?: Issue;
  tenantFlats: Array<{
    flatId: string;
    flatNumber: string;
    apartmentName: string;
    status: 'Occupied' | 'Vacant';
  }>;
}

export default function IssueForm({ onSubmit, onCancel, initialData, tenantFlats }: IssueFormProps) {
  const [formData, setFormData] = useState({
    description: initialData?.description || '',
    priority: initialData?.priority || 'Low' as const,
    status: initialData?.status || 'Pending' as const,
    flatId: initialData?.flatId || '',
    tenantId: initialData?.tenantId || '',
    imageUrl: initialData?.imageUrl || '',
  });

  const handleImageUpload = async (file: File) => {
    const base64 = await fileToBase64(file);
    setFormData(prev => ({ ...prev, imageUrl: base64 }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Issue Description
        </label>
        <textarea
          id="description"
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
          Priority Level
        </label>
        <select
          id="priority"
          value={formData.priority}
          onChange={(e) => setFormData(prev => ({ 
            ...prev, 
            priority: e.target.value as 'Low' | 'Medium' | 'High'
          }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        <label htmlFor="flatId" className="block text-sm font-medium text-gray-700">
          Flat
        </label>
        <select
          id="flatId"
          value={formData.flatId}
          onChange={(e) => setFormData(prev => ({ ...prev, flatId: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        >
          <option value="">Select a flat</option>
          {tenantFlats.map((flat) => (
            <option key={flat.flatId} value={flat.flatId}>
              {flat.apartmentName} - Flat {flat.flatNumber} ({flat.status.toLowerCase()})
            </option>
          ))}
        </select>
      </div>

      <FileUpload
        id="image"
        label="Issue Image"
        accept="image/*"
        onChange={handleImageUpload}
      />

      {formData.imageUrl && (
        <div className="mt-2">
          <img
            src={formData.imageUrl}
            alt="Issue preview"
            className="h-32 w-32 object-cover rounded-md"
          />
        </div>
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
          {initialData ? 'Update Issue' : 'Report Issue'}
        </button>
      </div>
    </form>
  );
}