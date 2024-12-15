export interface Property {
  id: number;
  name:string;
  phone:string;
  address: string;
  status: 'occupied' | 'vacant';
}

export type PropertyStatus = 'all' | 'occupied' | 'vacant';