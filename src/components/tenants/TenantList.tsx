import { User, Calendar, Phone } from 'lucide-react';
import { format } from 'date-fns';
import type { Tenant } from '../../types';

interface TenantListProps {
  tenants: Tenant[];
  onEditTenant: (tenant: Tenant) => void;
}

export default function TenantList({ tenants, onEditTenant }: TenantListProps) {
  return (
    <div className="space-y-4">
      {tenants.map((tenant) => (
        <div
          key={tenant.id}
          onClick={() => onEditTenant(tenant)}
          className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <User className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{tenant.name}</h4>
                <p className="text-sm text-gray-500">{tenant.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{tenant.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">
                  {format(new Date(tenant.moveInDate), 'MMM d, yyyy')}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}