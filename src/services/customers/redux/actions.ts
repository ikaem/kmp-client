import { NewCustomerInput } from '../../../common/types';
import { createApiAction } from '../../api';
import { ApiConfig } from '../../api/types';

export enum CustomersActionsTypes {
  CUSTOMERS_START = 'customers_start',
  CUSTOMERS_GET = 'customers_get',
  CUSTOMER_CREATE = 'customer_create',
  CUSTOMER_DELETE = 'customer_delete',
  CUSTOMERS_FAILURE = 'customers_failure',
}

export const fetchCustomers = () => {
  const apiConfig: ApiConfig = {
    path: '/customers',
  };

  return createApiAction(apiConfig, [
    CustomersActionsTypes.CUSTOMERS_START,
    CustomersActionsTypes.CUSTOMERS_GET,
    CustomersActionsTypes.CUSTOMERS_FAILURE,
  ]);
};

export const addCustomer = (data: NewCustomerInput) => {
  const apiConfig: ApiConfig = {
    path: '/customers',
    method: 'POST',
    body: data,
  };

  return createApiAction(apiConfig, [
    CustomersActionsTypes.CUSTOMERS_START,
    CustomersActionsTypes.CUSTOMER_CREATE,
    CustomersActionsTypes.CUSTOMERS_FAILURE,
  ]);
};

export const removeCustomer = (id: string) => {
  const apiConfig: ApiConfig = {
    path: `/customers/${id}`,
    method: 'DELETE',
  };

  return createApiAction(apiConfig, [
    CustomersActionsTypes.CUSTOMERS_START,
    CustomersActionsTypes.CUSTOMER_DELETE,
    CustomersActionsTypes.CUSTOMERS_FAILURE,
  ]);
};
