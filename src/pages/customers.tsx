import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CustomButton } from '../common';
import React from 'react';

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

  const onSubmit = handleSubmit((data) => {
    console.log('data');
  });

  return (
    <div className='container'>
      <section className='add-customer-section'>
        <h3>Add a customer</h3>
        <form className='add-customer_form' onSubmit={onSubmit}>
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
        <h3>Customers:</h3>

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
            <tbody>
              <tr className='table-row'>
                <th scope='row'>1</th>
                <td>Karlo</td>
                <td>Marinović</td>
                <td>email</td>
                <td>
                  <CustomButton
                    type='submit'
                    className='btn btn-danger'
                    onClick={async (e) => console.log('what')}
                  >
                    Delete
                  </CustomButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
