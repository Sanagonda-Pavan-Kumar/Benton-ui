import { Flat } from '../types/flat';

export const mockFlats: Flat[] = [
  { id: 101, status: 'occupied', rentAmount: 1500, tenant: 'John Doe' },
  { id: 102, status: 'vacant', rentAmount: 1600, tenant: null },
  { id: 103, status: 'occupied', rentAmount: 1450, tenant: 'Jane Smith' },
];