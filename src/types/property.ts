export interface Property {
  id: number;
  address: string;
  status: 'occupied' | 'vacant';
  monthlyRent: number;
}

export type PropertyStatus = 'all' | 'occupied' | 'vacant';