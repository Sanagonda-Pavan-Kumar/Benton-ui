import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataGrid, {
  Column,
  Paging,
  Pager,
  Selection,
  SearchPanel,
  ColumnChooser,
  ColumnFixing
} from 'devextreme-react/data-grid';
import { Property, PropertyStatus } from '../../types/property';
import { StatusCell } from './cells/StatusCell';
import 'devextreme/dist/css/dx.light.css';
import { TABLE_PAGE_SIZES } from '../../config/constants';

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
  const [isWindowSizeSmall, setIsWindowSizeSmall] = useState(false);
  useEffect(() => {
    const checkWindowSize = () => {
      setIsWindowSizeSmall(window.innerWidth <= 1813);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize, { passive: true });

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg data-grid-container">
      <DataGrid
        dataSource={filteredData}
        showBorders={true}
        columnAutoWidth={true}
        rowAlternationEnabled={true}
        allowColumnReordering={true}
        onRowClick={onRowClick}
        hoverStateEnabled={true}
        showColumnLines={false}
        showRowLines={true}
        wordWrapEnabled={true}
        allowColumnResizing={true}
        style={{
          textTransform: "capitalize",
          height: isWindowSizeSmall ? "60vh" : "74vh",
        }}
        // height="100%"
        remoteOperations={{
          filtering: true,
          sorting: true,
          paging: true,
          grouping: true,
          groupPaging: true,
          summary: true,
        }}
      >
        <Selection mode='single' />
        <ColumnChooser enabled={true} />
        <ColumnFixing enabled={true} />
        <SearchPanel width={240} visible={true} placeholder="Search..." />
        <Column
          dataField="id"
          caption="ID"
          minWidth={70}
          alignment="center"
        />
        <Column
          dataField="name"
          caption="Name"
          alignment="left"
        />
        <Column
          dataField="phone"
          caption="Phone"
          alignment="left"
        />
        <Column
          dataField="address"
          caption="Address"
          alignment="left"
        />
        <Column
          dataField="status"
          caption="Status"
          cellRender={StatusCell}
          alignment="left"
        />
        {/* <Column 
          dataField="monthlyRent"
          caption="Monthly Rent"
          cellRender={MoneyCell}
          alignment="right"
        /> */}

        <Pager
          visible={true}
          allowedPageSizes={TABLE_PAGE_SIZES}
          showPageSizeSelector={true}
          showNavigationButtons={true}
          showInfo={true}
          infoText='Page {0} of {1} ({2} Properties)'
        />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
};

export default PropertyTable;