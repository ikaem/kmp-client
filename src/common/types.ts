export interface NewCustomerInput {
  firstName: string;
  lastName: string;
  email: string;
}

export interface CustomerData extends NewCustomerInput {
  id: string;
  createdAt: string;
  updatedAt: string;
}
