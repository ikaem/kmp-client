import { State } from '../../../redux/types';

export const getCustomersState = (state: State) => state.customers;
export const getCustomersErrors = (state: State) =>
  state.customers.api_status.errors;
