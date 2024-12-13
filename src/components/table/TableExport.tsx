import React from 'react';
import { FileSpreadsheet, FileText } from 'lucide-react';
import { Property } from '../../types/property';
import { utils, writeFile } from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface TableExportProps {
  data: Property[];
}

const TableExport: React.FC<TableExportProps> = ({ data }) => {
  const exportToExcel = () => {
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Properties');
    writeFile(wb, 'properties.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['ID', 'Address', 'Status', 'Monthly Rent', 'Square Feet', 'Lease End']],
      body: data.map(item => [
        item.id,
        item.address,
        item.status,
        `$${item.monthlyRent}`,
        item.sqft,
        item.leaseEnd || '-'
      ]),
    });
    doc.save('properties.pdf');
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={exportToExcel}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FileSpreadsheet className="h-4 w-4 mr-2" />
        Export to Excel
      </button>
      <button
        onClick={exportToPDF}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FileText className="h-4 w-4 mr-2" />
        Export to PDF
      </button>
    </div>
  );
};

export default TableExport;