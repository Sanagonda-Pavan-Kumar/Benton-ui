import type { 
  ApartmentSlice 
} from './slices/apartmentSlice';
import type { 
  FlatSlice 
} from './slices/flatSlice';
import type { 
  TenantSlice 
} from './slices/tenantSlice';
import type { 
  IssueSlice 
} from './slices/issueSlice';
import type { 
  PaymentSlice 
} from './slices/paymentSlice';

export type StoreState = 
  ApartmentSlice & 
  FlatSlice & 
  TenantSlice & 
  IssueSlice & 
  PaymentSlice;