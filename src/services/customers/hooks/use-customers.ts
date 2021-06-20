import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { showErrors } from '../../../common';
import { NewCustomerInput } from '../../../common/types';
import { State } from '../../../redux/types';
import {
  addCustomer,
  fetchCustomers,
  removeCustomer,
  getCustomersState,
  getCustomersErrors,
} from '../';

export const useCustomers = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const customersState = useSelector(getCustomersState);

  const customersErrors = useSelector(getCustomersErrors);

  useEffect(() => {
    if (!customersErrors) return;
    showErrors(customersErrors, addToast);
  }, [customersErrors]);

  const getCustomers = async () => {
    const res = await dispatch(fetchCustomers());
    // @ts-ignore
    if (res.ok)
      addToast('Customers successfully loaded', { appearance: 'success' });
  };

  const createCustomer = async (data: NewCustomerInput) => {
    const res = await dispatch(addCustomer(data));

    // @ts-ignore
    if (res.ok)
      addToast('Customer successfully created', { appearance: 'success' });
  };

  const deleteCustomer = async (id: string) => {
    const res = await dispatch(removeCustomer(id));

    // @ts-ignore
    if (res.ok)
      addToast('Customer successfully deleted', { appearance: 'success' });
  };

  return {
    customersState,
    getCustomers,
    createCustomer,
    deleteCustomer,
  };
};
