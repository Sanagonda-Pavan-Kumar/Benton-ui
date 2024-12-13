import { create } from 'zustand';
import { createApartmentSlice } from './slices/apartmentSlice';
import { createFlatSlice } from './slices/flatSlice';
import { createTenantSlice } from './slices/tenantSlice';
import { createIssueSlice } from './slices/issueSlice';
import { createPaymentSlice } from './slices/paymentSlice';
import type { StoreState } from './types';
import { apartmentData } from '../data/apartmentData';

export const useStore = create<StoreState>()((...a) => ({
  ...createApartmentSlice(...a),
  ...createFlatSlice(...a),
  ...createTenantSlice(...a),
  ...createIssueSlice(...a),
  ...createPaymentSlice(...a),
  
  initializeDefaultApartments: () => {
    const defaultApartments = [
      {
        id: apartmentData.building1.id,
        name: apartmentData.building1.name,
        location: apartmentData.building1.location,
        numberOfFlats: apartmentData.building1.numberOfFlats,
        mobileNumber: apartmentData.building1.mobileNumber,
        flats: apartmentData.building1.flats.map(flat => ({
          id: `b1-${flat.number}`,
          apartmentId: apartmentData.building1.id,
          flatNumber: flat.number,
          rentAmount: flat.rent,
          occupancyStatus: flat.status as 'Occupied' | 'Vacant'
        }))
      },
      {
        id: apartmentData.building2.id,
        name: apartmentData.building2.name,
        location: apartmentData.building2.location,
        numberOfFlats: apartmentData.building2.numberOfFlats,
        mobileNumber: apartmentData.building2.mobileNumber,
        flats: apartmentData.building2.flats.map(flat => ({
          id: `b2-${flat.number}`,
          apartmentId: apartmentData.building2.id,
          flatNumber: flat.number,
          rentAmount: flat.rent,
          occupancyStatus: flat.status as 'Occupied' | 'Vacant'
        }))
      }
    ];

    a[0]((state) => ({ ...state, apartments: defaultApartments }));
  }
}));