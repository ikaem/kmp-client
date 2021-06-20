import { ApiStatus } from '../services/api/types';

export const INITIAL_API_STATUS: ApiStatus = {
  isLoading: false,
  isValid: false,
  isEmpty: true,
  isError: false,
  errors: null,
};
