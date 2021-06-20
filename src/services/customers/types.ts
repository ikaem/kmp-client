import { CustomerData } from '../../common/types';
import { ApiStatus } from '../api/types';

export interface CustomersState {
  customers: CustomerData[];
  api_status: ApiStatus;
}
