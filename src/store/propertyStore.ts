import { create } from 'zustand';
import { Property } from '../types/property';
import { properties as initialProperties } from '../data/properties';

interface PropertyStore {
  properties: Property[];
  addProperty: (property: Omit<Property, 'id'>) => void;
}

export const usePropertyStore = create<PropertyStore>((set) => ({
  properties: initialProperties,
  addProperty: (property) => set((state) => ({
    properties: [
      ...state.properties,
      {
        ...property,
        id: Math.max(...state.properties.map(p => p.id)) + 1,
      },
    ],
  })),
}));