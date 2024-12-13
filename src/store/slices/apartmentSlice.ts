import { StateCreator } from 'zustand';
import type { Apartment, StoreState } from '../types';

export interface ApartmentSlice {
  apartments: Apartment[];
  addApartment: (apartment: Apartment) => void;
  updateApartment: (id: string, apartment: Partial<Apartment>) => void;
}

export const createApartmentSlice: StateCreator<StoreState, [], [], ApartmentSlice> = (set) => ({
  apartments: [],
  
  addApartment: (apartment) =>
    set((state) => ({ 
      apartments: [...state.apartments, apartment],
      flats: [...state.flats, ...apartment.flats]
    })),
    
  updateApartment: (id, apartment) =>
    set((state) => ({
      apartments: state.apartments.map((a) =>
        a.id === id ? { ...a, ...apartment } : a
      ),
    })),
});