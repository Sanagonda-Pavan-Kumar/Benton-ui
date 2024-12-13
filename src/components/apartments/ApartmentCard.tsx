import { Building2, Home, Edit, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Apartment } from '../../types';

interface ApartmentCardProps {
  apartment: Apartment;
  onEdit: (apartment: Apartment) => void;
}

export default function ApartmentCard({ apartment, onEdit }: ApartmentCardProps) {
  const navigate = useNavigate();
  const occupiedFlats = apartment.flats.filter(flat => flat.occupancyStatus === 'Occupied').length;
  
  return (
    <div 
      onClick={() => navigate(`/apartments/${apartment.id}`)}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer 
        hover:shadow-lg transform transition-all duration-200 hover:scale-[1.02]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <Building2 className="h-10 w-10 text-indigo-600" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{apartment.name}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Phone className="h-4 w-4 mr-1" />
              {apartment.mobileNumber}
            </div>
            <p className="text-sm text-gray-500 mt-1">{apartment.location}</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(apartment);
          }}
          className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 
            rounded-full transition-colors"
        >
          <Edit className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mt-4 flex items-center gap-4">
        <div className="flex items-center">
          <Home className="h-5 w-5 text-gray-400" />
          <span className="ml-2 text-sm text-gray-600">
            {occupiedFlats} / {apartment.numberOfFlats} occupied
          </span>
        </div>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-indigo-600 rounded-full h-2 transition-all duration-300"
            style={{ width: `${(occupiedFlats / apartment.numberOfFlats) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}