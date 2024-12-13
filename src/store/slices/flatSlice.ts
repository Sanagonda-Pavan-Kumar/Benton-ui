import { StateCreator } from 'zustand';
import type { Flat, StoreState } from '../types';

export interface FlatSlice {
  flats: Flat[];
  addFlat: (flat: Flat) => void;
  updateFlat: (id: string, flat: Partial<Flat>) => void;
}

export const createFlatSlice: StateCreator<StoreState, [], [], FlatSlice> = (set) => ({
  flats: [],
  
  addFlat: (flat) =>
    set((state) => {
      const newFlat = { ...flat, tenant: undefined };
      return {
        flats: [...state.flats, newFlat],
        apartments: state.apartments.map((apartment) =>
          apartment.id === flat.apartmentId
            ? { ...apartment, flats: [...apartment.flats, newFlat] }
            : apartment
        ),
      };
    }),
    
  updateFlat: (id, flat) =>
    set((state) => {
      const updatedFlats = state.flats.map((f) => 
        f.id === id ? { ...f, ...flat } : f
      );
      
      return {
        flats: updatedFlats,
        apartments: state.apartments.map((apartment) => ({
          ...apartment,
          flats: apartment.flats.map((f) => 
            f.id === id ? { ...f, ...flat } : f
          ),
        })),
      };
    }),
});