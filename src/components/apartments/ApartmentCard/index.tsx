import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Apartment } from '../../../types';
import CardHeader from './CardHeader';
import OccupancyIndicator from './OccupancyIndicator';

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
      className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-200 
        hover:shadow-xl hover:scale-102 cursor-pointer border border-transparent 
        hover:border-indigo-100 group"
    >
      <CardHeader
        name={apartment.name}
        mobileNumber={apartment.mobileNumber}
        location={apartment.location}
        onEdit={() => onEdit(apartment)}
      />
      
      <div className="mt-6">
        <OccupancyIndicator
          occupiedFlats={occupiedFlats}
          totalFlats={apartment.numberOfFlats}
        />
      </div>

      <div className="absolute inset-0 rounded-lg transition-colors duration-200 pointer-events-none 
        group-hover:bg-indigo-50/10" 
      />
    </div>
  );
}