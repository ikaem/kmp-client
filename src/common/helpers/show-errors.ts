import { AddToast } from 'react-toast-notifications';
import { ErrorData } from '../../services/api/types';

export const showErrors = (errors: ErrorData[], addToast: AddToast) => {
  for (const err of errors) {
    addToast(err.msg, {
      appearance: 'error',
    });
  }
};
