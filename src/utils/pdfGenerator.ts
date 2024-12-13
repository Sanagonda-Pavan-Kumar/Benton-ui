import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generatePaymentHistoryPDF = async (flatId: number) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(16);
  doc.text(`Payment History - Flat ${flatId}`, 14, 15);
  
  // Mock payment data
  const paymentHistory = [
    { date: '2024-01-01', amount: 1500, status: 'Paid' },
    { date: '2024-02-01', amount: 1500, status: 'Paid' },
    { date: '2024-03-01', amount: 1500, status: 'Pending' },
  ];

  autoTable(doc, {
    startY: 25,
    head: [['Date', 'Amount', 'Status']],
    body: paymentHistory.map(payment => [
      new Date(payment.date).toLocaleDateString(),
      `$${payment.amount}`,
      payment.status
    ]),
  });

  doc.save(`flat-${flatId}-payment-history.pdf`);
};