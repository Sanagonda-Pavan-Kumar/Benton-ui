import jsPDF from 'jspdf';
import { format } from 'date-fns';
import type { RentPayment } from '../types';

export function generateInvoicePDF(
  payment: RentPayment, 
  apartmentName: string, 
  flatNumber: string, 
  tenantName: string
): string {
  const doc = new jsPDF();
  
  // Add header
  doc.setFontSize(20);
  doc.text('RENT INVOICE', 105, 20, { align: 'center' });
  
  // Add logo/header image
  doc.setFillColor(63, 81, 181);
  doc.rect(20, 30, 170, 2, 'F');
  
  // Add invoice details
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  
  const details = [
    ['Invoice Date:', format(new Date(), 'MMM d, yyyy')],
    ['Due Date:', format(new Date(payment.dueDate), 'MMM d, yyyy')],
    ['Status:', payment.status],
    ['Payment ID:', payment.id],
    [''],
    ['Property Details'],
    ['Apartment:', apartmentName],
    ['Flat Number:', flatNumber],
    ['Tenant Name:', tenantName],
    [''],
    ['Payment Details'],
    ['Amount:', `$${payment.amount.toFixed(2)}`],
  ];

  if (payment.status === 'Paid' && payment.paidAt) {
    details.push(['Paid Date:', format(new Date(payment.paidAt), 'MMM d, yyyy')]);
  }
  
  let yPos = 50;
  details.forEach(([label, value]) => {
    if (!value) {
      doc.setFont('helvetica', 'bold');
      doc.text(label, 20, yPos);
    } else {
      doc.setFont('helvetica', 'bold');
      doc.text(label, 20, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(value, 70, yPos);
    }
    yPos += 10;
  });
  
  // Add footer
  doc.setFillColor(63, 81, 181);
  doc.rect(20, 250, 170, 2, 'F');
  doc.setFontSize(10);
  doc.text('This is a computer-generated document. No signature is required.', 105, 260, { align: 'center' });
  
  return doc.output('datauristring');
}