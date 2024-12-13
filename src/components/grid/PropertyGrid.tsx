import React from 'react';
import DataGrid, {
  Column,
  SearchPanel,
  Paging,
  FilterRow,
  HeaderFilter,
  Export,
} from 'devextreme-react/data-grid';
import { Property, PropertyStatus } from '../../types/property';
import 'devextreme/dist/css/dx.light.css';

interface PropertyGridProps {
  properties: Property[];
  filterStatus: PropertyStatus;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, filterStatus }) => {
  const filteredProperties = properties.filter(
    property => filterStatus === 'all' || property.status === filterStatus
  );

  const statusCellRender = (data: any) => {
    const color = data.value === 'occupied' ? 'text-green-500' : 'text-red-500';
    return (
      <span className={`font-medium ${color}`}>
        {data.value.charAt(0).toUpperCase() + data.value.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <DataGrid
        dataSource={filteredProperties}
        showBorders={true}
        columnAutoWidth={true}
        rowAlternationEnabled={true}
        allowColumnReordering={true}
      >
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Export enabled={true} />
        <Paging defaultPageSize={10} />

        <Column dataField="id" caption="ID" width={70} />
        <Column dataField="address" caption="Address" />
        <Column
          dataField="status"
          caption="Status"
          cellRender={statusCellRender}
        />
        <Column dataField="monthlyRent" caption="Monthly Rent" format="currency" />
        <Column dataField="sqft" caption="Square Feet" />
        <Column dataField="bedrooms" caption="Bedrooms" />
        <Column dataField="bathrooms" caption="Bathrooms" />
        <Column dataField="tenant" caption="Tenant" />
        <Column dataField="leaseEnd" caption="Lease End Date" dataType="date" />
      </DataGrid>
    </div>
  );
};

export default PropertyGrid;