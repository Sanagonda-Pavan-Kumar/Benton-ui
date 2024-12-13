import { Building2, Phone, Edit } from 'lucide-react';

interface CardHeaderProps {
  name: string;
  mobileNumber: string;
  location: string;
  onEdit: () => void;
}

export default function CardHeader({ name, mobileNumber, location, onEdit }: CardHeaderProps) {
  return (
    <div className="flex items-start justify-between relative">
      <div className="flex items-center">
        <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
          <Building2 className="h-8 w-8 text-indigo-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
            {name}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Phone className="h-4 w-4 mr-1" />
            {mobileNumber}
          </div>
          <p className="text-sm text-gray-500 mt-1">{location}</p>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
        className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-100 rounded-full 
          transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-1 
          group-hover:translate-y-0"
        aria-label="Edit apartment"
      >
        <Edit className="h-5 w-5" />
      </button>
    </div>
  );
}