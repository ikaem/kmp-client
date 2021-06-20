import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CustomButton, LoadingSpinner } from '../common';
import { useCustomers } from '../services/customers';
import { isEmpty, isLoading, isValid } from '../services/api';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email().required('Valid email is required'),
});

export const Customers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ firstName: string; lastName: string; email: string }>({
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const { customersState, getCustomers, createCustomer, deleteCustomer } =
    useCustomers();

  const onSubmitNewCustomer = handleSubmit(createCustomer);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  const renderCustomers = useMemo(() => {
    const customersForRender =
      !isLoading(customersState) &&
      isValid(customersState) &&
      !isEmpty(customersState)
        ? customersState.customers
        : [];

    return customersForRender.map(
      ({ id, firstName, lastName, email }, index) => (
        <tr key={id} className='table-row'>
          <th scope='row'>{index + 1}</th>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>
            <CustomButton
              type='button'
              className='btn btn-danger'
              onClick={() => deleteCustomer(id)}
            >
              Delete
            </CustomButton>
          </td>
        </tr>
      )
    );
  }, [customersState, deleteCustomer]);

  return (
    <div className='container'>
      <section className='add-customer-section'>
        <h3>Add a customer</h3>
        <form className='add-customer_form' onSubmit={onSubmitNewCustomer}>
          <div className='row'>
            <div className='form-group col-12 col-md-4'>
              <label htmlFor='firstName' className='form-label'>
                First name
              </label>
              <input
                className='form-control'
                type='text'
                id='firstName'
                required
                {...register('firstName')}
              />
              {errors.firstName?.message && (
                <div className='form-text text-danger text-error'>
                  {errors.firstName?.message}
                </div>
              )}
            </div>
            <div className='form-group col-12 col-md-4'>
              <label htmlFor='lastName' className='form-label'>
                Last name
              </label>
              <input
                className='form-control'
                type='text'
                {...register('lastName')}
                id='lastName'
                required
              />
              {errors.lastName?.message && (
                <div className='form-text text-danger text-error'>
                  {errors.lastName?.message}
                </div>
              )}
            </div>
            <div className='form-group col-12 col-md-4'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                className='form-control'
                type='email'
                {...register('email')}
                id='email'
                required
              />
              {errors.email?.message && (
                <div className='form-text text-danger text-error'>
                  {errors.email?.message}
                </div>
              )}
            </div>
          </div>

          <CustomButton type='submit' className='btn btn-primary mt-3'>
            Add customer
          </CustomButton>
        </form>
      </section>

      <section className='customers-section'>
        <div className='d-flex justify-content-between'>
          <h3>Customers:</h3>
          {isLoading(customersState) && (
            <LoadingSpinner>Working...</LoadingSpinner>
          )}
        </div>

        <div className='table-responsive'>
          <table className='table table-striped table-hover'>
            <thead>
              <tr className='table-row'>
                <th scope='col'>#</th>
                <th scope='col'>First name</th>
                <th scope='col'>Last name</th>
                <th scope='col'>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{renderCustomers}</tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
