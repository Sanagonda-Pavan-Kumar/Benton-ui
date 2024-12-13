export interface Apartment {
  id: string;
  name: string;
  mobileNumber: string; // Added mobile number
  location: string;
  numberOfFlats: number;
  flats: Flat[];
}

export interface Flat {
  id: string;
  apartmentId: string;
  flatNumber: string;
  rentAmount: number;
  occupancyStatus: 'Occupied' | 'Vacant';
  tenant?: Tenant;
}

export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  moveInDate: string;
  flatId: string;
  idProofUrl?: string;
}

export interface Issue {
  id: string;
  flatId: string;
  tenantId: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Resolved';
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RentPayment {
  id: string;
  flatId: string;
  tenantId: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Unpaid';
  paidAt?: string;
  invoiceUrl?: string;
}