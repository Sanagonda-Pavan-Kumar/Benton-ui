import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataGrid, {
  Column,
  Paging,
  Pager,
  Export,
  SearchPanel
} from 'devextreme-react/data-grid';
import { Property, PropertyStatus } from '../../types/property';
import { StatusCell } from './cells/StatusCell';
import { MoneyCell } from './cells/MoneyCell';
import 'devextreme/dist/css/dx.light.css';

interface PropertyTableProps {
  data: Property[];
  filterStatus: PropertyStatus;
}

const PropertyTable: React.FC<PropertyTableProps> = ({ data, filterStatus }) => {
  const navigate = useNavigate();

  const filteredData = React.useMemo(
    () => data.filter((item) => filterStatus === 'all' || item.status === filterStatus),
    [data, filterStatus]
  );

  const onRowClick = (e: any) => {
    navigate(`/property/${e.data.id}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <DataGrid
        dataSource={filteredData}
        showBorders={true}
        columnAutoWidth={true}
        rowAlternationEnabled={true}
        allowColumnReordering={true}
        onRowClick={onRowClick}
        hoverStateEnabled={true}
      >
        <SearchPanel visible={true} width={240} placeholder='Search..' highlightCaseSensitive={true} />
        <Export enabled={true} />
        <Pager
          visible={true}
          showPageSizeSelector={true}
          showNavigationButtons={true}
          showInfo={true}
          infoText='Page {0} of {1} ({2} Properties)'
        />
        <Paging defaultPageSize={5} />

        <Column
          dataField="id"
          caption="ID"
          width={70}
          alignment="left"
        />
        <Column
          dataField="address"
          caption="Name"
          alignment="center"
        />
        <Column
          dataField="status"
          caption="Status"
          cellRender={StatusCell}
          alignment="center"
        />
        <Column
          dataField="monthlyRent"
          caption="Monthly Rent"
          cellRender={MoneyCell}
          alignment="center"
        />
      </DataGrid>
    </div>
  );
};

export default PropertyTable;