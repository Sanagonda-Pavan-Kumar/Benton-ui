import React from 'react';
import DataGrid, {
  Column,
  Paging,
  Pager,
  FilterRow,
  HeaderFilter,
  Export,
  Selection
} from 'devextreme-react/data-grid';
import { Property } from '../../types/property';
import { StatusBadge } from '../ui/StatusBadge';
import 'devextreme/dist/css/dx.light.css';

interface PropertyGridProps {
  properties: Property[];
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <DataGrid
        dataSource={properties}
        showBorders={true}
        columnAutoWidth={true}
        rowAlternationEnabled={true}
        allowColumnReordering={true}
      >
        <Selection mode="multiple" />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Export enabled={true} />
        <Paging defaultPageSize={10} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[10, 20, 40, 60, 80]}
          showInfo={true}
        />

        <Column dataField="id" caption="ID" width={70} />
        <Column dataField="address" caption="Address" />
        <Column
          dataField="status"
          caption="Status"
          cellRender={({ value }) => <StatusBadge status={value} />}
        />
        <Column
          dataField="monthlyRent"
          caption="Monthly Rent"
          format="currency"
          dataType="number"
        />
        <Column dataField="sqft" caption="Square Feet" dataType="number" />
        <Column
          dataField="leaseEnd"
          caption="Lease End"
          dataType="date"
          format="shortDate"
        />
      </DataGrid>
    </div>
  );
};