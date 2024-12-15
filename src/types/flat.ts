export interface Flat {
  // id: number;
  roomNumber:string;
  rentAmount: number;
  status: 'occupied' | 'vacant';
  buildingId: number;
  // tenant: string | null;
}