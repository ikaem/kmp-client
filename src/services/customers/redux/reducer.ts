import { INITIAL_API_STATUS } from '../../../common/constants';
import { FailureAction, StartAction, SuccessAction } from '../../api/types';
import { CustomersState } from '../types';
import { CustomersActionsTypes } from './actions';

type AllActions = StartAction | SuccessAction | FailureAction;

const {
  CUSTOMERS_START,
  CUSTOMERS_GET,
  CUSTOMER_CREATE,
  CUSTOMER_DELETE,
  CUSTOMERS_FAILURE,
} = CustomersActionsTypes;

const initialState: CustomersState = {
  customers: [],
  api_status: INITIAL_API_STATUS,
};

export const customersReducer = (
  state = initialState,
  action: AllActions
): CustomersState => {
  switch (action.type) {
    case CUSTOMERS_START: {
      return {
        ...state,
        api_status: {
          ...state.api_status,
          isLoading: true,
        },
      };
    }

    case CUSTOMERS_GET: {
      return {
        ...state,
        customers: action.payload,
        api_status: {
          ...state.api_status,
          isLoading: false,
          isValid: true,
          isEmpty: false,
          isError: false,
          errors: null,
        },
      };
    }

    case CUSTOMER_CREATE: {
      return {
        ...state,
        customers: [action.payload, ...state.customers],
        api_status: {
          ...state.api_status,
          isLoading: false,
          isValid: true,
          isEmpty: false,
          isError: false,
          errors: null,
        },
      };
    }

    case CUSTOMER_DELETE: {
      return {
        ...state,
        customers: state.customers.filter((c) => c.id !== action.payload.id),
        api_status: {
          ...state.api_status,
          isLoading: false,
          isValid: true,
          isEmpty: false,
          isError: false,
          errors: null,
        },
      };
    }

    case CUSTOMERS_FAILURE: {
      return {
        ...state,
        api_status: {
          ...state.api_status,
          isLoading: false,
          isError: true,
          errors: action.payload.errors,
        },
      };
    }
    default:
      return state;
  }
};
