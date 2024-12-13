import { StateCreator } from 'zustand';
import type { RentPayment, StoreState } from '../types';

export interface PaymentSlice {
  rentPayments: RentPayment[];
  addRentPayment: (payment: RentPayment) => void;
  updateRentPayment: (id: string, payment: Partial<RentPayment>) => void;
}

export const createPaymentSlice: StateCreator<StoreState, [], [], PaymentSlice> = (set) => ({
  rentPayments: [],
  
  addRentPayment: (payment) =>
    set((state) => ({ rentPayments: [...state.rentPayments, payment] })),
    
  updateRentPayment: (id, payment) =>
    set((state) => ({
      rentPayments: state.rentPayments.map((p) =>
        p.id === id ? { ...p, ...payment } : p
      ),
    })),
});