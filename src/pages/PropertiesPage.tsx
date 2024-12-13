import React from 'react';
import PropertyTable from '../components/table/PropertyTable';
import StatsSection from '../components/stats/StatsSection';
import { usePropertyStore } from '../store/propertyStore';
import { PropertyStatus } from '../types/property';

export const PropertiesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<PropertyStatus>('all');
  const properties = usePropertyStore(state => state.properties);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Mackeco Properties</h1>

      <StatsSection
        properties={properties}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <PropertyTable
        data={properties}
        filterStatus={activeFilter}
      />
    </div>
  );
};