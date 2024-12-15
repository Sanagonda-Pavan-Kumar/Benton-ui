import React from 'react';
import PropertyTable from '../components/table/PropertyTable';
import StatsSection from '../components/stats/StatsSection';
import { usePropertyStore } from '../store/propertyStore';
import { PropertyStatus } from '../types/property';
import { Breadcrumbs } from '../../src/components/breadCrumbs';

export const PropertiesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<PropertyStatus>('all');
  const properties = usePropertyStore(state => state.properties);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-sm text-white">
          <Breadcrumbs />
        </h2>
      </div>
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