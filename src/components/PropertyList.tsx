import React from 'react';
import { Home } from 'lucide-react';

interface Property {
  id: number;
  address: string;
  status: 'occupied' | 'vacant';
  price: string;
}

interface PropertyListProps {
  properties: Property[];
  filterStatus: 'all' | 'occupied' | 'vacant';
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, filterStatus }) => {
  const filteredProperties = properties.filter(
    property => filterStatus === 'all' || property.status === filterStatus
  );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Property Details</h2>
      <div className="grid gap-4">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Home className={property.status === 'occupied' ? 'text-green-500' : 'text-red-500'} />
              <div>
                <p className="font-medium">{property.address}</p>
                <span className={`text-sm ${
                  property.status === 'occupied' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </span>
              </div>
            </div>
            <p className="font-semibold">{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;