import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import DataGrid, {
  Column,
  Paging,
  Pager,
  FilterRow,
  HeaderFilter,
  SearchPanel
} from 'devextreme-react/data-grid';
import { mockFlats } from '../../data/mockFlats';
import { ROUTES } from '../../config/constants';
import { generatePaymentHistoryPDF } from '../../utils/pdfGenerator';
import { StatusCell } from '../table/cells/StatusCell';
import { MoneyCell } from '../table/cells/MoneyCell';
import 'devextreme/dist/css/dx.light.css';

export const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePaymentHistory = async (flatId: number) => {
    await generatePaymentHistoryPDF(flatId);
  };

  const actionCellRender = (cellData: any) => {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePaymentHistory(cellData.data.id)}
        className="inline-flex items-center"
      >
        <FileText className="h-4 w-4 mr-2" />
        Payment History
      </Button>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(ROUTES.HOME)}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-bold">Property Details - ID: {id}</h2>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <DataGrid
          dataSource={mockFlats}
          showBorders={true}
          columnAutoWidth={true}
          rowAlternationEnabled={true}
          hoverStateEnabled={true}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />
          <FilterRow visible={true} />
          <HeaderFilter visible={true} />
          <Paging defaultPageSize={10} />
          <Pager
            showPageSizeSelector={true}
            allowedPageSizes={[5, 10, 20]}
            showInfo={true}
          />

          <Column 
            dataField="id" 
            caption="Flat ID" 
            width={100}
            alignment="left"
          />
          <Column 
            dataField="status"
            caption="Status"
            cellRender={StatusCell}
            alignment="left"
          />
          <Column 
            dataField="rentAmount"
            caption="Rent Amount"
            cellRender={MoneyCell}
            alignment="right"
          />
          <Column 
            dataField="tenant"
            caption="Tenant"
            alignment="left"
            calculateCellValue={(data) => data.tenant || '-'}
          />
          <Column
            caption="Actions"
            cellRender={actionCellRender}
            alignment="center"
            width={150}
          />
        </DataGrid>
      </div>
    </div>
  );
};