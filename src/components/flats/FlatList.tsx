import { Home, User, DollarSign } from 'lucide-react';
import type { Flat } from '../../types';

interface FlatListProps {
  flats: Flat[];
  onEditFlat: (flat: Flat) => void;
}

export default function FlatList({ flats, onEditFlat }: FlatListProps) {
  return (
    <div className="space-y-4">
      {flats.map((flat) => (
        <div
          key={flat.id}
          onClick={() => onEditFlat(flat)}
          className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Home className="h-5 w-5 text-gray-400" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Flat {flat.flatNumber}
                </h4>
                <p className="text-sm text-gray-500">
                  {flat.occupancyStatus}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {flat.tenant && (
                <div className="flex items-center">
                  <User className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">{flat.tenant.name}</span>
                </div>
              )}
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">
                  ${flat.rentAmount}/month
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}