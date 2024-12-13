import React from 'react';
import { Plus } from 'lucide-react';

interface AddPropertyButtonProps {
  onClick: () => void;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Plus size={20} />
      <span>Add Property</span>
    </button>
  );
};

export default AddPropertyButton;