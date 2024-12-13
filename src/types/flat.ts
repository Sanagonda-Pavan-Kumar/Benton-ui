export interface Flat {
  id: number;
  status: 'occupied' | 'vacant';
  rentAmount: number;
  tenant: string | null;
}