import { StateCreator } from 'zustand';
import type { Tenant, StoreState } from '../types';

export interface TenantSlice {
  tenants: Tenant[];
  addTenant: (tenant: Tenant) => void;
  updateTenant: (id: string, tenant: Partial<Tenant>) => void;
}

export const createTenantSlice: StateCreator<StoreState, [], [], TenantSlice> = (set) => ({
  tenants: [],
  
  addTenant: (tenant) =>
    set((state) => {
      const updatedFlats = state.flats.map(f => 
        f.id === tenant.flatId 
          ? { ...f, tenant, occupancyStatus: 'Occupied' as const }
          : f
      );
      
      return {
        tenants: [...state.tenants, tenant],
        flats: updatedFlats,
        apartments: state.apartments.map(a => ({
          ...a,
          flats: a.flats.map(f => 
            f.id === tenant.flatId
              ? { ...f, tenant, occupancyStatus: 'Occupied' as const }
              : f
          ),
        })),
      };
    }),
    
  updateTenant: (id, tenant) =>
    set((state) => {
      const updatedTenants = state.tenants.map((t) => 
        t.id === id ? { ...t, ...tenant } : t
      );

      const updatedFlats = state.flats.map(f => {
        if (f.tenant?.id === id) {
          return { ...f, tenant: updatedTenants.find(t => t.id === id) };
        }
        return f;
      });

      return {
        tenants: updatedTenants,
        flats: updatedFlats,
        apartments: state.apartments.map(a => ({
          ...a,
          flats: a.flats.map(f => {
            if (f.tenant?.id === id) {
              return { ...f, tenant: updatedTenants.find(t => t.id === id) };
            }
            return f;
          }),
        })),
      };
    }),
});